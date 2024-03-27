import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Books from './components/Books/Books.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ReadLists from './components/ReadLists/ReadLists.jsx';
import WishLists from './components/WishLists/WishLists.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../public/books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../public/books.json'),
        children: [
          {
            index: true,
            element: <ReadLists></ReadLists>,
            loader: () => fetch('../public/books.json')
          },
          {
            path: "wishlist",
            element: <WishLists></WishLists>,
            loader: () => fetch('../public/book-details.json')
          }
        ]
      },
      {
        path: "/page-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../public/books.json')
      },
      {
        path: "/books",
        loader: () => fetch("../public/books.json"),
        element: <Books></Books> 
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/book-details.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
