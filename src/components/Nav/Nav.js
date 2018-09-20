import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <Button>
          <Link to="/user">
            User Home
          </Link>
      
        </Button>
        <Button>
          <Link to="/info">
            Info Page
          </Link>
        </Button>
        <Button>
          <Link to="/daily">
          Daily Check-in
          </Link>
        </Button>
        <Button>
          <Link to="/notes">
          Notes
          </Link>
        </Button>
      </ul>
    </div>
  </div>
);

export default Nav;
