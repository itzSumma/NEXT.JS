import BookCard from "@/components/BookCard";

const BookPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 via-white to-emerald-200 py-8">
      <h2 className="text-4xl font-bold text-center m-4 text-emerald-700">The Book Collection</h2>

      <BookCard />
    </div>
  );
};

export default BookPage;