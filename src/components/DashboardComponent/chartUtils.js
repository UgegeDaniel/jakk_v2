// import { milliSecsToMoment } from '../../utils';
import { chartColors, chartOptions, getChartLabels } from "../../utils";

export const barOptions = chartOptions({
  txt: 'Student progress per subject with time',
  legend: {
    display: false
  }
})

export const pieOptions = chartOptions({
  txt: 'Student progress per subject with time',
  legend: {
    display: true,
    position: 'bottom',
  }
})

export const barData = (userHistory) => {
  const subjects = getChartLabels(userHistory);
  return {
    labels: getChartLabels(userHistory),
    datasets: userHistory?.map((historyItem, index) => {
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
  const chartLabels = getChartLabels(userHistory)
  const chartData = chartLabels.map(currSubject => {
    const numSubject = chartLabels.filter(sub => sub === currSubject)
    return numSubject.length * 100 / chartLabels.length
  })
  return {
    labels: getChartLabels(userHistory),
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

