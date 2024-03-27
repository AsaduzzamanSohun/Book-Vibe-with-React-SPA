import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../utils/local-storage";
import ReadList from "../ReadList/ReadList";

const ReadLists = () => {

    const books = useLoaderData();
    const [readLists, setReadLists] = useState([]);
    const [displayReadLists, setDisplayReadList] = useState([]);

    // console.log(books);
    // console.log(readLists);

    // const book = books.map(book => console.log(book));
    // console.log(book);

    const handleBookFiler = filter => {

        const storedBookIds = getStoredBookApplication();
        for (const id of storedBookIds) {
            if (filter === 'all') {
                // setDisplayReadList(readLists)
                console.log("readlist: ", readLists);
            }
            else if (filter === 'pages') {
                const pages = books.filter(book => book.totalPages && book.id === id)
                console.log("pages: ", pages);
                // setDisplayReadList(pages)
            }
            else if (filter === 'published-year') {
                const year = books.filter(book => book.yearOfPublishing && book.id === id);
                console.log("year: ", year);
                // setDisplayReadList(year)
            }
        }





    }


    useEffect(() => {

        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {

            const addReadList = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);

                if (book) {
                    addReadList.push(book)
                }
            }

            setReadLists(addReadList)
            setDisplayReadList(addReadList);

        }

    }, [books])


    return (
        <div>

            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleBookFiler('all')}><a>Rating</a></li>
                    <li onClick={() => handleBookFiler('pages')}><a>Number of pages</a></li>
                    <li onClick={() => handleBookFiler('published-year')}><a>Publisher year</a></li>
                </ul>
            </details>

            <h1>This is read list: {displayReadLists.length}</h1>

            {
                console.log("display: ", displayReadLists)
            }



            {
                displayReadLists.map(read_list => <ReadList
                    key={read_list.id}
                    read_list={read_list}></ReadList>)
            }




        </div>
    );
};

export default ReadLists;