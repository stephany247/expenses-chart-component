import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ExpensesChart() {
  const [chartData, setChartData] = useState<{ day: string; amount: number }[]>(
    []
  );

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);

  const data = {
    labels: chartData.map((item) => item.day),
    datasets: [
      {
        label: "Expenses",
        data: chartData.map((item) => item.amount),
        backgroundColor: chartData.map((item) =>
          item.day === "wed" ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
        ),
        hoverBackgroundColor: chartData.map((item) =>
          item.day === "wed"
            ? "hsla(186, 34%, 60%, 0.6)"
            : "hsla(10, 79%, 65%, 0.6)"
        ),
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 20, // Adds space above the bars
      },
    },
    scales: {
      y: {
        // Adds extra space above the highest bar
        beginAtZero: true,
        display: false,
        suggestedMin: 0,
      },
      x: {
        ticks: {
          color: "#6b7280",
          font: {
            size: 14,
          },
        },
        grid: { display: false },
        border: { display: false },
      },
    },
    onHover: (_: ChartEvent, chartElement: ActiveElement[], chart: ChartJS) => {
      const canvas = chart.canvas as HTMLCanvasElement;
      canvas.style.cursor = chartElement.length ? "pointer" : "default";
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        displayColors: false,
        yAlign: "bottom" as "bottom",
        xAlign: "center" as "center",
        bodyFont: { size: 15 },
        padding: 8,
        caretSize: 0,
        callbacks: {
          label: function (context: any) {
            return `$${context.dataset.data[context.dataIndex]}`;
          },
          title: () => "",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
