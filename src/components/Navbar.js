import React from 'react';
import logoImg from '../../src/assests/logo.svg'
const Navbar = () => {
  return (
    <nav class="container relative py-3">
      <div class="flex items-center justify-between">
        <a href="./index.html">
          <img src={logoImg} alt='...' />
        </a>
        <div class="flex-1 max-w-xs search-field group">
          <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input type="text" placeholder="Search Task" class="search-input" id="lws-searchTask" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;