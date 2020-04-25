document.addEventListener("DOMContentLoaded", async () => {
    // await handleLoadListValues();
    try {
        const books = await getBooks('/api/books');
        handleLoadBookCards(books)
    } catch (e) {
        console.log(e)
    }
    // await loadPage("book-editor.html")
});

async function loadPage(pageName) {
    const page = await fetch(pageName);
    document.querySelector("#main-content").innerHTML = await page.text();
}

async function getBooks(url) {
    try {
        const data = await fetch(url);
        return await data.json()
    } catch (e) {
        console.log(e);
    }
}

//This function will populate data list values depending on the users selection
async function handleLoadListValues(filter) {
    let innerHTMLContent = '';
    const books = await getBooks('/api/books');
    const searchBox = document.querySelector("#search-box");
    searchBox.value = '';
    const dataList = document.querySelector("datalist#list");

    searchBox.type = list;

    switch (filter) {
        case 'name':
            searchBox.placeholder = 'Enter Book Title/Name'
            innerHTMLContent = books.map(book => `<option value="${book.title}">`).join(' ')
            break;
        case 'category':
            searchBox.placeholder = 'Enter Book Category'
            //Some books have the same name but different format like "Java" and "java"
            const catagories = books
                .map(book => book.categories).flat(Infinity)
                .map(category => category.toLowerCase());
            const uniqueCategories = Array.from(new Set(catagories));
            innerHTMLContent = uniqueCategories.map(category => `<option value="${category}">`).join('');
            break;
        case 'author':
            searchBox.placeholder = 'Enter Author Name'
            //Some books have the same name but different format like "Java" and "java"
            const authors = books
                .map(book => book.authors).flat(Infinity)
                .map(author => author.toLowerCase());

            const uniqueAuthors = Array.from(new Set(authors));
            innerHTMLContent = uniqueAuthors.map(author => `<option value="${author}">`).join('');
            break;
        case 'isbn':
            searchBox.placeholder = 'Enter Book ISPN'
            innerHTMLContent = books.map(book => `<option value="${book.isbn}">`).join('');
            break;
        case 'pageCount':
            innerHTMLContent = ''
            searchBox.placeholder = 'Enter Min Page Number'
            searchBox.type = "number";
            break;
        default:
            innerHTMLContent = books.map(book => `<option value="ISBN: ${book.isbn} - Title: ${book.title}">`).join(' ')

    }
    dataList.innerHTML = innerHTMLContent;
}

//this is used for querying the book by author, page count etc..
async function handleBookSearch(event) {
    try {
        event.preventDefault();
        const form = event.target.form;
        const query = form2Object(form);

        if (!query.search) return;
        const url =
            `/api/books?${query.search}=${query.searchValue}`;

        const books = await getBooks(url);
        handleLoadBookCards(books)


    } catch (e) {
        console.log(e);
    }
}

//utility function to change a form into JavaScript object
function form2Object(form) {
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData)
        data[key] = value;

    return data;

}

//if it is the index page it loads the normal card
//if it is the details then it loads the details page
function handleLoadBookCards(books) {
    document.querySelector("#book-cards").innerHTML = Array.isArray(books) ?
        books.map(book => book2HTMLCard(book)).join('') :
        bookToHTMLDetailedCard(books);
}

//deletes a book
async function handleDeleteBook(isbn) {
    try {
        await fetch(
            `/api/books/${isbn}`
            , {method: 'DELETE'});
        document.querySelector(
            `#card-${isbn}`
        ).remove();
    } catch (e) {
        console.log(e);
    }
}

//for adding and updating book
async function handleSubmitBook(event) {
    const form = event.target.form;
    if (!form.checkValidity()) return;

    event.preventDefault();
    const book = form2Object(form);

    book.authors = book.authors.split(';');
    book.categories = book.categories.split(';');
    console.log(book.authors)

    console.log(book.isbn)
    //check weather it is ADD or Update
    let method, url;
    if (document.querySelector("#page-title").innerText == "Edit Book") {
        url = `/api/books/${book.isbn}`;
        method = 'PUT'
    } else {
        url = `/api/books`;
        method = 'POST'
    }

    await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    location.reload();

}

