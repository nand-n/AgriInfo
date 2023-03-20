import React, { useState } from 'react'
import logo from './logo.png'
import search from './search.png'

function Header() {

  const [theme,setTheme]=useState('loght')

   function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
     <nav className="flex items-center justify-between p-5 bg-opacity-50 bg-white rounded-xl shadow-lg">
      <div className="flex items-center">
        <img
          className="ml-[70px] h-8 mr-2"
          src={ logo}
          alt="Logo"
        />
        {/* <span className="text-gray-800 font-bold text-lg">My App</span> */}
      </div>
      <div className="flex items-center">
        <a
          className="text-gray-800 font-bold mx-3 hidden sm:block"
          href="#"
        >
          Home
        </a>
         <a
          className="text-gray-800 font-bold mx-3 hidden sm:block"
          href="#"
        >
          Weather & Climate
        </a>
        <a
          className="text-gray-800 font-bold mx-3 hidden sm:block"
          href="#"
        >
          Soil Type
        </a>
         <a
          className="text-gray-800 font-bold mx-3 hidden sm:block"
          href="#"
        >
          Disease Detection
        </a>
         <a
          className="text-gray-800 font-bold mx-3 hidden sm:block"
          href="#"
        >
          Market Data
        </a>
        {/* <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full sm:mx-3">
          Sign up
        </button> */}
        
        <div className="inline-flex space-x-10 items-center justify-start ml-5">
    {/* <div className="flex space-x-3 items-center justify-start w-50 py-2 pl-4 pr-2 bg-gray-800 rounded">
        <input type={"search"} className="flex-1 text-sm leading-tight text-gray-400 w-40" placeholder='Search'/>
        <img className="w-4 
        
        h-4 rounded-full" src="https://via.placeholder.com/16x16"/>
    </div> */}
          
    <div className="w-12 h-7">
        <div className="flex items-center justify-end flex-1 h-full py-0.5 pl-5 pr-0.5 bg-gray-800 rounded-full">
              <div className={`flex items-start justify-start p-1 bg-white shadow rounded-full ${
        theme === "light" ? "light-theme" : "dark-theme"
      }`}>
                <img className="flex-1 h-full rounded-full" src={ search} />
            </div>
        </div>
    </div>
</div>
      </div>
    </nav>
  )
}

export default Header