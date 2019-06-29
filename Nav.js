import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from '@reach/router';

const Nav = ({ navs }) => {
 const [value, setValue] = useState(navs[0]);
 const handleClick = (nav) => {
  setValue(nav)
 }

 return (
  <div className="nav">
   {navs.map(nav => <Link to={`/${nav}`} key={nav}><Button size="small" onClick={() => handleClick(nav)} variant={nav === value ? "contained" : "text"}
   > <h4>{nav}</h4> </Button></Link>)}
  </div>
 );
};

export default Nav;