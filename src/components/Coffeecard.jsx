/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Coffeecard = ({ coffee , setcoffes, coffes}) => {
  const coffeloder = useLoaderData();
  
    const {_id, name, Supplier, Category, Chef, Taste, Details, photo } = coffee;
    const [coffeeData, setCoffeeData] = useState(coffeloder)
    // console.log(coffe)
    

    const handelDelet = _id =>{
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5000/coffee/${_id}`, {
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
    
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )

                      console.log(data)
                      const remainingCoffee =coffes?.filter(coffe => coffe._id !== _id)
                      setcoffes(remainingCoffee)
                      console.log(remainingCoffee)
                        
                }
              })
            }
          })
          
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="coffee" className="w-80 h-80" /></figure>
                <div className=" justify-between w-full align-middle items-center pr-7 pl-7 flex">
                  <div>
                    <p>Supplier : {Supplier}</p>
                    <p>Category : {Category}</p>
                    <p> Taste : {Taste}</p>

                    </div>
                    <div>
                        <div className="btn-group btn-group-vertical">
                            <Link to={`/update/${_id}`}>
                            <button className="btn">Update</button>
                            </Link>
                            <button className="btn">Delete</button>
                            <button onClick={()=>handelDelet(_id)} className="btn bg-orange-400">X</button>
                        </div>
                    </div>
                  </div>
                   
                </div>
            </div>
    );
};

export default Coffeecard;