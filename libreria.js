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

getBooks()