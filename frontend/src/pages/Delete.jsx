import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Delete = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3001/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4 bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6] min-h-screen'>
      <BackButton />
      <h1 className='text-3xl my-4 sevillana'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='kalam flex flex-col items-center border-2 border-sky-900 bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] rounded-xl w-[600px] p-8 mx-auto mt-10'>
        <h3 className='text-2xl text-gray-300'>Are You Sure You want to delete this book?</h3>

        <button
          className='p-4 px-10 bg-red-600 hover:bg-red-500 hover:font-bold text-white m-8 rounded-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default Delete;