async function main() {

    let response = await fetch('http://localhost:3001/listBooks')// This is the address of a server-side function we're invoking with our fetch request and by default fetch sending resquest using GET method

    let books = await response.json()  // use await response.json() parse the response from JSON and save the result to a variable and once parse the response will be an array of book objects
    console.log(books)
    books.forEach(renderBook)// use for adding cards for each book to the DOM
}

function renderBook(book){
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="ui card">
            ${book.imageURL ?`
                <div class="image">
                    <img src="${book.imageURL}" />
                </div>
            `
            :``}
            <div class="content">
                <a class="header">${book.title}</a>
                <div class="meta">
                    <span class="date">Available: ${book.quantity}</span>
                </div>
                <div class="description">
                    ${book.description}
                </div>
            </div>
        </div>
    `
}

main()