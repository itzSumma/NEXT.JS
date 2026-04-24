import { Button, Card } from "@heroui/react";

const BookCard = () => {
  const books = [
    {
      bookId: 1,
      bookName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
      rating: 4.5,
      category: "Classic",
      totalPages: 192
    },
    {
      bookId: 2,
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
      rating: 4.8,
      category: "Fiction",
      totalPages: 281
    },
    {
      bookId: 3,
      bookName: "1984",
      author: "George Orwell",
      image: "https://i.ibb.co.com/MprDyVt/51-BIA4rrae-L-AC-UF1000-1000-QL80.jpg",
      rating: 4.6,
      category: "Fiction",
      totalPages: 328
    },
    {
      bookId: 4,
      bookName: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
      rating: 4.3,
      category: "Fiction",
      totalPages: 224
    },
    {
      bookId: 5,
      bookName: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg",
      rating: 4.7,
      category: "Classic",
      totalPages: 279
    },
    {
      bookId: 6,
      bookName: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg",
      rating: 4.9,
      category: "Fantasy",
      totalPages: 310
    },
    {
      bookId: 7,
      bookName: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      image: "https://i.ibb.co.com/989qMRW/42844155.jpg",
      rating: 4.8,
      category: "Fantasy",
      totalPages: 309
    },
    {
      bookId: 8,
      bookName: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://i.ibb.co.com/zS9jsdK/18144590.jpg",
      rating: 4.6,
      category: "Fiction",
      totalPages: 177
    },
    {
      bookId: 9,
      bookName: "The Girl on the Train",
      author: "Paula Hawkins",
      image: "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
      rating: 4.2,
      category: "Mystery",
      totalPages: 316
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {books.map((book) => (
          <Card
            key={book.bookId}
            className="w-full max-w-sm h-[420px] bg-white
              hover:bg-gradient-to-br hover:from-emerald-200 hover:via-teal-50 hover:to-green-100
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(13,151,105,0.2)]
              border border-gray-200 hover:border-emerald-300"
          >

            {/* IMAGE SMALL HEIGHT */}
            <div className="w-full h-[180px] overflow-hidden rounded-t-xl">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-2 p-3">

              <Card.Header className="p-0">
                <Card.Title className="text-base font-bold">
                  {book.bookName}
                </Card.Title>

                <Card.Description className="text-sm text-gray-500">
                  {book.author}
                </Card.Description>
              </Card.Header>

              <div className="text-sm">
                <p><span className="font-semibold">Category:</span> {book.category}</p>
                <p>Pages: {book.totalPages}</p>
                <p>⭐ <span className="font-semibold">{book.rating}</span></p>
              </div>

              <Button
                size="sm"
                className="bg-emerald-800 text-white hover:bg-emerald-900"
              >
                Details
              </Button>

            </div>

          </Card>
        ))}

      </div>

    </div>
  );
};

export default BookCard;