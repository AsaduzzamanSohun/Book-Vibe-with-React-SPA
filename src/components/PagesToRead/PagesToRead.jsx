import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../utils/local-storage";
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid } from 'recharts';
import PropTypes from "prop-types"

const PagesToRead = () => {
    const books = useLoaderData();
    const [readLists, setReadLists] = useState([]);
    const [displayReadLists, setDisplayReadList] = useState([]);

    const data = displayReadLists.map((book) => ({ name: book.bookName, uv: book.totalPages }));

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

    console.log("readList", readLists);

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        const getPath = (x, y, width, height) => (
            `M${x},${y + height}
        C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
        Z`
        );
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666', '#669999', '#99FF99', '#FFFF66', '#CC0099', '#FF6699', '#996699'];

    return (
        <div className="bg-[#13131315] py-24 rounded-2xl">
            <BarChart className="mx-auto" width={1100} height={600} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" shape={<TriangleBar />}>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))
                    }
                </Bar>
            </BarChart>


        </div>
    );
};


PagesToRead.propTypes = {
    fill: PropTypes.any,
    x: PropTypes.object,
    y: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
}

export default PagesToRead;

