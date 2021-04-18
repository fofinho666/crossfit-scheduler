function WeekDays(weekDays) {
  return weekDays
    .map((day) => parseInt(day))
    .sort()
    .reduce((acc, curDay, i, days) => {
      if (i == 0) {
        acc = `${curDay}`
      }
      else if (days[i - 1] == curDay - 1) {
        const alreadyARange = (acc.charAt(acc.length - 2) === "-")
        if (alreadyARange) {
          acc = acc.slice(0, -1) + `${curDay}`
        }
        else {
          acc += `-${curDay}`
        }
      }
      else {
        acc += `,${curDay}`
      }
      return acc
    }, "")
}

export const weeklyCron = (weekDays, hours, minutes, seconds) => {
  const formatedWeekDays = WeekDays(weekDays)
  return `${seconds} ${minutes} ${hours} * * ${formatedWeekDays}`
}

