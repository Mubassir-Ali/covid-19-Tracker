import React, { useState, useEffect } from "react";
import datasets from "./datasets";
import { Bar } from "react-chartjs-2";

let Globdata =[];
let arr = [];
let countr = [];


export const Covid19 = () => {
  const [globalData, setGloblData] = useState(Globdata);
  const [countrys, setCountrys] = useState(countr);

  async function getData() {
    let response = await fetch("https://api.covid19api.com/summary");
    Globdata = await response.json();

    // const global= data.Global;
    // const name= Object.keys(data.Countries);
    // const val=Object.values(data.Countries);

    for (let i = 0; i < Globdata.Countries.length; i++) {
      // delete Globdata.Countries[i].Premium;
      arr.push(Globdata.Countries[i].TotalConfirmed);
      countr.push(Globdata.Countries[i].Country);
    }


    return(<div>
    {setGloblData(arr)}
    {setCountrys(countr)}

    </div>
      )
    
 
  }



  getData();

  console.log(globalData.slice(0,5));

  // console.log(az);
  const data = {
    // labels: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola"],
    labels: countr.slice(0,100),
    datasets: [
      {
        data: arr.slice(0,100),
        // data: [54062, 67982, 104092, 9083, 18926],
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "rgba(255,99,132,0.5)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,1)",
      },
    ],
  };
  //[
  //   {
  //     label: `Covid-19 Death in ${datasets[0].country}`,
  //     data: [`${datasets[0].cases}`, `${datasets[0].deaths}`, `${datasets[0].recovered}`],
  //     backgroundColor: "rgba(255,99,132,0.5)",
  //     borderColor: "rgba(255,99,132,0.5)",
  //     borderWidth: 1,
  //     hoverBackgroundColor: "rgba(255,99,132,1)",

  //   },
  //   {
  //     label: `Covid-19 Death in ${datasets[1].country}`,
  //     data: [`${datasets[1].cases}`, `${datasets[1].deaths}`, `${datasets[1].recovered}`],
  //     backgroundColor: "rgba(200,99,132,0.5)",
  //     borderColor: "rgba(200,99,132,0.5)",
  //     borderWidth: 1,
  //     hoverBackgroundColor: "rgba(200,99,132,1)",

  //   },
  //   {
  //     label: `Covid-19 Death in ${datasets[2].country}`,
  //     data: [`${datasets[2].cases}`, `${datasets[2].deaths}`, `${datasets[2].recovered}`],
  //     backgroundColor: "rgba(100,99,132,0.5)",
  //     borderColor: "rgba(100,99,132,0.5)",
  //     borderWidth: 1,
  //     hoverBackgroundColor: "rgba(100,99,132,1)",

  //   },
  //   {
  //     label: `Covid-19 Death in ${datasets[3].country}`,
  //     data: [`${datasets[3].cases}`, `${datasets[3].deaths}`, `${datasets[3].recovered}`],
  //     backgroundColor: "rgba(100,200,132,0.5)",
  //     borderColor: "rgba(100,200,132,0.5)",
  //     borderWidth: 1,
  //     hoverBackgroundColor: "rgba(100,200,132,1)",

  //   },
  //   {
  //     label: `Covid-19 Death in ${datasets[99].country}`,
  //     data: [`${datasets[99].cases}`, `${datasets[99].deaths}`, `${datasets[99].recovered}`],
  //     backgroundColor: "rgba(100,150,255,0.5)",
  //     borderColor: "rgba(100,150,255,0.5)",
  //     borderWidth: 1,
  //     hoverBackgroundColor: "rgba(100,150,255,1)",

  //   },
  // ],

  return <Bar data={data} />;
};
