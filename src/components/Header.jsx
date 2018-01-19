import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const styles={
    containerStyle: {
      width: '1000px',
      height: '100px',
      border: '2px solid black'
    },
    textStyle: {
      fontSize: '30px',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.containerStyle}>
      <h1 style={styles.textStyle}>Helping Hand Corporation</h1>
      <Link to="/">Home</Link> | <Link to="/individualhome">home</Link>
    </div>
  );
}

export default Header;
