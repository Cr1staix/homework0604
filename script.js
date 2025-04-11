const lib = {
    books: [],
    addBook: function (title, author) {
        this.books.push({title, author})
    },

    getBooks: function () {
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`номер ${index+1} ${element.title} , ${element.author} `)

        }
    },

    getInfoByIndex: function (index) {
        if (this.books[index - 1]) {
            console.log(index, this.books[index].title, this.books[index].author);
        } else {
            console.error('Нет книги с таким индексом')
        }
    },

    clearBooks: function () {
        console.log('Текущие книги', this.books);
        this.books = [];
        console.warn('Книги очищены');
        console.log('Текущие книги', this.books);
    },

    addBooks: function (booksArray) {
        for (let i = 0; i < booksArray.length; i++) {
            let book = booksArray[i];
            this.addBook(book.title, book.author);
        }
    },

    getLastAddedBook: function (){
        console.log(this.books[this.books.length - 1]);
    },

    getFirstAddedBook: function (){
        console.log(this.books[0]);
    },

    getUniqueAuthors : function (){
        let uniqueAuthors = [];
        for(let i = 0; i < this.books.length; i++){
            if(!uniqueAuthors.includes(this.books[i].author)){
                uniqueAuthors.push(this.books[i].author)
            }
        }
        console.log(uniqueAuthors);
    },

    getAllBookTitles : function (){
        let bookTitles = [];
        for (let i = 0; i < this.books.length; i++){
            bookTitles.push(this.books[i].title)
        }
        console.log(bookTitles);
    },

    getAuthorBookCount : function (author){
        let count = 0;
        for (let i = 0; i < this.books.length; i++){
            if(this.books[i].author == author){
                count++;
            }
        }
        console.log(author, count);
    }

}

lib.addBook('The Great Gatsby', "Scott F.");
lib.addBook('1984', "G. Orwell");
lib.getBooks();
lib.getInfoByIndex(1);
lib.getInfoByIndex(3);
lib.clearBooks();
lib.addBooks([
    { title: 'Три товарища', author: 'Ремарк' },
    { title: '1984', author: 'Оруэлл' },
    { title: 'Мастер и Маргарита', author: 'Булгаков' },
    { title: 'Евгений Онегин', author: 'Пушкин' },
    { title: 'Капитанская дочка', author: 'Пушкин' }
]);

lib.getLastAddedBook();
lib.getFirstAddedBook();
lib.getUniqueAuthors();
lib.getAllBookTitles();
lib.getAuthorBookCount('Пушкин')


// 1. Добавить самостоятельно два метода - вывести информацию о книге по индексу
// 2. Метод: Очистить массив книг
// 3. Метод: Добавить новый метод для добавления сразу нескольких книг - используя метод addBook
// 4. Метод: Получить последнюю подавленную книгу
// 5. Метод: Получить первую добавленную книгу
// 6. Метод получить уникальный список авторов книг
// 7. Метод получить все названия книг
// 8. Добавить метод для получения количества книг определенного автора.