
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services,setServices] = useState ([])

        useEffect (() => {
            fetch ('http://localhost:5000/services')
            .then (res => res.json ())
            .then (data => {
               setServices (data)
            })
        } , [])
    
    return (
        <div>
            <div className="text-center my-5">
                <h1 className="text-orange-500 font-bold">Service</h1>
                <h3 className="text-bold text-4xl">Our service area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map (service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;