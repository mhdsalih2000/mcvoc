import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Dropdown() {
    const stockSymbols = [
        'AAPL', 
        'GOOGL', 
        'MSFT', 
        'AMZN', 
        'TSLA' 
      ];
  return (
    
 

    <>
    <div className="btn-group ml-8 pt-10  ">
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Stocks
      </button>
      <ul className="dropdown-menu">
        <li>
         
          {stockSymbols.map((symbol) => (
        <option key={symbol} value={symbol}>
          {symbol}
        </option>))}
         
        </li>
        
         
      </ul>
    </div>

    </>

  )
}

export default Dropdown