import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Checkout = () => {
    const {user} = useContext (AuthContext);
    const services = useLoaderData ();
    const {title,price,_id,img} = services;

    const handelCheckout = e => {
        e.preventDefault ();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        console.log (name,date)
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            price:price,
            service_id: _id,
            service:title
        }
       console.log(booking)
       fetch ('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
           'content-type': 'application/json'
        },
        body: JSON.stringify (booking)
       })
       .then (res => res.json ())
       .then (data => {
        console.log (data)
        if (data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "Your data added to database!",
            icon: "success"
          });
        }
        form.reset ()
       })
       
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold p-10">Checkout : {title}</h2>
      <form onSubmit={handelCheckout} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required />
        </div>
       </div>
       <button className="btn bg-orange-600 btn-block text-white my-3">Order Confirm</button>
      </form>
    </div>
    );
};

export default Checkout;