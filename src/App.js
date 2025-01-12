import React, { useState, useEffect } from 'react';
import { fetchFinancialData } from './Services/api';
import DisplayData from './Componants/DisplayData';
import FillterData from './Componants/FillterData';
import Sorting from './Componants/Sorting';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    minRevenue: '',
    maxRevenue: '',
    startDate: '',
    endDate: '',
  });
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchFinancialData();
      setData(fetchedData);
    };
    getData();
  }, []);

  // Filter the data
  const filteredData = data.filter((row) => {
    return (
      (!filters.minRevenue || row.revenue >= filters.minRevenue) &&
      (!filters.maxRevenue || row.revenue <= filters.maxRevenue) &&
      (!filters.startDate || new Date(row.date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(row.date) <= new Date(filters.endDate))
    );
  });

  // Sort the filtered data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortBy) return 0; // If no sorting column is selected
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    if (sortOrder === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Data Filtering App</h1>
      <FillterData filters={filters} setFilters={setFilters} />
      <Sorting
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <DisplayData data={sortedData} />
    </div>
  );
}

export default App;
