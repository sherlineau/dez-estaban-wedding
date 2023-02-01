import React from "react";
import "./WeddingParty.css";
import placeholder from "../../assets/images/placeholder-profileImg.jpg";
import aeriel from '../../assets/images/IMG_20230130_173913.jpg'
import aileen from '../../assets/images/IMG_20230130_173804.jpg'
import aleanna from '../../assets/images/IMG_20230130_182909.jpg'
import jennifer from '../../assets/images/IMG_20230130_173854.jpg' 
import elaine from '../../assets/images/IMG_20230130_173936.jpg'
import valerie from '../../assets/images/IMG_20230130_184726.jpg'
import sandra from '../../assets/images/IMG_20230130_182913.jpg'
import tina from '../../assets/images/IMG_20230130_173828.jpg'
import desiree from '../../assets/images/IMG_20230131_084747.jpg'

const WeddingParty = () => {
  const bride = [
    {
      position: "Maid of Honor",
      name: "Valerie Vidana",
      picture: valerie,
    },
    {
      position: "Flower Girl",
      name: "Aleanna Castañeda",
      picture: aleanna,
    },
    {
      position: "Bridesmaid",
      name: "Elaine Valencia",
      picture: elaine,
    },
    {
      position: "Bridesmaid",
      name: "Tina Maynes",
      picture: tina,
    },
    {
      position: "Bridesmaid",
      name: "Desiree Rodriguez",
      picture: desiree,
    },
    {
      position: "Bridesmaid",
      name: "Aeriel Vidana",
      picture: aeriel,
    },
    {
      position: "Bridesmaid",
      name: "Sandra McDuffie",
      picture: sandra,
    },
    {
      position: "Bridesmaid",
      name: "Aileen Castañeda",
      picture: aileen,
    },
    {
      position: "Bridesmaid",
      name: "Jennifer ",
      picture: jennifer,
    },
  ];
  const groom = [
    {
      position: "Best Man",
      name: "Ramon Mora",
      picture: placeholder,
    },
    {
      position: "Ring Bearer",
      name: "Esai Quintero",
      picture: placeholder,
    },
    {
      position: "Groomsmen",
      name: "Johnathon Castañeda",
      picture: placeholder,
    },
    {
      position: "Groomsmen",
      name: "Jerry Pasillas",
      picture: placeholder,
    },
    {
      position: "Groomsmen",
      name: "Juan Borunda",
      picture: placeholder,
    },
    {
      position: "Groomsmen",
      name: "Eddie Aguilar",
      picture: placeholder,
    },
    {
      position: "Groomsmen",
      name: "Gage Quintero",
      picture: placeholder,
    },
    {
      position: "Groomsmen",
      name: "Jorge Oseguera",
      picture: placeholder,
    },
  ];

  return (
    <div className="container-center">
      <h1 className="party-heading">Castañeda Wedding</h1>
      <div className="party">
        <div className="left">
          {bride.map((person, index) => (
            <div className="party-card mb-1" key={index}>
              <img
                src={person.picture}
                alt={person.name}
                className="profile-img"
              />
              <p>{person.position}</p>
              <h3>{person.name}</h3>
            </div>
          ))}
        </div>
        <div className="right">
          {groom.map((person, index) => (
            <div className="party-card mb-1" key={index}>
              <img
                src={person.picture}
                alt={person.name}
                className="profile-img"
              />
              <p>{person.position}</p>
              <h3>{person.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
