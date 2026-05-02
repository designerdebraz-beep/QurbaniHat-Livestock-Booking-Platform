"use client"; // Eta oboshshoi dite hobe

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Message } from './Message';

const BookingButton = ({ animalName }) => {
    const handleBookNow = () => {
      

        toast.success(`${animalName} successfully add to list!`, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
        });
    };

    return (
        <>
            <button 
                onClick={handleBookNow}
                className="flex-1 bg-white border-2 border-gray-200 hover:border-emerald-600 text-gray-700 font-bold py-4 rounded-2xl transition-all active:scale-95"
            >
                Add to List
            </button>
            <ToastContainer />
        </>
    );
};

export default BookingButton;