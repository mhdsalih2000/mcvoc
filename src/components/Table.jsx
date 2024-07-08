import React from 'react'
import '../style/Table.css'
import { useState ,useEffect } from 'react';
import axiosInstance from '../services/Api';


function Table() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/AAPL/range/1/day/2023-01-09/2023-01-09');
            setData(response.data.results);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);
      console.log(data)
      const stockData = data[0];
       


    
  return (
    <div className="overflow-x-auto ml-8 mr-8 pt-20">
  <table className="table-auto min-w-full border-collapse border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Stock Name</th>
        <th className="border border-gray-300 px-4 py-2">Date</th>
        <th className="border border-gray-300 px-4 py-2">Open</th>
        <th className="border border-gray-300 px-4 py-2">Close</th>
        <th className="border border-gray-300 px-4 py-2">High</th>
        <th className="border border-gray-300 px-4 py-2">Low</th>
        <th className="border border-gray-300 px-4 py-2">Volume</th>
      </tr>
    </thead>
    <tbody>
   
    {stockData&& <tr >
        <td className="border border-gray-300 px-4 py-2">AAPL</td>
        <td className="border border-gray-300 px-4 py-2">{new Date(stockData.t).toLocaleString()}</td>
        <td className="border border-gray-300 px-4 py-2">{stockData.o}</td>
        <td className="border border-gray-300 px-4 py-2">{stockData.c}</td>
        <td className="border border-gray-300 px-4 py-2">{stockData.h}</td>
        <td className="border border-gray-300 px-4 py-2">{stockData.l}</td>
        <td className="border border-gray-300 px-4 py-2">{stockData.v}</td>
    </tr>}
         
    </tbody>
  </table>
</div>


    
  )
}

export default Table