function headerBg(){
    var header = document.getElementById("header")
    var scrollVal = window.scrollY;
    if(scrollVal < 100){
        header.classList.remove('headerbg')
    }else{
        header.classList.add('headerbg')
    }
}

window.addEventListener('scroll',headerBg);


const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchIcon");

searchBtn.addEventListener("click",() => {
    searchBox.classList.toggle("searchBox--open");
})


const searchBtn2 = document.querySelector(".searchIcon2");

searchBtn2.addEventListener("click",() => {
    searchBox.classList.toggle("searchBox--open");
})


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".hamMenu")
const header = document.querySelector(".header")

hamburger.addEventListener("click",() => {
    nav.classList.toggle('hamMenu--open')
    hamburger.classList.toggle("hamburger--open");
    searchBox.classList.remove("searchBox--open");
    header.classList.toggle("header--open")
})

