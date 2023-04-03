const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = 
        `<div class="info">  
            <img src="${user.avatarUrl}" alt="imagem do usuário" />
            <div class="data">
                <h1>${user.name ?? 'Usuário não possui nome cadastrado 😢'}</h1>
                <p>${user.bio ?? 'Usuário não possui bio cadastrada 😢'}</p>
            </div>
            <div class="followers">
                <p><span>Followers:</span> ${user.followers}</p>
                <p><span>Following:</span> ${user.following}</p>
            </div>
        </div>`;
        
        let repositoriesItens = ''
        user.repositories.forEach(element => repositoriesItens += `<li><a href="${element.html_url}" target="_blank">${element.name}</a></li>`);

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>';
    }
}

export { screen }