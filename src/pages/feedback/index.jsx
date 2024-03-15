import React from 'react';
import Navbar from '../../components/navbar';

export default function Feedback() {
  return (
    <div className="mt-20">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Feedback</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-green-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:outline-green-700" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:outline-green-700" />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-green-700 font-bold mb-2">Feedback:</label>
            <textarea id="feedback" name="feedback" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:outline-green-700"></textarea>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div>
    </div>
  );
}
