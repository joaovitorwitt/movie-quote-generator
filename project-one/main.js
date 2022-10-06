let button = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// GET JSON FILE

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);

        button.addEventListener('click', () => {

            let index = response[Math.ceil(Math.random() * response.length)];

            quote.textContent = `"${index.Quote}"`
            person.textContent = index.Movie
        })
    }
}

xhttp.open("GET", 'packet.json', true);
xhttp.send();