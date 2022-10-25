import React, { useEffect, useState } from "react";

const TotalParking = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>Total Parking</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>NO.</th>
              <th>Name</th>
              <th>Vehicle No</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((s ,index) => (
            <tr key={s._id}>
            <th>{index + 1}</th>
            <td>{s.name}</td>
            <td>{s.vehicle}</td>
            <td>{s.date}</td>
         
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalParking;