//loads the update book page
async function handleUpdateBook(isbn) {
    console.log(isbn);
    try {

        const url = `/api/books?isbn=${isbn}`;
        const book = await getBooks(url);

        if (book.publishedDate.hasOwnProperty("$date"))
            book.publishedDate = book.publishedDate["$date"].split('T')[0];

        await loadPage('book-editor.html');

        document.querySelector("#page-title").innerText = "Edit Book";
        document.querySelector("#title").value = book.title;
        document.querySelector("#pageCount").value = book.pageCount;
        document.querySelector("#isbn").value = book.isbn;
        document.querySelector("#publishedDate").value = book.publishedDate;
        document.querySelector("#status").value = book.status;
        document.querySelector("#thumbnailUrl").value = book.thumbnailUrl;
        document.querySelector("#shortDescription").value = book.shortDescription;
        document.querySelector("#longDescription").value = book.longDescription;
        document.querySelector("#authors").value = Array.isArray(book.authors) ? book.authors.join(' ; ') : book.authors;
        document.querySelector("#categories").value = Array.isArray(book.categories) ? book.categories.join(' ; ') : book.categories;


    } catch (e) {
        console.log(e);
    }
}

//loads the details page
async function handleShowBookDetails(isbn) {
    try {
        const url = `/api/books?isbn=${isbn}`;
        const book = await getBooks(url);
        handleLoadBookCards(book)
    } catch (e) {
        console.log(e);
    }
}

//loads the summary
async function handleLoadBookSummary() {
    try {
        const url = `/api/books/summary`
        const data = await fetch(url)

        let summary = await data.json();

        const keysSorted = Object.keys(summary)
            .sort((a, b) => summary[b] - summary[a])
        let innerHTMLRows = '';

        for (let authorName of keysSorted)
            innerHTMLRows +=
                `<tr>
                    <td>${authorName}</td>
                    <td>${summary[authorName]}</td>
                </tr>`;
        await loadPage('books-summary.html')
        document.querySelector("table").innerHTML += innerHTMLRows;
    } catch (e) {
        console.log(e);
    }
}

//shows a the card for the index page
function book2HTMLCard(book) {

    return ` 
         <li class="cards__item" id="card-${book.isbn}">
            <div class="card">
                <img class="card__image" src="${book.thumbnailUrl}" alt="">
                <div class="card__content">
                    <div id="book-title" class="card__title">${book.title}</div>
                    <p id="book-desc" class="card__text">${book.shortDescription ? book.shortDescription.trim() : 'Not Available'}</p>
                    <div class="btn--options">
                        <button class="btn btn--details" onclick="handleShowBookDetails('${book.isbn}')">Details</button>
                        <button class="btn btn--update" onclick="handleUpdateBook('${book.isbn}')">Update</button>
                        <button class="btn btn--delete" onclick="handleDeleteBook('${book.isbn}')">Delete</button>    
                    </div>
                </div>
            </div>
        </li>
        `
}

//shows more detailed card
function bookToHTMLDetailedCard(book) {
    const altImage = 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal6.jpg',
        altDescription = 'Learn all about this Book By visiting our store';
    if (book.publishedDate.hasOwnProperty("$date"))
        book.publishedDate = book.publishedDate["$date"].split('T')[0];
    return `
        <div class="show" align="ceter">
            <img src='${book.thumbnailUrl !== undefined ? book.thumbnailUrl : altImage}' width="300" height="300">
            <p class="item-content"><strong>- Title:</strong> ${book.title}</p>
            <p class="item-content"><strong>- ISBN:</strong> ${book.isbn}</p>
            <p class="item-content"><strong>- Published Date:</strong> ${book.publishedDate}</p>
            <p class="item-content"><strong>- Categories:</strong> ${book.categories.join(', ')}</p>
            <p class="item-content"><strong>- Authored By:</strong> ${book.authors.join(', ')}</p>
            <p class="item-content"><strong>- Page Count: </strong>${book.pageCount}</p>
            <p class="item-content"><strong>- Status: </strong>${book.status !== undefined ? book.status : "NOT AVAILABLE"}</p>
            <p class="item-content"><strong>- Short Description: </strong>${book.shortDescription !== undefined ? book.shortDescription : altDescription}</p>
            <p class="item-content"><strong>- Long Description: </strong>${book.longDescription !== undefined ? book.longDescription : altDescription}</p>
            <div class="item-operations">
                <a href="#"><button class="update-book"  onclick="handleUpdateBook('${book.isbn}')">Update Book</button></a>
                <a href="#"><button class="delete-book" onclick="handleDeleteBook('${book.isbn}')">Delete Book</button></a>
            </div>
        </div>
    `
}

