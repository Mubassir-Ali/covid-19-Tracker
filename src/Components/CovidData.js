import React, { useEffect, useState } from "react";
let data;
let arr=[];
const CovidData = () => {
  const [globalData, setGloblData] = useState({});

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://api.covid19api.com/summary");
      data = await response.json();

      // const global= data.Global;
      // const name= Object.keys(data.Countries);
      // const val=Object.values(data.Countries);

      for (let i = 0; i < data.Countries.length; i++) {
        delete data.Countries[i].Premium;
        arr.push(data.Countries[i].TotalConfirmed);

        
      }




      setGloblData(data);
    }

    getData();
  }, []);

  console.log(arr);

  return <div></div>;
};

export { CovidData };
