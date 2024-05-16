import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
const SignUp = () => {
  
     const {createUser} = useContext (AuthContext); 

    const handelRegister = e => {
        e.preventDefault ();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log (name,email,password);
        createUser (email,password)
        .then (result => {
          console.log (result.user)
        })
        .catch (error => {
          console.log (error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2">
           <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold pt-10">SignUp</h1>
            <form  onSubmit={handelRegister} className="card-body">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUP</button>
              </div>
            </form>
            <h2 className='my-4 text-center '>Already have an account? <Link className='text-orange-600 font-bold hover:btn-link' to='/logIn'>SignIn</Link></h2>
          </div>
        </div>
      </div>
    );
};

export default SignUp;