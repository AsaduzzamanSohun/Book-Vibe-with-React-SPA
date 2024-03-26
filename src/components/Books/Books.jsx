import { useLoaderData, useParams } from "react-router-dom";
import Book from "../Book/Book";
import { useState } from "react";


const Books = () => {

    const books = useLoaderData();
    const [dataLength, setDataLength] = useState(6)
    const { id } = useParams();


    const handelShowAll = () => {

        setDataLength(books.length)

    }




    console.log(id, books);

    return (
        <div className="my-36">

            <h3 className="text-center text-3xl font-bold font-playfair my-6">Books</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.slice(0, dataLength).map(book => <Book
                        key={book.id}
                        book={book}></Book>)
                }

            </div>

            <div className={dataLength === books.length ? "hidden" : "text-center"}>
                <button onClick={handelShowAll} className="btn bg-[#23BE0A] text-white text-lg px-6">Show All</button>
            </div>


        </div>
    );
};

export default Books;