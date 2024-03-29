import React from "react";
import { Link } from "react-router-dom";

import RoomContainer from "../components/RoomContainer";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
