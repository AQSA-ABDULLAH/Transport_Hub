import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

export const Main = [
  {
    icon: <AiFillHome size={20} />,
    text: "Manage Trips",
    route:'/BookingPage'
  },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Manage Rental",
    route:'/manage_rental'
  },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Extend Rental",
    route:'/extend_rental'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Track Shipment",
    route:'/track_shipment'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Manage Parcel",
    route:'/manage_parcel'
  },
];