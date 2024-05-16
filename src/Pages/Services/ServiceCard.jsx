import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {_id,img,price,title} =service;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className="rounded-xl h-64" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
   <div className="font-bold text-orange-600 flex items-center ">
   <p>Price: {price}</p>
    <Link to={`/checkout/${_id}`}>
    <p><FaArrowRight className="ml-52" /></p></Link>
   </div>
  </div>
</div>
    );
};

export default ServiceCard;