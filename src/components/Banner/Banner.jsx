import { Link } from 'react-router-dom';
import cover_img from '../../assets/book_cover.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:px-28 py-8 lg:py-20 bg-[#13131315] m-4 gap-10 font-bold rounded-xl'>

            <div className='space-y-10'>

                <h1 className='text-xl lg:text-[52px] lg:leading-normal text-center lg:text-start font-playfair'>Books to freshen up <br /> your bookshelf</h1>
                <Link to="/listed-books" className="btn bg-[#23BE0A] text-white text-lg px-6">
                    <a>View The List</a>
                </Link>

            </div>
            <div>

                <img src={cover_img} alt="" />

            </div>

        </div>
    );
};

export default Banner;