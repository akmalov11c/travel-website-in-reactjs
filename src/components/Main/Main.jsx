import React, { useEffect } from "react";
import "../css/main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";

import img from "../../media/img.jpeg";
import im1 from "../../media/im1.jpeg";
import im2 from "../../media/im2.jpeg";
import im3 from "../../media/im3.jpeg";
import im4 from "../../media/im4.jpeg";
import im5 from "../../media/im5.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zaeland",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, fuga asperiores. Natus porro reiciendis nesciunt perspiciatis error ex necessitatibus, dignissimos molestiae minus at culpa itaque suscipit. Odit, debitis. Optio, non?",
  },

  {
    id: 2,
    imgSrc: im1,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, fuga asperiores. Natus porro reiciendis nesciunt perspiciatis error ex necessitatibus, dignissimos molestiae minus at culpa itaque suscipit. Odit, debitis. Optio, non?",
  },

  {
    id: 3,
    imgSrc: im2,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, fuga asperiores. Natus porro reiciendis nesciunt perspiciatis error ex necessitatibus, dignissimos molestiae minus at culpa itaque suscipit. Odit, debitis. Optio, non? ",
  },

  {
    id: 4,
    imgSrc: im3,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, fuga asperiores. Natus porro reiciendis nesciunt perspiciatis error ex necessitatibus, dignissimos molestiae minus at culpa itaque suscipit. Odit, debitis. Optio, non?",
  },

  {
    id: 5,
    imgSrc: im4,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, fuga asperiores. Natus porro reiciendis nesciunt perspiciatis error ex necessitatibus, dignissimos molestiae minus at culpa itaque suscipit. Odit, debitis. Optio, non? ",
  },

  {
    id: 6,
    imgSrc: im5,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, fuga asperiores. Natus porro reiciendis nesciunt perspiciatis error ex necessitatibus, dignissimos molestiae minus at culpa itaque suscipit. Odit, debitis. Optio, non?",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboard2Check className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
