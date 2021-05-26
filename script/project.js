const myAllProjects = [{ 
    projectName: "Digital clock",
    projectImg: "./images/listting.png",
    gitHubLink: "https://github.com/pritamkr1/myclock",
    liveLink: "https://myclock.vercel.app/",
},
{ 
    projectName: "Front-end mentor challenge",
    projectImg: "./images/1.png",
    gitHubLink: "#",
    liveLink: "https://box-github-io.vercel.app/",
},
{ 
    projectName: "Front-end mentor challenge",
    projectImg: "./images/2.png",
    gitHubLink: "#",
    liveLink: "https://social-proof-section-master-github-io.vercel.app/",

},
{ 
    projectName: "Front-end mentor challenge",
    projectImg: "./images/3.png",
    gitHubLink: "#",
    liveLink: "https://social-proof-section-master-github-io.vercel.app/",
    
},
{ 
    projectName: "Front-end mentor challenge",
    projectImg: "./images/4.png",
    gitHubLink: "#",
    liveLink: "https://social-proof-section-master-github-io.vercel.app/",

},
{ 
    projectName: "Front-end mentor challenge",
    projectImg: "./images/5.png",
    gitHubLink: "#",
    liveLink: "https://social-proof-section-master-github-io.vercel.app/",

},
{ 
    projectName: "Front-end mentor challenge",
    projectImg: "./images/6.png",
    gitHubLink: "#",
    liveLink: "https://social-proof-section-master-github-io.vercel.app/",

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
