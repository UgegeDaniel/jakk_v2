// import { milliSecsToMoment } from '../../utils';
const gradientBar1 = 'rgba(218, 140, 255, 1)';
const gradientBar2 = 'rgba(54, 215, 232, 1)';
const gradientBar3 = 'rgba(255, 205, 150, 1)';



const colors = [
  gradientBar1,
  gradientBar2,
  gradientBar3,
]

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Student progress per subject with time'
    }
  }
}

export const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Distribution of subjects'
    }
  }
}

export const barData = (userHistory) => {
  const subjects = Array.from(new Set(userHistory.map((historyItem) => historyItem.name)));
  return {
    labels: subjects,
    datasets: userHistory.map((historyItem, index) => {
      return {
        label: subjects[index],
        data: subjects.map((item, index) =>
          [historyItem.name === item && historyItem.score],
        ),
        borderColor: historyItem.name === subjects[index] && colors[index],
        backgroundColor: colors[subjects.indexOf(historyItem.name)],
      }
    })
  }
}

export const pieData = (userHistory) => {
  const chartLabels = Array.from(new Set(userHistory.map((historyItem) => historyItem.name)));
  const chartData = chartLabels.map(currSubject => {
    const numSubject = chartLabels.filter(sub => sub === currSubject)
    return numSubject.length * 100 / chartLabels.length
  })
  return {
    labels: chartLabels,
    datasets: [
      {
        label: "Number of Tests Taken Per Subject",
        data: chartData,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }
};

