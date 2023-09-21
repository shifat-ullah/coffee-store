import { useLoaderData } from "react-router-dom";
import Coffeecard from "./Coffeecard";
import { useState } from "react";

const Home = () => {
    const coffeloder = useLoaderData();
    const [coffes, setcoffes] = useState(coffeloder)
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-10 mb-5 bg-lime-800 text-white">Add coffe is : {coffes.length}</h1>
        <div className="grid md:grid-cols-2">
        {
            coffes.map(coffee => <Coffeecard key={coffee._id} coffee={coffee} 
            coffes={coffes} setcoffes={setcoffes}
            ></Coffeecard>)
        }
        </div>
            
        </div>
    );
};

export default Home;