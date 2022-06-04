
// Your Code Here
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')// This is the address of a server-side function that are invoking with fetch request using GET method (by dafault)

    let bookLists = await response.json() // parse the response using response.json() and save it to variable

    bookLists.forEach(renderBook) //Once the array of books is retrieved, using .forEach to add cards for each book to the DOM.
}


function renderBook(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    deleteButton.addEventListener('click', () => {
        fetch('http://localhost:3001/removeBook/{bookId}',{
            method: 'DELETE'
        })
    })
    li.append(quantityInput, saveButton)
    li.append(quantityInput, deleteButton)

    root.append(li)
}

main()