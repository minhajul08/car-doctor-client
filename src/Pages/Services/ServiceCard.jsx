import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({service}) => {
    const {img,price,title} =service;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className="rounded-xl h-64" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
   <div className="font-bold text-orange-600 flex items-center ">
   <p>Price: {price}</p>
   <p><FaArrowRight className="ml-52" /></p>
   </div>
  </div>
</div>
    );
};

export default ServiceCard;