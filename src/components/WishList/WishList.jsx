import PropTypes from "prop-types";

import { IoLocationOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";


const WishList = ({wish_list}) => {

    const { id, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = wish_list;

    return (
        <div className="flex gap-2 items-center my-8 border rounded-xl">

            <div className="px-10 py-10 m-4 w-60 h-60 flex justify-center bg-[#8a8a8a15] rounded-xl">
                <img src={image} alt="" className="w-36" />
            </div>


            <div className="space-y-4 m-4 w-full flex flex-col flex-grow">
                <h1 className="text-2xl font-bold font-playfair">{bookName}</h1>
                <h4 className="text-sm font-semibold">By: {author}</h4>

                <div className="flex items-center gap-4 text-sm">
                    <span className="font-bold">Tag </span>
                    <span className="text-green-500 font-semibold px-4 py-1 rounded-xl bg-[#21ff0418]">#{tags[0]}</span>
                    <span className="text-green-500 font-semibold px-4 py-1 rounded-xl bg-[#21ff0418]">#{tags[1]}</span>
                    <span className="flex items-center gap-2"><IoLocationOutline />Year of Publishing: {yearOfPublishing}</span>
                </div>

                <div className="flex items-center gap-2">
                    <LiaUserFriendsSolid />
                    <span className="mr-4">
                        Publisher: {publisher}
                    </span>
                    <CgNotes />
                    <span>
                        Pages: {totalPages}
                    </span>
                </div>
                <hr />

                <div className="flex items-center gap-8">
                    <p className="text-sky-500 font-semibold px-4 py-1 rounded-xl bg-sky-100">Category: {category}</p>
                    <p className="text-amber-500 font-semibold px-4 py-1 rounded-xl bg-amber-100">Rating: {rating}</p>
                    <Link to={`/book/${id}`}>
                        <span className="text-white font-semibold px-6 py-2 rounded-2xl bg-green-500">
                            View Details
                        </span>
                    </Link>

                </div>

            </div>



        </div>
    );
};

WishList.propTypes = {
    wish_list: PropTypes.object
}

export default WishList;