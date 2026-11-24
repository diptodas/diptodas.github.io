// Full-size image viewer for images marked data-zoomable (zoomable=true in figure.liquid).
// It opens the original image file in an overlay at its own size instead of stretching the
// small thumbnail, so zoomed images stay sharp in every browser, including Safari.
(function () {
  function setup() {
    var style = document.createElement("style");
    style.textContent =
      "img[data-zoomable] { cursor: zoom-in; }" +
      ".image-lightbox { position: fixed; inset: 0; z-index: 2000; display: flex; align-items: center;" +
      " justify-content: center; background: transparent; cursor: zoom-out; }" +
      ".image-lightbox[hidden] { display: none; }" +
      ".image-lightbox img { flex: none; max-width: none; max-height: none;" +
      " background: #fff; border-radius: 4px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35); }";
    document.head.appendChild(style);

    var box = document.createElement("div");
    box.className = "image-lightbox";
    box.hidden = true;
    var big = document.createElement("img");
    big.alt = "";
    box.appendChild(big);
    document.body.appendChild(box);

    // Size the image explicitly (up to 90% of the window width and 85% of its height, never
    // larger than the file itself) so every browser, including Safari, shows it the same way.
    function fit() {
      var w = big.naturalWidth;
      var h = big.naturalHeight;
      if (!w || !h) return;
      var scale = Math.min(1, (window.innerWidth * 0.9) / w, (window.innerHeight * 0.85) / h);
      big.style.width = Math.round(w * scale) + "px";
      big.style.height = Math.round(h * scale) + "px";
      big.style.visibility = "visible";
    }
    big.addEventListener("load", fit);
    window.addEventListener("resize", function () {
      if (!box.hidden) fit();
    });

    function close() {
      box.hidden = true;
      big.removeAttribute("src");
    }

    document.addEventListener("click", function (e) {
      var img = e.target.closest ? e.target.closest("img[data-zoomable]") : null;
      if (!img) return;
      e.preventDefault();
      big.style.visibility = "hidden";
      big.src = img.getAttribute("src");
      if (big.complete) fit();
      big.alt = img.alt || "";
      box.hidden = false;
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !box.hidden) close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
