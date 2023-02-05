import React from "react";
import "./WeddingParty.css";
import elaine from '../../assets/images/IMG_20230130_173913.jpg'
import tina from '../../assets/images/IMG_20230130_173804.jpg'
import aileen from '../../assets/images/IMG_20230130_182909.jpg'
import valerie from '../../assets/images/IMG_20230130_173854.jpg' 
import jennifer from '../../assets/images/IMG_20230130_173936.jpg'
import aeriel from '../../assets/images/IMG_20230130_184726.jpg'
import aleanna from '../../assets/images/IMG_20230130_182913.jpg'
import sandra from '../../assets/images/IMG_20230130_173828.jpg'
import desiree from '../../assets/images/IMG_20230131_084747.jpg'
import jerry from '../../assets/images/IMG_20230129_183436.jpg'
import jorge from '../../assets/images/IMG_20230129_185023.jpg'
import johnathon from '../../assets/images/Screenshot_20230129_185210_Gallery.jpg'
import mike from '../../assets/images/IMG_20230131_171104.jpg'
import ramon from '../../assets/images/IMG_20230129_184920.jpg'
import juan from '../../assets/images/IMG_20230129_184942.jpg'
import ed from '../../assets/images/IMG_20230129_185020.jpg'
import esai from '../../assets/images/IMG_20230131_195658.jpg'
import gage from '../../assets/images/IMG_20230131_195749.jpg'

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
      name: "Desiree Rodriguez",
      picture: desiree,
    },
    {
      position: "Bridesmaid",
      name: "Sandra McDuffie",
      picture: sandra,
    },
    {
      position: "Bridesmaid",
      name: "Jennifer ",
      picture: jennifer,
    },
    {
      position: "Bridesmaid",
      name: "Aeriel Vidana",
      picture: aeriel,
    },
    {
      position: "Bridesmaid",
      name: "Tina Maynes",
      picture: tina,
    },
    {
      position: "Bridesmaid",
      name: "Aileen Castañeda",
      picture: aileen,
    },
  ];
  const groom = [
    {
      position: "Best Man",
      name: "Ramon 'Razor' Mora",
      picture: ramon,
    },
    {
      position: "Ring Bearer",
      name: "Esai Quintero",
      picture: esai,
    },
    {
      position: "Groomsmen",
      name: "Juan 'SgtMaj.' Borunda",
      picture: juan,
    },
    {
      position: "Groomsmen",
      name: "Jorge 'El Gran Russo' Oseguera",
      picture: jorge,
    },
    {
      position: "Groomsmen",
      name: "Jerry 'Mouse' Pasillas",
      picture: jerry,
    },
    {
      position: "Groomsmen",
      name: "Eddie 'Drak' Aguilar",
      picture: ed,
    },
    {
      position: "Groomsmen",
      name: "Johnathon 'JC' Castañeda",
      picture: johnathon,
    },
    {
      position: "Groomsmen",
      name: "Mike 'SSgt.' Oseguera",
      picture: mike,
    },
    {
      position: "Groomsmen",
      name: "Gage Quintero",
      picture: gage,
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
