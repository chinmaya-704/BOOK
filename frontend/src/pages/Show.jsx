import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const Show = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6] min-h-screen'>
      <BackButton />
      <h1 className='text-3xl my-4 sevillana'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='kalam flex flex-col bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] border-2 border-sky-900 rounded-xl w-fit p-4'>
          {/* <div className='my-4'>
            <span className='text-xl mr-4 text-gray-300'>Id:</span>
            <span className=' text-amber-300'>{book._id}</span>
          </div> */}
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-300'>Title:</span>
            <span className=' text-amber-300'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-300'>Author:</span>
            <span className=' text-amber-300'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-300'>Publish Year:</span>
            <span className=' text-amber-300'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-300'>Create Time:</span>
            <span className=' text-amber-300'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-300'>Last Update Time:</span>
            <span className=' text-amber-300'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;