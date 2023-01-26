import React from "react";
import "./WeddingParty.css";
import placeholder from "../../assets/images/placeholder-profileImg.jpg";

const WeddingParty = () => {
  const data = [
    {
      position: "Maid of Honor",
      name: "Valerie Vidana",
      picture: placeholder,
    },
    {
      position: "Bridesmaid",
      name: "Elaine Valencia",
      picture: placeholder,
    },
    {
      position: "Bridesmaid",
      name: "Tina Maynes",
      picture: placeholder,
    },
    {
      position: "Bridesmaid",
      name: "Desiree Rodriguez",
      picture: placeholder,
    },
    {
      position: "Bridesmaid",
      name: "Aeriel Vidana",
      picture: placeholder,
    },
    {
      position: "Bridesmaid",
      name: "Sandra McDuffie",
      picture: placeholder,
    },
    {
      position: "Bridesmaid",
      name: "Aileen Castañeda",
      picture: placeholder,
    },
    {
      position: "Flower Girl",
      name: "Aleanna Castañeda",
      picture: placeholder,
    },
    {
      position: "Best Man",
      name: "Ramon Mora",
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
    {
      position: "Ring Bearer",
      name: "Esai Quintero",
      picture: placeholder,
    },
  ];

  return (
    <div className="container-center">
      <h1 className="party-heading">Castañeda Wedding</h1>
      <div className="party">
        {data.map((person, index) => (
          <div className="party-card mb-1" key={index}>
            <img src={person.picture} alt={person.name} className="profile-img" />
            <p>{person.position}</p>
            <h3>{person.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingParty;
