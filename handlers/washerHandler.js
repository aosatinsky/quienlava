"use strict";
const moment = require("moment-timezone");
const xml = require("xml");

const washers = [
  ["Cesar", "Gabriela"],
  ["Gabriela", "Agustin"],
  ["Agustin", "Andres"],
  ["Andres", "Iara"],
  ["Iara", "Matias"],
  ["Matias", "Sharon"],
  ["Sharon", "Cesar"],
];

const getDesignatedWasher = () => {
  const washingCalendar = new Array(365).fill(washers).flat();
  const today = moment().tz("America/Buenos_Aires");
  const todayWashers = washingCalendar[today.dayOfYear()];
  const washer = today.hours() < 15 ? todayWashers[0] : todayWashers[1];
  return washer;
};

const getFeed = () => {
  const link = "https://quienlava.herokuapp.com/";
  const xmlObject = {
    rss: [
      {
        _attr: {
          version: "2.0",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
        },
      },
      {
        channel: [
          {
            "atom:link": {
              _attr: {
                href: link,
                rel: "self",
                type: "application/rss+xml",
              },
            },
          },
          { title: "Quien lava hoy" },
          { link: link },
          { description: "A quien le toca lavar hoy" },
          { language: "es-ar" },
          {
            item: [
              { title: "Hoy le toca lavar a" },
              { pubDate: moment().tz("America/Buenos_Aires").format() },
              { link: link },
              { guid: link },
              {
                description:
                  "Hoy le toca lavar los platos a " + getDesignatedWasher(),
              },
            ],
          },
        ],
      },
    ],
  };
  return '<?xml version="1.0" encoding="UTF-8"?>' + xml(xmlObject);
};

module.exports = {
  getDesignatedWasher,
  getFeed,
};
