const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalWatch = document.getElementById('modal-watch');

function openModal(title, image, description) {
  modalTitle.textContent = title;
  modalImage.src = image;
  modalDescription.textContent = description;
  modalWatch.href = 'assistir.html'; // Altere para o link do player real
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}