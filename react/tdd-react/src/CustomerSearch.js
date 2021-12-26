import React from 'react';

const CustomerSearch = () => {
  return (
      <div>
        <h1>Customer Search</h1>
        <form>
          <input
              type="text"
              name="ingredient"
              placeholder="Enter customer name..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
  )
};

export default CustomerSearch;
