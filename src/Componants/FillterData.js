import React from 'react';

const FilterData = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="number"
        placeholder="Min Revenue"
        value={filters.minRevenue}
        onChange={(e) => setFilters({ ...filters, minRevenue: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Max Revenue"
        value={filters.maxRevenue}
        onChange={(e) => setFilters({ ...filters, maxRevenue: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={filters.startDate}
        onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={filters.endDate}
        onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default FilterData;
