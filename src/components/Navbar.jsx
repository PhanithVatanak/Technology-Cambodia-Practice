import React from "react";

const Navbar = () => (
    <nav className="bg-black h-20 w-full flex text-white text-md">
        <div className="ml-6 flex-none cursor-pointer">
            <img className="h-20 hover:bg-blue-300 hover:rounded-[50%]" src="https://tech-cambodia.com/logo.png" alt="" />
        </div>
        <div className="flex justify-center items-center flex-auto w-64">
            <div className=" ">
                <ul className="flex justify-center items-center ">
                    <a className="mx-3 hover:text-blue-400" href="#"><li>ទំព័រដើម</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>អេឡិចត្រូនិក</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>ច្នៃប្រឌិត</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>យានយន្ត</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>អាជីវកម្ម</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>វិទ្យាសាស្ត្រ</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>គន្លឹះល្អៗ</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>វីដេអូ</li></a>
                    <a className="mx-3 hover:text-blue-400" href="#"><li>PR</li></a>
                </ul>
            </div>
        </div>
        <div className="flex justify-center items-center mr-16">
            <div className="flex justify-center items-center">
                <div className="mx-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div className="mx-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar;