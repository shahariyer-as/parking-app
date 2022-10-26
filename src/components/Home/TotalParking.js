import React, { useEffect, useState } from "react";

const TotalParking = () => {
  const [services, setServices] = useState([]);
  const [checkOutDate, setCheckOutDate] = useState({});
  const [id,setId]=useState('')
  
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
// put check out time 
useEffect(()=>{
  console.log(checkOutDate,id)
  fetch(`http://localhost:5000/parking/${id}`,{
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkOutDate),
}).then((data) => {
    if(data.status===200){
      alert("checkOut successfully")}
  });
 
},[id,checkOutDate])


const handleSubmit = (e) => {
  e.preventDefault();
  const date =e.target.date.value
  setCheckOutDate({date});
};

// const getSingeId=id=>{
//   setId(id)
//  }
 
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
              <th>Checking Time</th>
              <th>Checkout Time</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((s, index) => (
              <tr key={s._id}>
                <th>{index + 1}</th>
                <td>{s.name}</td>
                <td>{s.vehicle}</td>
                <td>{s.date}</td>
                {s.checkout ? (
                  <td>{s.checkout}</td>
                ) : (
                  <td>
                    <form onSubmit={handleSubmit} action="">
                      <label htmlFor="date"></label>
                      <input
                        id="date"
                        type="datetime-local"
                        placeholder="Your Name"
                        className="input input-bordered  max-w-xs"
                      />
                      <input
                        className="btn  bg-primary max-w-xs text-white"
                        type="submit"
                        value="Submit"
                        onClick={() => setId(s._id)}
                      />
                    </form>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalParking;
