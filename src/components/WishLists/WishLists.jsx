import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishListApplication } from "../../utils/wishlist-storage";
import WishList from "../WishList/WishList";

const WishLists = () => {

    const books = useLoaderData();
    const [wishList, setWishList] = useState([]);
    const [displayWishList, setDisplayWishList] = useState([])

    useEffect(() => {

        const storedBookIds = getWishListApplication();
        if(books.length > 0) {

            const addWishList = [];
            for( const id of storedBookIds){
                const book = books.find(book => book.id === id);

                if(book){
                    addWishList.push(book);
                }
            }

            setWishList(addWishList);
            setDisplayWishList(addWishList);

        }

    } , [books])

    console.log(books);
                                                                                     
    return (
        <div>
            <h1>This is wishlist: {displayWishList.length}</h1>
            {
                console.log(wishList)
            }

            {
                displayWishList.map(wish_list => <WishList
                key={wish_list.id}
                wish_list={wish_list}></WishList>)
            }
        </div>
    );
};

export default WishLists;