import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr className='lijeva'>
          <th className='border border-slate-600 rounded-md bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-amber-200'>S. No.</th>
          <th className='border border-slate-600 rounded-md bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-amber-200'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-amber-200'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-amber-200'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md bg-gradient-to-r from-[#1F1C2C] to-[#6e688b] text-amber-200'>Operations</th>
        </tr>
      </thead>
      <tbody className='kalam'>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center text-transparent from-slate-950 via-violet-900 to-black bg-gradient-to-t bg-clip-text'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center text-transparent from-slate-950 via-violet-900 to-black bg-gradient-to-r bg-clip-text'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden text-transparent from-slate-950 via-violet-900 to-black bg-gradient-to-r bg-clip-text'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden text-transparent from-slate-950 via-violet-900 to-black bg-gradient-to-r bg-clip-text'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-600 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;