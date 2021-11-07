const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/*-----future-----*/

const future_singles = $$('.future-single');
future_singles.forEach((item, index) => {

    switch (index) {
        case 0:
            item.style.animation = "FadeToRight 2s";
            break;

        case 1:
            item.style.animation = "FadeToTop 2s";
            break;
        case 2:

            item.style.animation = "FadeToLeft 2s";
            break;
        default:
            break;
    }

});

/*--------toggle btn---------*/

const toggle_btn = $('.toggle-btn a');
const round = $('.round');


toggle_btn.onclick = function() {
    PriceTrigger();
}

function PriceTrigger() {
    if (round.offsetLeft === 5) {
        round.style.left = "27px";
    } else {
        round.style.left = "5px";
    }
}