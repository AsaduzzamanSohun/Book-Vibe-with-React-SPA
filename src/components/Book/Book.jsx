import PropTypes from "prop-types"
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { id, bookName, author, image, rating, category, tags } = book;

    

    return (
        <Link to={`book/${id}`}>
            <div className="card bg-base-100 border m-2">
                <div className="px-10 py-10 m-4 h-72 flex justify-center bg-[#8a8a8a15] rounded-xl">
                    <img src={image} alt="" className="w-36" />
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex gap-5 text-sm text-green-500 font-semibold">
                        <span className="px-4 py-1 rounded-xl bg-[#21ff0418]">{tags[0]}</span>
                        <span className="px-4 py-1 rounded-xl bg-[#21ff0418]">{tags[1]}</span>
                    </div>
                    <h2 className="card-title font-playfair text-2xl font-bold">{bookName}</h2>
                    <p className="font-semibold">By: {author}</p>
                    <hr className="border-dashed border-b" />
                    <div className="flex justify-between items-center font-semibold text-sm">
                        <p>{category}</p>
                        <p className="flex items-center justify-end gap-2">{rating}<span><CiStar className="font-bold text-xl"></CiStar>
                        </span></p>
                    </div>
                </div>
            </div>
        </Link>

    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;