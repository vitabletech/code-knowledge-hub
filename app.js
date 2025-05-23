document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container');

  Object.entries(knowledgeData).forEach(([id, html]) => {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <div class="card-text">${html}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
});
