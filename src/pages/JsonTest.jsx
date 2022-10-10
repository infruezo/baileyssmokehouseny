import axios from "axios";
import React, { useEffect, useState } from "react";
import EventPopup from "../components/smokehouse/EventPopup";

const JsonTest = () => {
  // const [data, setData] = useState([]);
  // const [events, setEvents] = useState([]);

  // const fetchData = async () => {
  //   const response = await axios.get("data.json", {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   });
  //   setData(response.data);
  //   setEvents(response.data.events);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <EventPopup />
    </>
  );
};

export default JsonTest;
