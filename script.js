document.addEventListener('DOMContentLoaded', function() {
    // Abrir modal ao clicar em um card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.id);
        });
    });

    // Fechar modal
    const closeModalBtn = document.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', closeModal);

    // Função para abrir modal
    function openModal(id) {
        const modal = document.getElementById('modal-' + id);
        modal.style.display = 'block';
    }

    // Função para fechar modal
    function closeModal() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});