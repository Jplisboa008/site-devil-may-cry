const menuMobile =
document.querySelector(".menu_mobile");

const nav =
document.querySelector("nav");

if(menuMobile){

    menuMobile.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

const slider =
document.querySelector(".slider");

if(slider){

    let index = 0;

    function trocarBanner(){

        index++;

        if(index > 2){
            index = 0;
        }

        slider.style.transform =
        `translateX(-${index * 100}vw)`;

    }

    setInterval(trocarBanner, 4000);

}

const cards =
document.querySelectorAll(
".character_card, .game_card, .weapon_card, .series_card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("show");

        }

    });

});
