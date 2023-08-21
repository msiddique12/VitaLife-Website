import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../assets';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
  return (
    <div className='flex bg-[#79155B] justify-between items-center h-20 max-w-[1240px] mx-auto px-4 fixed top-0 w-full'>
        <img src={logo} alt="Website Logo" className="h-10"></img>
        <h1 className='w-full text-2xl font-bold text-[#FFBA86]'>VitaPlate</h1>
        
        <nav className="p-2 rounded-md flex-grow">
            <div className="container mx-auto flex justify-end items-center">
            <div className="hidden sm:flex space-x-1">
                <Link to="/" className='p-4 text-[#FFBA86] hover:text-[#F6635C]'>Home</Link>
                <Link to="/search" className='p-4 text-[#FFBA86] hover:text-[#F6635C]'>Search</Link>
                <Link to="/about" className='p-4 text-[#FFBA86] hover:text-[#F6635C]'>About</Link>
            </div>
            <div className="sm:hidden relative">
                <button className="text-[#FFBA86] hover:text-white" onClick={toggleDropdown}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
                {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-[#e3d7a1] rounded-lg shadow-lg">
                    <Link to="/" className='block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-[#F6635C]'>Home</Link>
                    <Link to="/search" className='block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-[#F6635C]'>Search</Link>
                    <Link to="/about" className='block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-[#F6635C]'>About</Link>
                </div> 
                )}
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar