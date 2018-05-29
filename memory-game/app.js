// let count = 0;
// let picture = document.querySelector('.card img')

// picture.onclick = function() {
//     count++;
// }

// const cards = document.getElementsByClassName('card');

// for (const card of cards) {
//     card.addEventListener('click', function() {
//         const img = this.querySelector('.card img');
//         if (img.className === 'hidden' && count<3) {
//             img.className = 'visible'
//         } else {
//             img.className = 'hidden'
//         }
//     })
// }
let count = 0;

const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.addEventListener('click', function() {
        const img = this.querySelector('.card img');
        img.onclick = function() {
            count++;
        }
        if (img.className === 'hidden' && count<3) {
            img.className = 'visible'
        } else {
            img.className = 'hidden'
        }
    })
}
