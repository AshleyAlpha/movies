import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header-container px-36">
      <div className="flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <img src="movie.png" alt="Logo" className="h-14 w-auto" />
          {/* <h1 className="text-cyan-100">Movies Bazer</h1> */}
        </div>

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
    </div>
  );
};

export default Header;