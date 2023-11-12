import Book from './Book'

function Books() {
    // Dummy data
    const books = [
        {
        id: 1,
        title: 'Book Title 1',
        author: 'Author 1',
        description: 'Description of Book 1...',
        },
        {
        id: 2,
        title: 'Book Title 2',
        author: 'Author 2',
        description: 'Description of Book 2...',
        },
    ];

    return (
        <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Lista knjiga</h1>

        {books.map((book) => (
            <Book key={book.id} {...book} />
        ))}
        </div>
    );
}
  
export default Books 