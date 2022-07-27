function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = function() {
        if (this.title = read){
            console.log('read the book')
        }else {
            console.log('not read the book')
        }
    }
}

Book.prototype.info = function() {
    return this.title  + 'by ' + this.author + ', is ' + this.pages  + ' long '
}

let book = new Book ( ' YOU BETTER BE LIGHTING ' , 'ANDREW GIBSON' , 198  );

console.log(Book)
book.info()