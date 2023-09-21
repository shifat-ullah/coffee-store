import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const coffeloder = useLoaderData();
    const { _id, name, photo, Supplier, Taste, Details, Chef, Category } = coffeloder||{};
    const UPdateCoffe =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Supplier = form.Supplier.value;
        const Category = form.Category.value;
        const Chef = form.Chef.value;
        const Taste = form.Taste.value;
        const Details = form.Details.value;
        const photo = form.photo.value;

        const Updatecoffeinfo = {name, Supplier,Category,Chef,Taste,Details,photo};

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(Updatecoffeinfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'User Update successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

    }
    return (
        <div className=" bg-red-100 font-bold text-lg w-[60%] h-full m-auto mb-29 mt-10">
           <div className="pt-10">
           <h1 className=" text-2xl text-center">Update New Coffe</h1>
           </div>

            <form className="mt-5 " onSubmit={UPdateCoffe}>
                <div className="flex pl-20 gap-5">
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} 
                        placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="Supplier"
                         placeholder="Enter coffee supplier" defaultValue={Supplier} className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="Category" defaultValue={Category} placeholder="Enter coffee category"  className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="Chef" defaultValue={Chef} placeholder="Enter coffee chef" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="Taste" defaultValue={Taste} placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text" >Details</span>
                        </label>
                        <input type="text" name="Details" defaultValue={Details} placeholder="Enter coffee details" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className=" pl-20">
                <p className="">Photo</p>
                        <input type="text" placeholder="Enter photo URL" defaultValue={photo} name="photo" className="w-[90%] input input-bordered" />
                        <br />
                        <br />

                        <button type="submite" className="border w-[90%] border-spacing-3 bg-orange-900 text-white mb-10 p-2">Add Coffee</button>
                </div>
            </form>
                           

        </div>
    );
};

export default UpdateCoffe;