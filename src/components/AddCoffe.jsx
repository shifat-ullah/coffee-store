import Swal from 'sweetalert2'
const AddCoffe = () => {

    const addCoffe =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Supplier = form.Supplier.value;
        const Category = form.Category.value;
        const Chef = form.Chef.value;
        const Taste = form.Taste.value;
        const Details = form.Details.value;
        const photo = form.photo.value;

        const coffeinfo = {name, Supplier,Category,Chef,Taste,Details,photo};

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(coffeinfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className=" bg-red-100 font-bold text-lg w-[60%] h-full m-auto mb-29 mt-10">
           <div className="pt-10">
           <h1 className=" text-2xl text-center">Add New Coffe</h1>
           </div>

            <form className="mt-5 " onSubmit={addCoffe}>
                <div className="flex pl-20 gap-5">
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="Supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="Category" placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="Chef" placeholder="Enter coffee chef" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="Taste" placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <label className="label">
                            <span className="label-text" >Details</span>
                        </label>
                        <input type="text" name="Details" placeholder="Enter coffee details" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className=" pl-20">
                <p className="">Photo</p>
                        <input type="text" placeholder="Enter photo URL" name="photo" className="w-[90%] input input-bordered" />
                        <br />
                        <br />

                        <button type="submite" className="border w-[90%] border-spacing-3 bg-orange-900 text-white mb-10 p-2">Add Coffee</button>
                </div>
            </form>
                           

        </div>
    );
};

export default AddCoffe;