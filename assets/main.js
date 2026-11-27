(function () {
  var doc = document;
  var root = doc.documentElement;
  var ham = doc.getElementById("mob-toggle");
  var drawer = doc.getElementById("mob-drawer");
  var overlay = doc.getElementById("mob-overlay");
  var closeBtn = doc.getElementById("mob-close");

  function openMenu() {
    if (!drawer) { return; }
    drawer.classList.add("open");
    overlay.classList.add("open");
    root.style.overflow = "hidden";
    ham.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    if (!drawer) { return; }
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    root.style.overflow = "";
    ham.setAttribute("aria-expanded", "false");
  }
  if (ham) { ham.addEventListener("click", openMenu); }
  if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
  if (overlay) { overlay.addEventListener("click", closeMenu); }
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeMenu(); }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) { closeMenu(); }
  });

  var qs = doc.querySelectorAll(".faq-q");
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener("click", function () {
      var btn = this;
      var panel = btn.nextElementSibling;
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
  }
})();
