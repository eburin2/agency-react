import React from 'react';

function LinkButton() {
  const styles={
    linkButton:{
      width: '75px',
      height: '20px',
      borderRadius: '20px',
      border: '2px solid black',
      marginTop: '50px',
      marginLeft: '10px',
      padding: '2px'
    },
  };
  return (
    <button style={styles.linkButton}>Link</button>
  );
}

export default LinkButton;
