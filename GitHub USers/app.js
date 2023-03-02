



const loadGithubUser = () => {
    fetch('https://api.github.com/users?per_page=10')
        .then(res => res.json())
        .then(data => dislayUsers(data))
}


const dislayUsers = (data) => {
    const parent = document.getElementById('user-container');
    console.log(data);
    data.forEach(user => {
        fetch(user.followers_url)
            .then(res => res.json())
            .then(data => {
                const div = document.createElement('div');
                div.innerHTML = `
                        <img src="${user.avatar_url}" alt="">
                        <h4>${user.login}</h4>
                        <div>
                            <img src="${data[0].avatar_url}" alt="">
                            <img src="${data[1].avatar_url}" alt="">
                        
                        </div>
                `;
                parent.appendChild(div);
            })
    });





}