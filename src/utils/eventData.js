//days 0-6, starting sunday
export const SmokehouseEvents = [
  {
    id: "Magical-Fridays-with-JP-Laramee-2022-11-31",
    image: "/events/JP_Laramee.jpg",
    title: "Magical Fridays with JP Laramee",
    category: "Entertainment",
    text: "",
    startDate: removeTime(new Date(2022, 0, 1)),
    endDate: removeTime(new Date(2022, 11, 31)),
    days: [5],
  },
  {
    id: "Dead-Mile-Dance-2022-8-30",
    image: "/events/Dead_Mile_Dance.jpeg",
    title: "Dead Mile Dance",
    category: "Live Music",
    text: "",
    startDate: removeTime(new Date(2022, 8, 30)),
    endDate: removeTime(new Date(2022, 8, 30)),
    days: [5],
  },
  {
    id: "Kickin-Nash-2022-9-1",
    image: "/events/Kickin_Nash.jpeg",
    title: "Kickin Nash",
    category: "Live Music",
    text: "",
    startDate: removeTime(new Date(2022, 9, 1)),
    endDate: removeTime(new Date(2022, 9, 1)),
    days: [6],
  },
  {
    id: "Oktoberfest-2022-8-29",
    image: "/events/Oktoberfest.jpeg",
    title: "Oktoberfest",
    category: "Entertainment",
    text: "",
    startDate: removeTime(new Date(2022, 8, 29)),
    endDate: removeTime(new Date(2022, 9, 2)),
    days: [0, 4, 5, 6],
  },
];

function removeTime(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getUpcomingEvents(num) {
  return getUpcomingEventsInternal(SmokehouseEvents, num);
}
function getUpcomingEventsInternal(eventList, num) {
  var matchedEvents = [];
  let d = removeTime(new Date());

  const maxDate = new Date(
    Math.max(
      ...eventList.map((e) => {
        return new Date(e.endDate);
      })
    )
  );

  do {
    eventList.forEach((e) => {
      if (d >= e.startDate && d <= e.endDate && e.days.includes(d.getDay())) {
        matchedEvents.push({ date: new Date(d), event: e });
      }
    });

    d.setDate(d.getDate() + 1);
  } while (matchedEvents.length < num && d <= maxDate);

  return matchedEvents.slice(0, num);
}

export function getEventsForMonth(year, month) {
  return getEventsForMonthInternal(SmokehouseEvents, year, month);
}
function getEventsForMonthInternal(eventList, year, month) {
  var matchedEvents = [];
  let d = removeTime(new Date(year, month, 1));

  do {
    eventList.forEach((e) => {
      if (d >= e.startDate && d <= e.endDate && e.days.includes(d.getDay())) {
        matchedEvents.push({ date: new Date(d), event: e });
      }
    });

    d.setDate(d.getDate() + 1);
  } while (d.getMonth() === month);

  return matchedEvents;
}
