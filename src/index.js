import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import DateEntered from "./js/dates.js";

$(document).ready(function () {
  $("#check-day").click(function (event) {
    event.preventDefault();
    const inputDate = $("#date-entered").val();
    const dateEntered = new DateEntered(inputDate);
    const newDate = dateEntered.getDayOfWeek();
    $("#day-of-week").text(newDate);
  });
});
