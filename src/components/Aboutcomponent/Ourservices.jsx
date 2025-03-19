import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, Title, Tooltip, Legend);

const Pagination2 = () => {
  const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'bar',
        label: 'Sales 2024 (in USD)',
        data: [300, 400, 500, 200, 800, 300, 600],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

    const baroptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Sales Data',
        },
      },
    };

    const doughnutdata = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        },
      ],
    };

    const doughnutoptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          },

        }
    };

  return (
    <div className=' w-full max-w-[1240px] grid grid-cols-2 py-8 mx-auto  '>
       <div>
          <Bar data={bardata} options={baroptions} />
        </div>

      <div className='flex w-90 h-90 justify-center'>
        <Doughnut data={doughnutdata} options={doughnutoptions}/>
      </div>
    </div>
  )
}

export default Pagination2