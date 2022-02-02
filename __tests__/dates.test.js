import DateEntered from "../src/js/dates.js";

describe("DateEntered", () => {
  let myDate;
  beforeEach(() => {
    myDate = new DateEntered("2022-08-12");
  });

  it("should create a new DateEntered object", () => {
    expect(myDate.date).toEqual("2022-08-12");
  });
  it("should return the last two digits of the year", () => {
    expect(myDate.sliceLastTwo()).toEqual(22);
  });
  it("should return the current value divided by four", () => {
    expect(myDate.divideByFour()).toEqual(5);
  });
  it("should add a day to a number", () => {
    expect(myDate.addDayOfMonth()).toEqual(17);
  });
  it("should add corresponding number to a value", () => {
    expect(myDate.addMonthKeyValue()).toEqual(20);
  });
  it("should subtract one from total value if month is January or February AND current year is a leap year", () => {
    expect(myDate.leapYear()).toEqual(20);
  });
  it("should subtract one from total value if month is January or February AND current year is a leap year", () => {
    let myDate2 = new DateEntered("2020-01-12");
    expect(myDate2.leapYear()).toEqual(17);
  });
  it("should add a specific number to the total value based on the century", () => {
    expect(myDate.addCentury()).toEqual(26);
  });
  it("should add last digits of year to num", () => {
    expect(myDate.addYearEnd()).toEqual(48);
  });
  it("should divide the value by seven and return the remainder", () => {
    expect(myDate.divideBySeven()).toEqual(6);
  });
  it("should return day of week based on num", () => {
    expect(myDate.getDayOfWeek()).toEqual("Friday");
  });

  it("should return day of week based on num", () => {
    let myDate123 = new DateEntered("2019-05-20");
    expect(myDate123.getDayOfWeek()).toEqual("Monday");
  });
});
