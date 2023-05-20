import moment from 'moment';
import { ChartOptions } from 'chart.js';

export const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
export const milliSecsToMoment = (ms: string) => moment(new Date(Number(ms)).toISOString()).format('llll');

export const chartColors = [
    '#FFEAD2', '#ACB1D6', '#B9F3E4', '#DBDFEA',
    '#BFCCB5', '#7C96AB', '#B7B7B7', '#EDC6B1',
    '#E8A0BF', '#BA90C6', '#C0DBEA', '#B3C99C',
    '#FFD966', '#F4B183', '#DFA67B', '#804674',
    '#B9F3E4',
];

type chartOptionsArgType ={
    txt: string,
    legend: {
        display: boolean,
        position: "left" | "top" | "right" | "bottom" | "center" | "chartArea"
    }
}
export const chartOptions = ({ txt, legend }: chartOptionsArgType): ChartOptions => {
    return {
        responsive: true,
        plugins: {
            legend: {
                display: legend.display,
                position: legend.position,
            },
            title: {
                display: true,
                text: txt
            }
        }
    }
}

export const getChartLabels = (userHistory: {name: string}[]) => (
    userHistory?.length > 0
        ? Array.from(new Set(userHistory.map((historyItem) => historyItem.name)))
        : []
)