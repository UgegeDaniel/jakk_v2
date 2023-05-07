// import { milliSecsToMoment } from '../../utils';
import { chartColors } from "../../utils";

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
        borderColor: historyItem.name === subjects[index] && chartColors[index],
        backgroundColor: chartColors[subjects.indexOf(historyItem.name)],
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
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  }
};

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

