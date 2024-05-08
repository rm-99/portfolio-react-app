import React, {useState} from 'react'
import { FaBars, FaGithub, FaInstagram, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '70px'}} />
        </div>
        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
{/* Hamburger */}
    <div onClick={handClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

{/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li> 
    </ul>

{/* Social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
        {/* Linkedin */}
        <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="/">
               Linkedin <FaLinkedin size={30}/> 
            </a>
        </li>
        {/* Instagram */}
        <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DD247B]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="/">
               Instagram <FaInstagram size={30}/> 
            </a>
        </li>
        {/* Github */}
        <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="/">
               Github <FaGithub size={30}/> 
            </a>
        </li>
    </ul>
</div>


</div>
  )
}

export default Navbar
