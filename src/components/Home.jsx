import { useLoaderData } from "react-router-dom";
import Coffeecard from "./Coffeecard";

const Home = () => {


    const coffeloder = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-10 mb-5 bg-lime-800 text-white">Add coffe is : {coffeloder.length}</h1>
        <div className="grid md:grid-cols-2">
        {
            coffeloder.map(coffee => <Coffeecard key={coffee._id} coffee={coffee}></Coffeecard>)
        }
        </div>
            
        </div>
    );
};

export default Home;