const btnBar = document.querySelector('.btn-bar');
var mobilePage = document.querySelector('.mobile-navul');
console.log(mobilePage)
btnBar.addEventListener('click', (shoeNav) => {
    mobilePage.classList.toggle('show');
})