import React from 'react';
import SideBar from './SideBar';
import HouseList from './HouseList';


function Body() {
  const styles={
    flexStyle: {
      display: 'flex',
      flexDirection: 'row'
    }
  };
  return(
    <div style={styles.flexStyle}>
      <SideBar/>
      <HouseList/>
    </div>

  );
}

export default Body;
