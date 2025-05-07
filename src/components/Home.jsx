import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const images = [
  "/Car.jpg",
  "/Car2.jpg",
  "/Car3.jpg",
  "/Car.jpg",
  "/Car2.jpg",
  "/Car3.jpg",
];

const Home = () => {
  const navigate = useNavigate();
  const originalTitle = "I am original title";
  const [title, setTitle] = useState(originalTitle);
  const [currentIndex, setCurrentIndex] = useState(0);

  const alertFunction = () => {
    alert("Welcome to Props Page 😊");
    setTimeout(() => {
      navigate('/props');
    }, 1000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-black  py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white pt-3 pb-3">Car Slider</h1>

        {/* Image Slider */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-6 h-99">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Car ${idx + 1}`}
                className="w-full h-99 object-cover not-first: flex-shrink-0 bg-center"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-70"
            >
              Back
            </button>
            <button
              onClick={nextSlide}
              className="bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-70"
            >
              Next
            </button>
          </div>
        </div>

        {/* Alert Button */}
        <div className="flex justify-center mb-4">
          <button
            className="bg-blue-600 text-white p-2 mt-4 rounded hover:bg-blue-700 transition"
            onClick={alertFunction}
          >
            Click me
          </button>
        </div>

        {/* Title Section */}
        <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>
        <div className="flex justify-center gap-4 flex-wrap pb-4">
          <button
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
            onClick={() => setTitle("Hello I am new title")}
          >
            Change Title
          </button>
          <button
            className="bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
            onClick={() => setTitle(originalTitle)}
          >
            Reset Title
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
