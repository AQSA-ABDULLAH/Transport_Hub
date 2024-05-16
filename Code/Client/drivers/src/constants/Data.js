import { GiGymBag } from "react-icons/gi";
import {
  FaUsers,
} from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";

export const Main = [
  {
    icon: <GiGymBag size={20} />,
    text: "Manage Rentals",
    route: '/manage-rentals'
  },
  {
    icon: <FaUsers size={20} />,
    text: "Manage Reviews",
    route: '/packages'
  },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Account Statements",
    route: '/members'
  },
  {
    icon: <BiSolidContact size={20} />,
    text: "Profile & Settings",
    route: '/transporter-profile'
  },
];
