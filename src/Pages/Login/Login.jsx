import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import axios from 'axios';
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()



  const handelLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        const user = { email }

        // get access token
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data)
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/')
            }
          })
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" mr-12 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold pt-10">Login</h1>
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h2 className='my-4 text-center '>New to car doctor's <Link className='text-orange-600 font-bold hover:btn-link' to='/signUp'>SignUp</Link></h2>
        </div>
      </div>
    </div>
  );
};

export default Login;