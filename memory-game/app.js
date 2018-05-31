let count = 0;
const cards = document.getElementsByClassName('card');


for (const card of cards) {
    card.addEventListener('click', function(e) {
        const img = this.querySelector('.card img');
        count++;
        if (img.className === 'hidden' && count<3) {
            img.className = 'visible'
        } else {
            img.className = 'hidden'
        }



        setTimeout(function () {
            if (count => 3 && notMatched) {
                count = 0;
                imgs.className = 'hidden';
            }
        }, 1000)
    })
}

// function to shuffle cards

function shuffleCards(grid, table) {
	table.innerHTML = '';
	for(let i=0; i < grid.length; i++) {
		let tr = document.createElement('tr');
		for (let f=0; f<grid[i].length; f++) {
			let td = document.createElement('td');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}


let img = document.createElement('img')
img.src = "some-url.com"
td.appendChild(img)

// function to check is cards match

function checkMatch () {
    
}