import * as U from "./utils";

class Calendar {
  month: number;
  year: number;
  blankdays: number[];
  no_of_days: number[];

  constructor(observedDate: Date) {
    this.month = observedDate.getMonth();
    this.year = observedDate.getFullYear();

    const { blankdaysArray, daysArray } = U.getNoOfDays(this.year, this.month);

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  isToday = (date: number): boolean => {
    const today = new Date();
    const d = new Date(this.year, this.month, date);

    return today.toDateString() === d.toDateString();
  };

  getDateValue = (date: number) => {
    const selectedDate = new Date(this.year, this.month, date);
    //this.datepickerValue = selectedDate.toDateString();

    const refDate =
      selectedDate.getFullYear() +
      "-" +
      ("0" + (selectedDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + selectedDate.getDate()).slice(-2);

    return refDate;
  };
}

export default Calendar;
