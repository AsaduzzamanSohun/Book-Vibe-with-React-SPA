import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../utils/local-storage";
import ReadList from "../ReadList/ReadList";

const ReadLists = () => {

    const books = useLoaderData();
    const [readLists, setReadLists] = useState([]);
    const [displayReadLists, setDisplayReadList] = useState([]);

    console.log(books);
    console.log(readLists);

    // const book = books.map(book => console.log(book));
    // console.log(book);


    useEffect(() => {

        const storedBookIds = getStoredBookApplication();
        if(books.length > 0){

            const addReadList = [];

            for(const id of storedBookIds) {
                const book = books.find(book => book.id === id);

                if(book){
                    addReadList.push(book)
                }
            }

            setReadLists(addReadList)
            setDisplayReadList(addReadList);

        }

    } , [books])


    return (
        <div>
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