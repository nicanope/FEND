let cards = document.getElementsByClassName('card');

for (let card of cards) {
    card.addEventListener('click', function() {
        let img = this.querySelector('.card img');
        if (img.style.visibility === "hidden" || img.style.visibility === "") {
            img.style.visibility = "visible"
        } else {
            img.style.visibility = "hidden"
        }
    })
}

