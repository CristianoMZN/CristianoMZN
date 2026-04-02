const usernameInput = document.getElementById('username');
const refreshBtn = document.getElementById('refresh');
const repoListEl = document.getElementById('repo-list');

async function fetchRepos(username){
  repoListEl.innerHTML = 'Carregando...';
  try{
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`);
    if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const repos = await res.json();
    if(!Array.isArray(repos)) throw new Error('Resposta inesperada da API');
    if(repos.length === 0) { repoListEl.innerHTML = '<p>Nenhum repositório público encontrado.</p>'; return }
    repoListEl.innerHTML = repos.map(r => `
      <article class="repo">
        <h2><a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a></h2>
        <p class="desc">${r.description || ''}</p>
        <p class="meta">${r.language || ''} • ⭐ ${r.stargazers_count} • Forks: ${r.forks_count} • Atualizado em ${new Date(r.updated_at).toLocaleDateString()}</p>
      </article>
    `).join('');
  }catch(err){
    repoListEl.innerHTML = `<p>Erro ao carregar repositórios: ${err.message}</p>`;
  }
}

refreshBtn.addEventListener('click', ()=> fetchRepos(usernameInput.value.trim() || 'CristianoMZN'));
document.addEventListener('DOMContentLoaded', ()=> fetchRepos(usernameInput.value.trim() || 'CristianoMZN'));
