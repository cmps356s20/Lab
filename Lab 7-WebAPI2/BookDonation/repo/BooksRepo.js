class BooksRepo{
    constructor(){
        this.fse = require("fs-extra")
        this.catalogBookFilename = "../BookDonation/data/catalog.books.json"


    }

    async readFileContent(){
        let data = await this.fse.readFile(this.catalogBookFilename)
        let books = JSON.parse(data)

        return books;
    }

    async getBooks(bookName){
        let books = await this.readFileContent()
        let book = await books.find(b => b.title == bookName)

        if (book!=undefined)
            return book
        else
            return null
    }

    async getBooksWIthPageCountMoreThanX(pageCount){
        let books = await this.readFileContent()
        let filteredBook = await books.filter(b => b.pageCount > pageCount )

        return filteredBook
    }

    async getAuthorBooks(author){
        let books = await this.readFileContent()
        let authorBook = await books.filter(b => b.authors.indexOf(author)>=0)

        return authorBook
    }

    async getAuthorBookCount() {
        let books = await this.readFileContent()
        let authorCount = new Map()
        books.map(b => b.authors.map(author=>{
            if(authorCount.get(author)!=undefined)
                authorCount.set(author,authorCount.get(author)+1)
            else
                authorCount.set(author,1)
        }))

        return authorCount

    }

    async getBooksbyCatagory(category){
        let books = await this.readFileContent()
        let categorisedBooks = await books.filter(b => b.categories.indexOf(category)>=0)
        return categorisedBooks
    }

    async addBook(book){
        let books = await this.readFileContent()
        books.push(book)
        this.saveBooks(books)
    }

    async deleteBook(isbn){
        let books = await this.readFileContent()
        const index = books.findIndex(book=> book.isbn == isbn)
        books.splice(index, 1);
        this.saveBooks(books)
    }

    async updateBook(isbn, book){
        let books = await this.readFileContent()
        const index = books.findIndex(book=> book.isbn == isbn)
        books[index] = {...books[index], ...book};
        this.saveBooks(books)

    }

    async saveBooks(books){
        await this.fse.writeJson(this.catalogBookFilename, books)
    }
}

module.exports = new BooksRepo()

let Book = new BooksRepo();

//
// let obj = {
//     name : "Abdulahi",
//     age : 123,
//     gender : "male"
// }
//
// let update = {
//     name : "Mohamed",
// }
//
// obj = update;
//
// console.log(obj)


