import { useLoaderData, useParams } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {

    const books = useLoaderData();
    const { id } = useParams()
    console.log(id, books);

    return (
        <div>

            <h3>Books: {books.length}</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}></Book>)
                }

            </div>


        </div>
    );
};

export default Books;