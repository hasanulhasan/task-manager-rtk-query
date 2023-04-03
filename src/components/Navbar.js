import React from 'react';
import logoImg from '../../src/assests/logo.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchTask } from '../features/filterSlice';
const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav class="container relative py-3">
      <div class="flex items-center justify-between">
        <Link to="/">
          <img src={logoImg} alt='...' />
        </Link>
        <div class="flex-1 max-w-xs search-field group">
          <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input style={{ color: 'black' }} onChange={(e) => dispatch(searchTask(e.target.value))} type="text" placeholder="Search Task" class="search-input" id="lws-searchTask" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;