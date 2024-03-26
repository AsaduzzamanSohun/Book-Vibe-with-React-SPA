import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const bookDetails = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id)
    console.log("Id: ", idInt, "book details", bookDetails);

    const bookDetail = bookDetails.find(bookDetail => idInt === bookDetail.id)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetail;

    return (
        <div className="grid grid-cols-2 gap-10 pt-10">

            <div className="mx-auto w-full h-full px-10 py-10 justify-center bg-[#8a8a8a15] rounded-xl flex items-center">

                {/* <img src={`../../../public/images/book${idInt}.png`} alt="" className=""/> */}

                <div className="m-4">
                    <img className="w-64 h-[400px] m-auto" src={image} alt="" />
                </div>
            </div>


            <div className="space-y-3">
                <h1 className="text-4xl font-bold font-playfair">{bookName}</h1>
                <h4 className="text-xl font-semibold">By: {author}</h4>
                <hr />
                <h4 className="text-lg font-semibold">{category}</h4>
                <hr />
                <p className="text-sm py-2"><span className="font-bold">Review: </span>{review}</p>
                <div className="flex items-center gap-6 text-sm">
                    <span className="font-bold">Tag </span>
                    <span className="text-green-500 font-semibold px-4 py-1 rounded-xl bg-[#21ff0418]">{tags[0]}</span>
                    <span className="text-green-500 font-semibold px-4 py-1 rounded-xl bg-[#21ff0418]">{tags[1]}</span>
                </div>
                <hr />

                <div className="py-2">
                    <table>
                        <tbody>
                            <tr>
                                <td>Number of Pages: </td>
                                <td className="font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td>Publisher: </td>
                                <td className="font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <td>Year of Publishing: </td>
                                <td className="font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td>Rating: </td>
                                <td className="font-semibold">{rating}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className="flex gap-4">
                    <button className="btn border-gray-600 bg-transparent text-gray-600 px-6">Read</button>
                    <button className="btn border-cyan-600 bg-cyan-600 text-white px-6">Wishlist</button>
                </div>

            </div>

        </div>
    );
};

export default BookDetails;