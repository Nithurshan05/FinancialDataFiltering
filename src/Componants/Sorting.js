import React from 'react';

const Sorting = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
  const handleSort = (column) => {
    if (sortBy === column) {
      // Toggle sort order if the same column is selected again
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set a new column to sort by, default to ascending order
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="flex gap-4 mb-4">
      <button
        className={`px-4 py-2 border rounded ${
          sortBy === 'date' ? 'bg-gray-200' : ''
        }`}
        onClick={() => handleSort('date')}
      >
        Sort by Date {sortBy === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
      </button>
      <button
        className={`px-4 py-2 border rounded ${
          sortBy === 'revenue' ? 'bg-gray-200' : ''
        }`}
        onClick={() => handleSort('revenue')}
      >
        Sort by Revenue {sortBy === 'revenue' && (sortOrder === 'asc' ? '↑' : '↓')}
      </button>
      <button
        className={`px-4 py-2 border rounded ${
          sortBy === 'netIncome' ? 'bg-gray-200' : ''
        }`}
        onClick={() => handleSort('netIncome')}
      >
        Sort by Net Income {sortBy === 'netIncome' && (sortOrder === 'asc' ? '↑' : '↓')}
      </button>
    </div>
  );
};

export default Sorting;
