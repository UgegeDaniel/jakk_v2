// import { milliSecsToMoment } from '../../utils';
import { ChartOptions, ChartData } from 'chart.js';
import { chartColors, chartOptions, getChartLabels } from '../../utils';
import { chartDataFxnType } from '../../types/utilityTypes';

export const barOptions: ChartOptions<'bar'> = chartOptions({
  txt: 'Student progress per subject with time',
  legend: {
    display: false,
    position: 'bottom',
  },
});

export const pieOptions: ChartOptions<'pie'> = chartOptions({
  txt: 'Student progress per subject with time',
  legend: {
    display: true,
    position: 'bottom',
  },
});

export const barData: chartDataFxnType = (userHistory) => {
  const subjects = getChartLabels(userHistory);
  return {
    labels: getChartLabels(userHistory),
    datasets: userHistory?.map((historyItem, index) => {
      return {
        label: subjects[index],
        data: subjects.map((item) => [
          historyItem.subject === item && Number(historyItem.score),
        ]),
        borderColor: historyItem.subject === subjects[index] && chartColors[index],
        backgroundColor: chartColors[subjects.indexOf(historyItem.subject)],
      };
    }) as [],
  };
};

export const pieData: chartDataFxnType = (userHistory) => {
  const chartLabels = getChartLabels(userHistory);
  const chartData = chartLabels.map((currSubject) => {
    const numSubject = chartLabels.filter((sub) => sub === currSubject);
    return (numSubject.length * 100) / chartLabels.length;
  });
  return {
    labels: getChartLabels(userHistory),
    datasets: [
      {
        label: 'Number of Tests Taken Per Subject',
        data: chartData,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  } as ChartData<'pie', (number | [number, number] | null)[], unknown>;
};
