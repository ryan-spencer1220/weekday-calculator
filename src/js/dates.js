export default class DateEntered {
  constructor(date) {
    this.date = date;
  }
  sliceLastTwo() {
    let splitDate = this.date.split("");
    return parseInt(splitDate[2].concat(splitDate[3]));
  }
  divideByFour() {
    let lastTwo = this.sliceLastTwo();
    return Math.floor(lastTwo / 4);
  }
  addDayOfMonth() {
    let splitDate = this.date.split("");
    return this.divideByFour() + parseInt(splitDate[8].concat(splitDate[9]));
  }

  addMonthKeyValue() {
    let splitDate = this.date.split("");
    let month = splitDate[5].concat(splitDate[6]);

    switch (month) {
      case "01":
        return this.addDayOfMonth() + 1;
      case "02":
        return this.addDayOfMonth() + 4;
      case "03":
        return this.addDayOfMonth() + 4;
      case "04":
        return this.addDayOfMonth() + 0;
      case "05":
        return this.addDayOfMonth() + 2;
      case "06":
        return this.addDayOfMonth() + 5;
      case "07":
        return this.addDayOfMonth() + 0;
      case "08":
        return this.addDayOfMonth() + 3;
      case "09":
        return this.addDayOfMonth() + 6;
      case "10":
        return this.addDayOfMonth() + 1;
      case "11":
        return this.addDayOfMonth() + 4;
      case "12":
        return this.addDayOfMonth() + 6;
      default:
        return false;
    }
  }

  leapYear() {
    let splitDate = this.date.split("");
    let month = splitDate[5].concat(splitDate[6]);
    if ((month === "01" || month === "02") && this.sliceLastTwo() % 4 === 0) {
      return this.addMonthKeyValue() - 1;
    } else {
      return this.addMonthKeyValue();
    }
  }

  addCentury() {
    let year = this.date.slice(0, 2);

    switch (year) {
      case "17":
        return this.leapYear() + 4;
      case "18":
        return this.leapYear() + 2;
      case "19":
        return this.leapYear();
      case "20":
        return this.leapYear() + 6;
      default:
        return false;
    }
  }

  addYearEnd() {
    return this.addCentury() + this.sliceLastTwo();
  }

  divideBySeven() {
    return this.addYearEnd() % 7;
  }

  getDayOfWeek() {
    switch (this.divideBySeven()) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 0:
        return "Saturday";
      default:
        return false;
    }
  }
}
