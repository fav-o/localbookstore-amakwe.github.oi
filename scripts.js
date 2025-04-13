// Array of book objects
const books = [
    { title: "1984", author: "George Orwell", genre: "Fiction", image: "1.jpg", price: 14 },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Non-Fiction", image: "9.jpg", price: 20 },
    { title: "Becoming", author: "Michelle Obama", genre: "Non-Fiction", image: "a.jpg", price: 20 },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery", image: "k.jpg", price: 13 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", image: "p.jpg", price: 10 },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", image: "s.jpg", price: 10 },
    { title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Biography", image: "0.jpg", price: 11 },
    { title: "Atomic Habits", author: "James Clear", genre: "Self-Help", image: "u.jpg", price: 12 },
    { title: "Guns, Germs, and Steel", author: "Jared Diamond", genre: "History", image: "w.jpg", price: 19 },
];

// Function to display books based on the provided array
function displayBooks(bookArray) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = ''; // Clear existing books

    // Create book elements and append to the grid
    bookArray.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Price: $${book.price}</p>
        `;
        bookGrid.appendChild(bookDiv);
    });
}

// Event listeners for genre filter
document.querySelectorAll('.genre').forEach(item => {
    item.addEventListener('click', event => {
        const selectedGenre = event.target.getAttribute('data-genre');
        const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;
        displayBooks(filteredBooks);
    });
});

// Search functionality
document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
});

// Initial display of all books
displayBooks(books);