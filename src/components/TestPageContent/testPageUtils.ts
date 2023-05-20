const onTestStartOptionStyle = (chosen: boolean): string => {
  if (chosen) return 'text-white bg-primary';
  if (!chosen) return 'text-primary bg-white';
  return 'text-white';
};
  
const onTestEndOptionStyle = (
  answer: string,
  options: string[],
  index: number,
  chosen: boolean
): string => {
  if (answer === options[index].toLowerCase())
    return 'text-white bg-success border-success';
  if (answer !== options[index].toLowerCase() && chosen)
    return 'bg-danger border-danger text-white';
  return '';
};
  
export const optionStyle = (
  testSubmitted: boolean,
  answer: string,
  options: string[],
  index: number,
  chosen: boolean
): string => {
  return testSubmitted
    ? onTestEndOptionStyle(answer, options, index, chosen)
    : onTestStartOptionStyle(chosen);
};
  