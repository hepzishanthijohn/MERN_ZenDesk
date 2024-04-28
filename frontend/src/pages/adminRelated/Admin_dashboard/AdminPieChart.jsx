
/*doughnutchart*/
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Male", "Female"],
    datasets: [
        {
            label: "# of Votes",
            data: [40, 60],
            backgroundColor: [

                "rgba(280,1,138,1)",
                "rgba(13,108,204,10)"
            ],
            borderColor: "white",
            borderwidth: 500,
            cutout: "75%"
        }
    ]
};

export function AdminPieChart() {
    return <Doughnut data={data} />;
}

