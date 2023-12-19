import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';



 const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        {/* Add more header columns as needed */}
      </tr>
    </thead>
  );
};

const TableBody = ({ linkData, removeLink }) => {
  return (
    <tbody>
      {linkData.map((item, index) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          {/* Add more table cells as needed */}
          <td>
            <button onClick={() => removeLink(index)}>Remove</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ linkData, removeLink }) => {
  return (
    <table>
      <TableHeader />
      <TableBody linkData={linkData} removeLink={removeLink} />
    </table>
  );
};

export default Table;
