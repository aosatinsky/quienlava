"use strict";
const moment = require("moment-timezone");

const washers = [
  ["Cesar", "Gabriela"],
  ["Gabriela", "Agustin"],
  ["Agustin", "Andres"],
  ["Andres", "Iara"],
  ["Iara", "Matias"],
  ["Matias", "Sharon"],
  ["Sharon", "Cesar"],
];

const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const getDesignatedWasher = async () => {
  const washingCalendar = new Array(365).fill(washers).flat();
  const today = new Date(
    Date.parse(moment().tz("America/Buenos_Aires").format())
  );
  const todayWashers = washingCalendar[dayOfYear(today)];
  return today.getHours() < 15 ? todayWashers[0] : todayWashers[1];
};

module.exports = {
  getDesignatedWasher,
};
