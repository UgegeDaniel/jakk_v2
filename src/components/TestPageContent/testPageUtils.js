const onTestStartOptionStyle = (chosen) => {
    if (chosen) return 'text-white bg-primary'
    if (!chosen) return 'text-primary bg-white'
    return 'text-white'
}

const onTestEndOptionStyle = (answer, options, index, chosen) => {
    if (answer === options[index].toLowerCase()) return 'text-white bg-success border-success'
    if (answer !== options[index].toLowerCase() && chosen) return 'bg-danger border-danger text-white'
}

export const optionStyle = (testSubmitted, answer, options, index, chosen) => testSubmitted
    ? onTestEndOptionStyle(answer, options, index, chosen)
    : onTestStartOptionStyle(chosen)

