const accountRepository = require('../repo/BooksRepo')
class BookService{
    async getBookSummary(req, res){
        try{
            const summary = await accountRepository.getAuthorBookCount();
            res.status(200)
                .json([...summary])

        }catch(e){
            res.status(500)
                .send("Something terrible happened on the server")
        }
    }

    async getBooks(req, res){
        try{
            let books;
            if(req.query.hasOwnProperty("name")){
                books = await accountRepository.getBooks(query);
            }
            else if(req.query.hasOwnProperty("pageCount")) {
                 books = await  accountRepository
                     .getBooksWIthPageCountMoreThanX(req.query.pageCount)
            }else if(req.query.hasOwnProperty("author")) {
                books = await  accountRepository.getAuthorBooks(req.query.author)
            }
            else if(req.query.hasOwnProperty("category")) {
                books = await  accountRepository.getBooksbyCatagory(req.query.category)
            }

            res.status(200).json(books)
        }catch(e){
            res.status(500)
                .send("Something terrible happened on the server")
        }
    }
    async addBook(req, res){
        try{
            const newBook = req.body;
            await  accountRepository.addBook(newBook)
            res.status(201)
                .send("Book Added")

        }catch(e){
            res.status(500)
                .send("Something terrible happened on the server")
        }
    }

    async deleteBook(req, res){
        try{
            const isbn = req.params.isbn;
            await  accountRepository.deleteBook(isbn)
            res.status(200)
                .send("Book Deleted")

        }catch(e){
            res.status(500)
                .send("Something terrible happened on the server")
        }
    }
    async updateBook(req, res){
        try{
            const isbn = req.params.isbn;
            const updatedBook = req.body;

            await  accountRepository.updateBook(isbn, updatedBook)
            res.status(200)
                .send("Book is Updated")

        }catch(e){
            res.status(500)
                .send("Something terrible happened on the server")
        }
    }

}

module.exports = new BookService();