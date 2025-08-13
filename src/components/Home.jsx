import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  "/Car.jpg",
  "/Car2.jpg",
  "/Car3.jpg",
];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DriveX</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Premium car rentals and luxury vehicle experiences. Discover your next journey with us.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            onClick={() => navigate('/explore')}
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* Image Slider */}
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Premium Collection</h2>
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-96">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Car ${idx + 1}`}
                className="w-full flex-shrink-0 h-96 object-cover"
              />
            ))}
          </div>

          {/* Slider Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-gray-900 rounded-xl p-6 text-center shadow hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Luxury Cars</h3>
          <p className="text-gray-400">Experience top-class luxury and comfort with our premium cars collection.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center shadow hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
          <p className="text-gray-400">Get the best deals in the market without compromising on quality or service.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center shadow hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
          <p className="text-gray-400">We’re here to assist you anytime, anywhere. Your journey is our priority.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
        <p className="text-lg mb-6">Book your dream car today and drive with confidence.</p>
        <button
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          onClick={() => navigate('/book-now')}
        >
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Home;
