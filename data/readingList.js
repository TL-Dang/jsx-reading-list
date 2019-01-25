selectBook () {
    return selectedBook
},

addBook (book) {
    books.push(book)
},

updateBook (id, book) {
    const index = books.findIndex(bookItem =>
        bookItem.id === id)
        books[index] = book
},

deleteBook (id) {
    const index = books.findIndex(bookItem =>
        bookItem.id === id)
        books.splice(index, 1)
}


