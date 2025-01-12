import React from 'react';

const DisplayData = ({ data }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
      <table className="min-w-full bg-white">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Revenue</th>
            <th className="py-3 px-6 text-left">Net Income</th>
            <th className="py-3 px-6 text-left">Gross Profit</th>
            <th className="py-3 px-6 text-left">EPS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`border-t ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-blue-100`}
            >
              <td className="py-3 px-6">{row.date}</td>
              <td className="py-3 px-6">{row.revenue}</td>
              <td className="py-3 px-6">{row.netIncome}</td>
              <td className="py-3 px-6">{row.grossProfit}</td>
              <td className="py-3 px-6">{row.eps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
