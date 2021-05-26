const reppositoryUrl = 'https://api.github.com/users/pritamkr1/repos?page=1';

window.addEventListener('load', (el) => {
    fetch(reppositoryUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data[0].name)
        var eachReppo = '';
        data.forEach((el) => {
            console.log(el)
            if(el.description == null){
                el.description = "empty"
            }
            eachReppo += `
            
            <a href="${el.html_url}" target="_blank" id="github-link">
            <div class="reppo-card">
                    <h4 class="reppo-name">${el.name}</h4>
                
                    <p class="reppo-des">${el.description}</p>
                    <ul>
                        <li class="reppo-star"><i class="fas fa-star"></i> ${el.stargazers_count}</li>
                        <li class="reppo-fork"><i class="fas fa-code-branch"></i> ${el.forks_count}</li>
                        <li class="reppo-view"><i class="fas fa-eye"></i> ${el.watchers_count}</li>
                        <li class="reppo-size">${el.size}kb</li>
                    </ul>
            </div>
        </a>

            `
            document.querySelector('.reppo-row').innerHTML = eachReppo;
        })
    })
})