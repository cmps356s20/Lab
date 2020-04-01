let BooksRepo = require('./BooksRepo')
let expect = require('chai').expect;

describe("BooksRepo Class Module Test",()=>{
    describe("BooksRepo method tests",()=> {
        it('getBooks("Unlocking Android") to return a book with Unlocking Android Title ', async () => {
            let book = await BooksRepo.getBooks('Unlocking Android')
            expect(book).to.include({title: 'Unlocking Android'})
        });

        it('getBooksWIthPageCountMoreThanX(700) to return 20 books', async () => {
            let books = await BooksRepo.getBooksWIthPageCountMoreThanX(700)
            expect(books).to.have.length(20)
        });

        it('getAuthorBooks(Robi Sen) should return 3 books', async () => {
            let books = await BooksRepo.getAuthorBooks('Robi Sen')
            expect(books).to.have.length(3)
        });

        it('getAuthorsBooksCount() should return 3 books when checking key Robi Sen', async () => {
            let books = new Map()
            books = await BooksRepo.getAuthorBookCount()
            expect(books.get("Robi Sen")).to.equal(3)
        });

        it('getBooksbyCatagory(Java) should return 3 books', async () => {
            books = await BooksRepo.getBooksbyCatagory('Java')
            expect(books).to.have.length(96)
        });



    })

})

