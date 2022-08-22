interface Book {
    title: string
    isRead: boolean
}

const books: Array<Book> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  
  const present = (title: string, match: string) => title.toLowerCase() == match.toLowerCase();
  const isBookRead = (books: Array<Book>, title: string) => books.some(book => present(book.title, title) && book.isRead);
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false