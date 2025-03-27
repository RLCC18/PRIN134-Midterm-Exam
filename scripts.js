document.addEventListener('DOMContentLoaded', function() {
    const petButtons = document.querySelectorAll('.btn-full');
    const petAllBtn = document.querySelector('#btn-select-all');
    const unpetAllBtn = document.querySelector('#btn-unselect-all');
    const lstBtn = document.querySelector('#btn-select-last');
    const frstBtn = document.querySelector('#btn-select-first');
    const nxtBtn = document.querySelector('#btn-select-next');
    const prvBtn = document.querySelector('#btn-select-previous');
    const cards = document.querySelectorAll('.card');
    
    let currentHighlightedIndex = 0;
    
    highlightCard(currentHighlightedIndex);
    
   
    petButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });
    });
    
  
    petAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        });
    });
    
 
    unpetAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });
    });
    
   
    lstBtn.addEventListener('click', function() {
        currentHighlightedIndex = cards.length - 1;
        highlightCard(currentHighlightedIndex);
    });
    

   
    frstBtn.addEventListener('click', function() {
        currentHighlightedIndex = 0;
        highlightCard(currentHighlightedIndex);
    });
    
    
    nxtBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex + 1) % cards.length;
        highlightCard(currentHighlightedIndex);
    });
    

    prvBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex - 1 + cards.length) % cards.length;
        highlightCard(currentHighlightedIndex);
    });
    

    document.querySelector(".banner-content").addEventListener("click", function() {
        this.classList.add("animate__animated", "animate__zoomInDown");
        setTimeout(() => {
          this.classList.remove("animate__animated", "animate__zoomInDown");
        }, 1000);
    });
    
    function highlightCard(index) {
        cards.forEach(card => {
            card.classList.remove('card-selected', 'active');
        });
        cards[index].classList.add('card-selected', 'active');
        currentHighlightedIndex = index;
    }
});