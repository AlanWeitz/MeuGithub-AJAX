const username = 'AlanWeitz';

async function carregarDadosGithub() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    document.querySelector('.profile-avatar').src = data.avatar_url;
    document.querySelector('.profile-name').textContent = data.name || data.login;
    document.querySelector('.profile-username').textContent = '@' + data.login;
    document.querySelector('.numbers-item:nth-child(1)').innerHTML = `<h4>Repositórios</h4> ${data.public_repos}`;
    document.querySelector('.numbers-item:nth-child(2)').innerHTML = `<h4>Seguidores</h4> ${data.followers}`;
    document.querySelector('.numbers-item:nth-child(3)').innerHTML = `<h4>Seguindo</h4> ${data.following}`;

    const link = document.querySelector('.profile-link');
    link.href = data.html_url;
    link.textContent = 'Ver no Github';

  } catch (error) {
    console.error('Erro ao carregar dados do GitHub:', error);
    alert('Não foi possível carregar os dados do GitHub.');
  }
}

window.addEventListener('DOMContentLoaded', carregarDadosGithub);
