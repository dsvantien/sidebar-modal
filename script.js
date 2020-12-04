const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

//jqurey
$(document).ready(function(){
    const toggle = $('#toggle');
    const open =$('open');
    const close = $('close');
    const modal -$('modal');
toggle.click(function(){
    $('body').toggleClass('show-nav');
});

open.click(function(){
    modal.addClass('show-modal');
})
close.click(function(){
    close.removeClass('show-modal');
})
                  
});
