let cards = document.getElementsByClassName('card');

for (let card of cards) {
    card.addEventListener('click', function() {
        let img = this.querySelector('.card img');
        if (img.className === "hidden") {
            img.className = "visible"
        } else {
            img.className = "hidden"
        }
    })
}