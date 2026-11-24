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

    var current = 0; // which opening is the latest, so a slow earlier one can't resize a newer image
    var size = null; // the open image's real pixel size

    // Real pixel size of an image file. Safari sizes some images by the resolution (dpi) tags
    // stored in the file, which can make them look tiny; decoding the file itself avoids that.
    function pixelSize(src) {
      if (!window.fetch || !window.createImageBitmap) return Promise.resolve(null);
      return fetch(src)
        .then(function (r) {
          return r.blob();
        })
        .then(function (blob) {
          return createImageBitmap(blob);
        })
        .then(function (bmp) {
          var s = { w: bmp.width, h: bmp.height };
          if (bmp.close) bmp.close();
          return s;
        })
        .catch(function () {
          return null;
        });
    }

    // Show the image as large as fits (up to 90% of the window width and 85% of its height),
    // but never larger than the file itself, so it is never stretched.
    function fit() {
      if (!size || !size.w || !size.h) return;
      var scale = Math.min(1, (window.innerWidth * 0.9) / size.w, (window.innerHeight * 0.85) / size.h);
      big.style.width = Math.round(size.w * scale) + "px";
      big.style.height = Math.round(size.h * scale) + "px";
      big.style.visibility = "visible";
    }
    window.addEventListener("resize", function () {
      if (!box.hidden) fit();
    });

    function close() {
      current++;
      box.hidden = true;
      size = null;
      big.removeAttribute("src");
    }

    document.addEventListener("click", function (e) {
      var img = e.target.closest ? e.target.closest("img[data-zoomable]") : null;
      if (!img) return;
      e.preventDefault();
      var id = ++current;
      var src = img.getAttribute("src");
      size = null;
      big.style.visibility = "hidden";
      big.src = src;
      big.alt = img.alt || "";
      box.hidden = false;
      pixelSize(src).then(function (s) {
        if (id !== current) return;
        if (s) {
          size = s;
          fit();
        } else {
          // Fallback: use the browser's own idea of the size once the image has loaded.
          var useNatural = function () {
            if (id !== current) return;
            size = { w: big.naturalWidth, h: big.naturalHeight };
            fit();
          };
          if (big.complete && big.naturalWidth) useNatural();
          else big.addEventListener("load", useNatural, { once: true });
        }
      });
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
