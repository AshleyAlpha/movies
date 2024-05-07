import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidRightArrowCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header-container px-36">
      <div className="flex justify-between items-center h-16 px-4">

      <NavLink to="/Layout/Home">
        <div className="flex items-center space-x-2">
          <img src="movie.png" alt="Logo" className="h-14 w-auto" />
        </div>
        </NavLink>

        <div className="flex items-center space-x-3">
        
          <NavLink to="/Layout/Home" className="text-cyan-100">
            Home
          </NavLink>
          <NavLink to="/Layout/Explore" className="text-cyan-100">
            Explore
          </NavLink>
          <NavLink to="/Layout/Genre" className="text-cyan-100">
            Genre
          </NavLink>
          <NavLink to="/Layout/News" className="text-cyan-100">
            News
          </NavLink>
          <NavLink to="/Layout/Movies" className="text-cyan-100">
            Movies
          </NavLink>
          <NavLink to="/Layout/TVShows" className="text-cyan-100">
            TV Shows
          </NavLink>
        </div>
      </div>

      <div className="flex justify-between pt-10 bg-black text-white px-36">
        <div className="flex flex-col gap-4 mt-40">
          <h1>FIND MOVIES</h1>
          <h2 className="bg-gradient-to-r from-blue-500 to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold">
            TV SHOWS AND MORE
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
            Esse, vel placeat hic praesentium rem eius voluptatem.<br></br>
            Non dolor unde alias earum adipisci quas ab ex dicta,<br></br>
            doloribus, distinctio sapiente minima.
          </p>
          <button className=" border border-white rounded-lg w-48">
            <div className="flex justify-center gap-3">
              <BiSolidRightArrowCircle className=" mt-1" />
              Watch Tutorial
            </div>
          </button>
        </div>
        <div className="relative">
          <img
            src="/spideman.jfif"
            className="absolute top-20 right-52 w-[19rem]"
          />
          <img src="/home.jfif" className="w-[19rem]" />
        </div>
      </div>
    </div>
  );
};

export default Header;