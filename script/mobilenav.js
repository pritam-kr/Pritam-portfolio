
const desktopPages = ["CV", "Blog", "Resources", "Video", "Contact"];
desktopPages.forEach((page) => {
    var desktopEachPages = '';
    desktopEachPages = `

    <ul>
        <li><a href="https://pritam-cv.vercel.app/" target="_blank" class="links">CV</a></li>
        <li><a href="#" class="links">Blog</a></li>
        <li><a href="#" class="links">Resources</a></li>
        <li><a href="https://www.youtube.com/channel/UC7LfgvNkDe5LoQiwExMn0EA" target="_blank" class="links">Video</a></li>
        <li><a href="#" class="links">Contact</a></li>
    </ul>

    `
    document.querySelector('#page-section').innerHTML = desktopEachPages;
})



const btnBar = document.querySelector('.btn-bar');
var mobilePage = document.querySelector('.mobile-navul');
console.log(mobilePage)
btnBar.addEventListener('click', (shoeNav) => {
    mobilePage.classList.toggle('show');
})