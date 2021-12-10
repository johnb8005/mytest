export const getNoOfDays = (
  year: number,
  month: number
): { blankdaysArray: number[]; daysArray: number[] } => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // find where to start calendar day of week
  const dayOfWeek = new Date(year, month).getDay();
  const blankdaysArray = [];
  for (var i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i);
  }

  const daysArray = [];
  for (var i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return { blankdaysArray, daysArray };
};

export const toISODate = (d: Date) => d.toISOString().slice(0, 10);

export const formatOutDefault = (date: Date): string => {
  const s = toISODate(date);

  const [y, m, d] = s.split(/-/g);

  return [d, m, y].join("/");
};
