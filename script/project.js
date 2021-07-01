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

},
{ 
    projectName: "Covid tracker",
    projectImg: "./images/covid.png",
    gitHubLink: "https://github.com/pritamkr1/covid",
    liveLink: "https://covid-pritam.vercel.app/",

},
{ 
    projectName: "Basic banking system",
    projectImg: "./images/bank.png",
    gitHubLink: "https://github.com/pritamkr1/Basic-banking-system",
    liveLink: "https://pritam-kumar.herokuapp.com/",

},
{ 
    projectName: "Github profile card",
    projectImg: "./images/github-profile-card.png",
    gitHubLink: "https://github.com/pritam-kr/github-profile-card",
    liveLink: "https://github-profile-card-by-pritam.netlify.app/",

},
{ 
    projectName: "Simple movie app",
    projectImg: "./images/movieapp.png",
    gitHubLink: "https://github.com/pritam-kr/Simple-movie-app",
    liveLink: "https://simple-movie-app-code-by-pritam.netlify.app/",

},
{ 
    projectName: "BinaryInc.",
    projectImg: "./images/binaryinc.png",
    gitHubLink: "#",
    liveLink: "https://binary-inc-githbu-io.vercel.app/index.html",

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
