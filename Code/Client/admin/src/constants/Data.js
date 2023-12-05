// import { GiGymBag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import {IoMdSettings} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg'

export const Main = [
  // {
  //   icon: <GiGymBag  size={20}/>,
  //   text: "Loyalty Program",
  //   route:'#'
  // },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Services",
    route:'/carRental'
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Blogs & News",
    route:'/news'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Good Shipment",
    route:'/goodShipment'
  },
];

export const GeneralSettting = [
  {
    icon: <CgWebsite size={20} />,
    text: "Website Content",
    route:'#'
  },
  {
    icon: <IoMdSettings size={20}/>,
    text: "Profile Settings",
    route:'#'
  },
];