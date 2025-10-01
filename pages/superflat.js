const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    hamburger.addEventListener("click", () => {
      menu.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });