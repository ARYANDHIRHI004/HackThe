import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const DetailsCard = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(0,0,0,0,0.9)",
        borderColor: "rgba(0,0,0,0,0.9)",
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

  return (
    <div className="  bg-red-500 p-5 rounded-2xl">
      <h1>DETAILS</h1>
      <div>
        <p>Stars Visibility: 12%</p>
        <p>Stars Visibility: 12%</p>
        <p>Stars Visibility: 12%</p>
      </div>
      <div className=" h-1 bg-black my-5"></div>
      <div>
        <h2>VISIBILITY TREND</h2>
        {/* <div className=" sm:columns-2 mx-5"> */}
        <div className="  bg-[#18181B] p-10 rounded-2xl shadow-xl flex items-center justify-center h-120">
          {" "}
          {/* Example for responsiveness */}
          <Line height={500} width={800} data={chartData} />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default DetailsCard;
