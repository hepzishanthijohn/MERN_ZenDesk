
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart"
        }
    }
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export const data = {
    labels,
    datasets: [
        {
            label: "User Activity",
            data: [65, 40, 60, 30, 20, 50],
            backgroundColor: "rgba(50,180,204,100)",
            barPercentage: 0.4
        },
        {
            label: "Visitor",
            data: [30, 20, 16, 10, 25, 8],
            backgroundColor: "rgba(208,100,308,100)",
            barPercentage: 0.4
        },

    ]
};

export function AdminBarChart() {
    return <Bar options={options} data={data} />;
}