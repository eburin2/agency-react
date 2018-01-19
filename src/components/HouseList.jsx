import React from 'react';
import HouseCard from './HouseCard';
import imageOne from '../assets/images/home-one.jpg';
import imageTwo from '../assets/images/home-two.jpg';

const ImageArray = [
  {image: imageOne, type:'Mansion', cost: '$1,500,000', squareFootage: '9,000ft.'},
  {image: imageTwo, type:'Mansion', cost: '$2,000,000', squareFootage: '10,000ft.'}
];


function HouseList(){
  const styles={
    cardStyle: {
      display: 'flex',
      flexDirection: 'row',
      margin: '25px',
    }
  };
  return(
    <div style={styles.cardStyle}>
      { ImageArray.map((houseCard, index) =>
        <HouseCard
          image = {houseCard.image}
          type = {houseCard.type}
          cost = {houseCard.cost}
          squareFootage = {houseCard.squareFootage}

          key = {index}

        />)}
    </div>
  );
}

export default HouseList;
