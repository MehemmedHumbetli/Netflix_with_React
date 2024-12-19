import React from 'react';

const Modal = ({ isOpen, item, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-900 text-white rounded-lg w-[500px] shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={onClose}
                >
                    ×
                </button>
                <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-[250px] object-cover rounded-t-lg"
                />
                <div className="p-5">
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        {item.year} • {item.ageLimit}+ • {item.type}
                    </p>
                    <p className="text-gray-300">{item.description}</p>
                </div>
                <div className="px-5 pb-5">
                    <button className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 w-full">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
