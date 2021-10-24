//function ShowMeSomething (){} //aqui abrimos uma função, que tem alguma ação a ser feita posteriormente. Tem que conter (){} nessa ordem.//

const LinksSocialMedia = {
  github: 'JottaFreitas',
  linkedin: 'in/josué-silva-7315bb121/',
  instagram: '_jota_freitas_'
  //ao definir uma var dentro de um objeto, não se usa = mas sim : //
}

function changeSocialMediaLinks() {
  //document.getElementById('username')
  //userName.textContent = 'Olívio' //document=buscar no DOM, getElement=pegar um elemento ById=pegar pelo ID ('nome do id')//
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

//aqui chamamos a função a ser executada.//
