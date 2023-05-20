// import { milliSecsToMoment } from '../../utils';
import { ChartOptions, ChartData } from 'chart.js';
import { chartColors, chartOptions, getChartLabels } from '../../utils';

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

export const barData = (userHistory: {name: string, year: string, time_of_test: string, score: string}[]): ChartData => {
  const subjects = getChartLabels(userHistory);
  return {
    labels: getChartLabels(userHistory),
    datasets: userHistory?.map((historyItem, index) => {
      return {
        label: subjects[index],
        data: subjects.map((item) => [
          historyItem.name === item && Number(historyItem.score),
        ]),
        borderColor:
          historyItem.name === subjects[index] && chartColors[index],
        backgroundColor: chartColors[subjects.indexOf(historyItem.name)],
      };
    }) as [],
  };
};

export const pieData = (userHistory: {name: string, year: string, time_of_test: string, score: string}[]): ChartData => {
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
  } as ChartData<"pie", (number |  [number, number] | null)[], unknown>;
};
