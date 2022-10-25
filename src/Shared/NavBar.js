import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-primary-500 ">
  <div className="flex-1">
    <Link to='' className="btn btn-ghost normal-case text-xl">Parking APP</Link>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal">
      <li><Link to=''>Home</Link></li>
      <li><Link to='/totalParking'>Total Parking</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;