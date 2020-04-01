const accountRepository = require('./repo/BooksRepo')
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
}

module.exports = new BookService();