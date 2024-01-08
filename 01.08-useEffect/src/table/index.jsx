import React from "react";
import "./index.scss"
const TableList = ({ data }) => {
  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Contact Title</th>
            <th>Street</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.companyName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.address.street}</td>
                <td>{item.address.country}</td>
                <td>{item.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
