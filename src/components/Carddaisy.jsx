import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Carddaisy = () => {
  const purchase = ()=>{
    toast.success("Thanks For Buying")
  }
  return (
    <motion.div
      className="w-full sm:w-80 md:w-96 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="card bg-base-100 image-full shadow-xl">
        <figure>
          <img
            loading="lazy"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className='rounded-t'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black capitalize">Nike</h2>
          <p className="text-gray-600">
          “Experience revolutionary comfort with Nike’s boldest heel Air unit yet, fused with lightweight React foam for all-day cushioning.”
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={purchase}>Shop Now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Carddaisy;
