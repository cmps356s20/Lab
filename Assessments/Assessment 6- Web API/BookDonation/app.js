let BooksRepo = require('./repo/BooksRepo')

// BooksRepo.getBooks("Unlocking Android").then(console.log)
// console.log('//////////////////////////')
// BooksRepo.getBooksWIthPageCountMoreThanX(700).then(console.log)
// console.log('//////////////////////////')
// BooksRepo.getAuthorBooks('Robi Sen').then(console.log)
// console.log('//////////////////////////')
BooksRepo.getAuthorBookCount().then(console.log)
// console.log('//////////////////////////')
// BooksRepo.getBooksbyCatagory('Java').then(console.log)

