const myAllProjects = [{ 
    projectName: "List search",
    projectImg: "./images/listting.png",
    gitHubLink: "https://github.com/pritamkr1/myclock",
    liveLink: "https://search-result.vercel.app/",
},
{ 
    projectName: "Twitter layout",
    projectImg: "./images/8.png",
    gitHubLink: "https://github.com/pritamkr1/twitter",
    liveLink: "https://twitter-psi.vercel.app/",
},
{ 
    projectName: "Basic payment integration",
    projectImg: "./images/payment.png",
    gitHubLink: "https://github.com/pritamkr1/payment-gateway",
    liveLink: "https://payment-gateway-liard.vercel.app/",

},
{ 
    projectName: "Github profile viewer",
    projectImg: "./images/github.png",
    gitHubLink: "https://github.com/pritam-kr/Github-profile",
    liveLink: "https://determined-meninsky-dbca89.netlify.app/index.html",

}]

window.addEventListener('load', (element) => {
    let eachProject = '';
    myAllProjects.forEach((el) => {
        eachProject += `
        
        <div class="projetc-card">
                            <img src="${el.projectImg}">
                            <div class="overlay">
                                <div class="overlay-content">
                                    <p class="project_name">${el.projectName}</p>
                                   <a href="${el.gitHubLink}" target="_blank"><i class="fab fa-github"></a></i> <a href="${el.liveLink}" target="_blank"><i class="fas fa-globe-europe"></i></a>
                                </div>
                            </div>
        </div>
        
        `
        document.querySelector('.project-row').innerHTML = eachProject;
    })
})
