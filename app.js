const navEl = document.querySelector("nav")
const contentEl = document.querySelector(".content")
const hamburgerEL = document.querySelector(".hamburger")
const BarsEl = document.getElementsByTagName("span")
 


function toggleNav(){

  hamburgerEL.addEventListener("click", function () {

    navEl.classList.toggle("open")
    contentEl.classList.toggle("shift")
    animate()

  })


}

 function animate(){

   for (let item of BarsEl)
   item.classList.toggle("change")

 }

toggleNav()
