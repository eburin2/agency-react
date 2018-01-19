import React from 'react';
import LinkButton from './LinkButton';

function SideBar() {
  const styles={
    containerStyle: {
      width: '100px',
      height: '1000px',
      marginTop: '10px',
      border: '2px solid black'
    },
    sideBarText:{
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.containerStyle}>
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <LinkButton />
    </div>

  );
}

export default SideBar;
