import React from 'react';

const Inputcomp = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mb-2"
        required
      />
    </div>
  );
};

export default Inputcomp;
