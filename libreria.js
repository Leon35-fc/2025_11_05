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
        <div class="card-body">
            <h5 class="card-title">TITOLO</h5>
            <p class="card-text">${libro.title}
            ${libro.price}£</p>
            <button href="#" class="btn btn-primary" onclick="deleteBook(event)">Scarta</button>
        </div>
        </div>
    `
    console.log(libro.price)
    card.classList.add('col')
    document.querySelector('div.row').appendChild(card)
    
    document.querySelector('button').addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
    })
})
})
.catch((err) => {console.log('Errore nella request', err)})
}
const deleteBook = function(e){
    e.target.parentElement.parentElement.parentElement.remove()
}

getBooks()

