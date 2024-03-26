
const Book = ({ book }) => {

    const { bookName, author, image } = book;

    return (
        <div className="card bg-base-100 border">
            <div className="px-10 py-10 m-4 h-72 flex justify-center bg-[#13131315] rounded-xl">
                <img src={image} alt="Shoes" className="w-36" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{bookName}</h2>
                <p>{author}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;