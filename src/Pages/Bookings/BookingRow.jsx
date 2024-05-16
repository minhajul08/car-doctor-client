

const BookingRow = ({ booking,handelDelete,handelBookingConfirm }) => {
    const { _id,date, img, service, price,status } = booking;

 
    return (
        <tr>
            <th>
                <button onClick={() => handelDelete (_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
               { status ==='confirm'  ? <span className="font-bold text-green-600">Confirm</span> :
                <button onClick={() => handelBookingConfirm (_id)} className="btn btn-ghost btn-xs"> Please Confirm</button>
               }
            </th>
        </tr>
    );
};

export default BookingRow;