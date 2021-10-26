const linksSocialMedia = {
  github: 'rafamenegheti',
  instagram: 'fael_carvalho7',
  twitter: 'RafaelMenegheti'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userImg.src = data.avatar_url
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userTitle.textContent = `${data.name} - DoWhile 2021`
    })
}

getGitHubProfileInfos()
