import React from "react";
import { useState,useEffect } from "react";
import Table from "./Table.js"
import "./style.css"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', { crossDomain: 'true' });
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
   <table>
   <thead>
   <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Current Price</th>
      <th>Total Volume</th>
      <th>Price Change</th>
      <th>Market Cap</th>
      </tr>
  </thead>
  <tbody>
    {data.map(item => (
      <Table key={item.id} data={item} />
    ))}
    </tbody>
  </table>
  );
};

export default App;