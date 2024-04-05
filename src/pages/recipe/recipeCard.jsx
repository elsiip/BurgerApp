import React, { useState } from 'react';

export default function RecipeCard({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const formatText = (text) => {
        return text.split(/[.|]/).map((item, index) => (
            <span key={index}>
                {index + 1}. {item.trim()}
                <br />
            </span>
        ));
    };

    return (
        <div>
            <h3 className='text-xl font-semibold'>{item?.title}</h3>
            <p>Servings: {item?.servings}</p> <br />
            <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Show Details
            </button>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h1 className="text-lg leading-6 font-medium text-gray-900">{item?.title}</h1>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500 font-semibold">Servings: {item?.servings}</p> <br />
                                    <h3 className='text-md font-medium'>Ingredients:</h3>
                                    <p className="text-sm text-gray-500">{formatText(item?.ingredients)}</p> <br />
                                    <h3 className='text-md font-medium'>Instructions: </h3>
                                    <p className="text-sm text-gray-500">{formatText(item?.instructions)}</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={handleClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
