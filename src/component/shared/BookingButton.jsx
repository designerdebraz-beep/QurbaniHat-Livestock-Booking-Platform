"use client"; // Eta oboshshoi dite hobe

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingButton = ({ animalName }) => {
    const handleBookNow = () => {
        toast.success(`${animalName} successfully booked!`, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
        });
    };

    return (
        <>
            <button 
                onClick={handleBookNow}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95"
            >
                Book Now
            </button>
            <ToastContainer />
        </>
    );
};

export default BookingButton;