
/*doughnutchart*/
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Submitted Task","Pending Task"],
    datasets: [
        {
            label: "# of Votes",
            data: [70, 30],
            backgroundColor: [

                "rgba(20,10,108,10)",
                "rgba(154,125,214,100)"
            ],
            borderColor: "white",
            borderwidth: 500,
            cutout: "75%"
        }
    ]
};

export function PieChart() {
    return <Doughnut data={data} />;
}

