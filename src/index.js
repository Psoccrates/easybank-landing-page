import '/src/styles.css';
import 'font-awesome/css/font-awesome.css';

// Get modal element, open and close modal
const modal = document.getElementById('navModal');
const openModalBtn = document.getElementById('openModalImage');
const closeModalBtn = document.getElementById('closeModalImage');

//Listen for opening, closing, outside clicks
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

//Function to open modal
function openModal() {
    modal.style.display = 'block';
    openModalImage.style.display = 'none';
    closeModalImage.style.display = 'inline-flex';
}

//Function to close modal 
function closeModal() {
    modal.style.display = 'none';
    closeModalImage.style.display = 'none';
    openModalImage.style.display = 'inline-flex';
}

//Function to close modal if outside click
function clickOutside(outsideClicks){
    if(outsideClicks.target === modal){
        closeModal();
    }
}