const apiURL = "https://striveschool-api.herokuapp.com/books"

const getBooks = function () {
  fetch(apiURL)
.then((res) => {
    console.log('RESPONSE', res)
    return res.json()
})
.then((data) => {console.log(data)

    //creo la card
    data.forEach((libro) => {
    const card = document.createElement('div')
    card.innerHTML = `
        <div class="card h-100">
        <img src="${libro.img}" class="card-img-top" alt="book">
        <div class="card-body m-0">
            <h5 class="card-title">${libro.title}</h5>
            <p class="card-text">${libro.price}£</p>
            <div class="hstack gap-2">
            <button type="button" class="btn btn-primary" onclick="deleteBook(event)">Scarta</button>
            <button type="button" class="btn btn-primary" onclick="addToCart(event)">Compa ora</button>
            </div>
            </div>
        </div>
        </div>
    `
    console.log(libro.price)
    card.classList.add('col')
    document.querySelector('div.row').appendChild(card)
    })
})
.catch((err) => {console.log('Errore nella request', err)})
}

const deleteBook = function(e){
    e.target.closest('div.col').remove()
}

const addToCart = function(e){
    const cartItem = document.createElement('li')
    const titoloLibro = e.target.closest('.card-body').innerText
    const copertinaLibro = e.target.closest('.card').children[0].currentSrc
    const dettagli = titoloLibro.split('\n')
    console.log(titoloLibro)
    console.log(dettagli)
    console.log(copertinaLibro)    

    cartItem.innerHTML = `
        <a class="dropdown-item hstack" href="#">
        <img src="${copertinaLibro}" class="card-img-top" alt="book">
        <p>${dettagli[0]}</p>
        <button id="acquista" class="btn fs-6 bg-transparent ms-auto me-1">
            <i class="bi bi-trash-fill"></i>
        </button>
        </a>
    `
}

getBooks()