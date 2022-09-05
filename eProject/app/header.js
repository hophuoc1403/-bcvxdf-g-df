const menu = document.querySelector(".menus");
const menu_response = document.querySelector(".menu-responsive");

menu_response.addEventListener("click", () => {
  menu.style.display = "block";
  console.log("click");
});

console.log("hello");
