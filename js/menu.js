function toggleMenu() {
    var menuList = document.getElementsByClassName("menu-list")[0];
    var menuButton = document.getElementById("menu-btn");
    var isOpen = menuList.classList.contains("active");
    if (isOpen) {
      menuList.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menu";
    } else {
      menuList.classList.add("active");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.innerHTML = "<span class=\"icon arrow-up\" aria-hidden=\"true\"></span>";
    }
}
