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
      ".image-lightbox img { max-width: 90vw; max-height: 85vh; width: auto; height: auto;" +
      " border-radius: 4px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35); }";
    document.head.appendChild(style);

    var box = document.createElement("div");
    box.className = "image-lightbox";
    box.hidden = true;
    var big = document.createElement("img");
    big.alt = "";
    box.appendChild(big);
    document.body.appendChild(box);

    function close() {
      box.hidden = true;
      big.removeAttribute("src");
    }

    document.addEventListener("click", function (e) {
      var img = e.target.closest ? e.target.closest("img[data-zoomable]") : null;
      if (!img) return;
      e.preventDefault();
      big.src = img.getAttribute("src");
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
