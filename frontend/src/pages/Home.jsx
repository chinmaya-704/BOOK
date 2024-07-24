import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6] min-h-screen'>
      <div className='lijeva flex justify-center items-center gap-x-4'>
        <button
          className=' bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-white hover:bg-slate-900/60 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-white hover:bg-slate-900/60 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-6 sevillana'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-gray-800 hover:opacity-70 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;