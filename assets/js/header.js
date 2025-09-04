document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("navBar")
  const menu = document.getElementById("menuNavigasi")
  const exit = document.getElementById("xNavigasi")
  const home = document.getElementById("navhome")
  const tipsaksi = document.getElementById("navtisi")
  const galeri = document.getElementById("navgaleri")
  const tim = document.getElementById("navtim")
  const suit = document.getElementById("navsuit")
  const lNavGame = document.getElementById("listnavgame")
  const arrowNavGame = document.getElementById("navcepron")
  const pGame = document.getElementById("pNavGame")
  const navSortir = document.getElementById("navsortir")
  
  
  

  
  bar.addEventListener("click", () => {
    menu.classList.remove("ilang")
    menu.classList.add("muncul")
    bar.style.opacity = "0"
  })
  
  exit.addEventListener("click", () => {
    menu.classList.remove("muncul")
    menu.classList.add("ilang")
    bar.style.opacity = "1"
  })
  
  home.addEventListener("click", () => {
    window.location.assign("index.html")
  })
})