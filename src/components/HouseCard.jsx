import React from 'react';
// import imageOne from '../assets/images/home-one.jpg';
// import imageTwo from '../assets/images/home-two.jpg';
import PropTypes from 'prop-types';


function HouseCard(props) {
  const styles={
    picStyles:{
      width: '300px',
      height: '300px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      margin: '20px'
    },

    typeStyles:{
      textAlign: 'center',
      fontSize: '30px'
    },

    costStyles:{
      textAlign: 'center',
      fontSize: '24px'
    },

    squareFootageStyles:{
      textAlign: 'center',
      fontSize: '24px'
    }
  };
  return (
    <div>
      <img style={styles.picStyles} src={props.image}/>
      <p style={styles.typeStyles}>{props.type}</p>
      <p style={styles.costStyles}>{props.cost}</p>
      <p style={styles.squareFootageStyles}>{props.squareFootage}</p>
    </div>
  );
}

HouseCard.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  squareFootage: PropTypes.string.isRequired
};

export default HouseCard;
