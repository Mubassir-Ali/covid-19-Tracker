import React, { useEffect } from "react";

export const CovidData = () => {
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://covid19-api.org/api/status');
      let data =await response.json();
        console.log(data[0]);

        delete data[0].country
        delete data[0].last_update
      
    }
    getData()


 
  }, []);

  return <div></div>;
};
