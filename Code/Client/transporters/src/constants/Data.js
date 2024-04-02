import { GiGymBag } from "react-icons/gi";
import {
  FaUsers,
} from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import {IoMdSettings} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg'

export const Main = [
  {
    icon: <GiGymBag  size={20}/>,
    text: "Classes",
    route:'/classes'
  },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Packages",
    route:'/packages'
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Members",
    route:'/members'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Contact Messages",
    route:'/contact-messages'
  },
];

export const General = [
  {
    icon: <CgWebsite size={20} />,
    text: "Website Content",
    route:'/website-content'
  },
  {
    icon: <IoMdSettings size={20}/>,
    text: "Profile Settings",
    route:'/profile-settings'
  },
];
