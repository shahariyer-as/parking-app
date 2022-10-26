import React from "react";
import { useForm } from "react-hook-form";



const ParkingInput = () => {
// const [inputInfo,setInputInfo]=useState('')
  const {
    register,reset,
    formState: { errors },
    handleSubmit,

  } = useForm();

  // useEffect(()=>{
    
    
  // },[inputInfo,reset])

  const onSubmit = (data) => {
    fetch("http://localhost:5000/parking",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) =>response.json().then(data=>{
      console.log(data)
      if(data.insertedId){
window.alert('Data Entry Confirm')
      }
      else{
        window.alert('some face error')
   
      }
     reset()
     
    })
    )
    // console.log(data);
    // setInputInfo(data)
    
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Submit Your Vehicle Info</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Owner Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", { required: true })}
              />
              <label className="label ">  {errors.name && <span className="text-red-500">name is required</span>}</label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Vehicle Number</span>
              </label>
              <input
                type="text"
                placeholder="Vehicle Number"
                className="input input-bordered w-full max-w-xs"
                {...register("vehicle", {
                  required: {
                    value: true,
                  },
                  minLength: {
                    value: 7,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">  {errors.Vehicle && <span>This field is required</span>}
              {errors.vehicle?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.vehicle.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Parking Time</span>
              </label>
              <input
                type="datetime-local"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("date", { required: true })}
              />
              <label className="label ">  {errors.date && <span className="text-red-500">date is required</span>}</label>
            </div>
        
            <input
              className="btn w-full bg-primary max-w-xs text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParkingInput;
