import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/books/${id}`)
    .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setTitle(response.data.title)
        setDesc(response.data.desc)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      desc
    };
    setLoading(true);
    axios
      .put(`http://localhost:3001/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
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
    <div onKeyDown={(e)=>{
      if (e.key==='Enter')
        handleEditBook()
    }} className='p-4 bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6] min-h-screen'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] border-sky-900 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300 '>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=' rounded-full mt-2 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300 '>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=' rounded-full mt-2 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300 '>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=' rounded-full mt-2 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300 '>Description</label>
          <textarea
            type='text'
            value={desc}
            rows={4}
            cols={10}
            onChange={(e) => setDesc(e.target.value)}
            className=' rounded-xl mt-2 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-amber-400 hover:bg-amber-300 hover:font-bold text-xl text-white mx-60 rounded-xl mt-2' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Edit