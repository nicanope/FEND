let count = 0;
const cards = document.getElementsByClassName('card');

// This loop allows you to only flip two cards at a time.

for (const card of cards) {
    card.addEventListener('click', function() {
        const img = this.querySelector('.card img');
        count++;
        if (img.className === 'hidden' && count<3) {
            img.className = 'visible'
        } else {
            img.className = 'hidden'
        }
    })
}
// onclick.setTimeout (
// for (const card of cards) {
//     card.addEventListener('click', function() {
//         const imgs = this.querySelectorAll('.card img');
//         if (count => 3) {
//             count = 0;
//             imgs.className = 'hidden';
//     }
// }, 1)
