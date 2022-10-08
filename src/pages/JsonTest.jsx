import axios from "axios";
import React, { useEffect, useState } from "react";

const JsonTest = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("data.json", {
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    setData(response.data);
    setEvents(response.data.events);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>{data.text}</p>
      <img src={events.img} alt="not found" />
    </>
  );
};

export default JsonTest;
