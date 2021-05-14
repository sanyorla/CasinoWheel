let spinCount = 2;
window.addEventListener('DOMContentLoaded', () => {
    let spinTrigger = document.querySelector('.wheel__button'),
        spinWheel = document.querySelector('.wheel__inside'),
        tries = document.querySelector('.content__text__tries span'),
        modal = document.querySelector('.modal'),
        spinTriggerSecond = document.querySelector('#modal__button'),
        prize = document.querySelector('.modal__content__prize'),
        modalTries = document.querySelector('.modal__content__tries'),
        modalClose = document.querySelector('.modal__content__close');
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    function openModal() {
        if (spinCount === 2) {
            spinCount--;
        } else if (spinCount === 1) {
            prize.innerHTML = "500$ + 20 FS";
            modalTries.innerHTML = "Регистрируйся и забирай призы";
            spinTriggerSecond.innerHTML = "забрать призы";
            spinCount--;
        }
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        tries.innerHTML = spinCount;
    }
    spinTrigger.addEventListener('click', (e) => {
        if (spinCount === 2) {
            spinWheel.classList.add('spin');
            setTimeout(openModal, 3100);
        } else if (spinCount === 1) {            
            e.preventDefault();
            modal.classList.remove('show');
            spinWheel.classList.remove('spin');
            spinWheel.classList.add('spin__second');
            spinTriggerSecond.removeAttribute('id');
            tries.innerHTML = spinCount;
            setTimeout(openModal, 3100);
            modalClose.style.display = "none";
        }
    });
    spinTriggerSecond.addEventListener('click', (e) => {
        if (spinCount === 1) {
            e.preventDefault();
            modal.classList.remove('show');
            spinWheel.classList.remove('spin');
            spinWheel.classList.add('spin__second');
            spinTriggerSecond.removeAttribute('id');
            tries.innerHTML = spinCount;
            modalClose.style.display = "none";
            setTimeout(openModal, 3100);
        }
    });
});