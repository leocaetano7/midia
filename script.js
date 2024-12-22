// Seletor dos botões de navegação e dos itens do carrossel
const buttons = document.querySelectorAll('header nav ul li button');
const items = document.querySelectorAll('.item');

// Adicionando evento de click nos botões
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover a classe 'active' de todos os itens
    items.forEach(item => {
      item.classList.remove('active');
    });

    // Adicionar a classe 'active' ao item correspondente
    const targetId = button.getAttribute('data-target');
    const targetItem = document.getElementById(targetId);
    targetItem.classList.add('active');
  });
});
