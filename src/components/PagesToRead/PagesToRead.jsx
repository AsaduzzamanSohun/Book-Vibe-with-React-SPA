// import { useLoaderData } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis } from 'recharts';

// const PagesToRead = () => {
//     // Fetch data using useLoaderData (assuming it returns an array of books)
//     const books = useLoaderData();

//     // Assuming books is an array of objects representing books
//     const data = books.map(book => ({ name: book.author, uv: book.totalPages }));

//     // Custom shape for the bar
//     const TriangleBar = (props) => {
//         const { fill, x, y, width, height } = props;
//         const getPath = (x, y, width, height) => (
//             `M${x},${y + height}
//             C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
//             C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
//             Z`
//         );
//         return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//     };

//     return (
//         <div>
//             <h1>Pages To Read</h1>
//             <BarChart width={600} height={300} data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
//             </BarChart>
//         </div>
//     );
// };

// export default PagesToRead;



// import { useLoaderData } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, Cell } from 'recharts';

// const PagesToRead = () => {
//     // Fetch data using useLoaderData (assuming it returns an array of books)
//     const books = useLoaderData();

//     // Assuming books is an array of objects representing books
//     const data = books.map((book, index) => ({ name: book.author, uv: book.totalPages }));

//     // Define an array of colors to use for bars
//     const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00bcd4', '#673ab7', '#e91e63', '#9c27b0', '#4caf50', '#ff9800'];

//     return (
//         <div>
//             <h1>Pages To Read</h1>
//             <BarChart width={600} height={300} data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Bar dataKey="uv" >
//                     {
//                         data.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//                         ))
//                     }
//                 </Bar>
//             </BarChart>
//         </div>
//     );
// };

// export default PagesToRead;



import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Cell } from 'recharts';

const PagesToRead = () => {
    // Fetch data using useLoaderData (assuming it returns an array of books)
    const books = useLoaderData();

    // Assuming books is an array of objects representing books
    const data = books.map((book, index) => ({ name: book.author, uv: book.totalPages }));

    //     // Custom shape for the bar
    //     const TriangleBar = (props) => {
    //         const { fill, x, y, width, height } = props;
    //         const getPath = (x, y, width, height) => (
    //             `M${x},${y + height}
    //             L${x + width / 2},${y}
    //             L${x + width},${y + height}
    //             Z`
    //         );
    //         return <path d={getPath(x, y, width, height)} fill={fill} />;
    //     };

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
        <div>
            <h1>Pages To Read</h1>
            <BarChart width={100} height={600} data={data}>
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

export default PagesToRead;

