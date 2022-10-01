//days 0-6, starting sunday
export const SmokehouseEvents = [
  {
    id: "Saturday-Night-Magic-Featuring-JP-Laramee-2022",
    image: "/events/JP_Laramee.jpg",
    title: "Saturday Night Magic featuring JP Laramee",
    category: "Entertainment",
    text: "",
    startDate: normalDate(2022, 1, 1),
    endDate: normalDate(2022, 12, 31),
    days: [6],
  },
  {
    id: "Dead-Mile-Dance-2022-09-30",
    image: "/events/Dead_Mile_Dance.jpeg",
    title: "Dead Mile Dance",
    category: "Live Music",
    text: "",
    startDate: normalDate(2022, 9, 30),
    endDate: normalDate(2022, 9, 30),
    days: [5],
  },
  {
    id: "Kickin-Nash-2022-10-01",
    image: "/events/Kickin_Nash.jpeg",
    title: "Kickin Nash",
    category: "Live Music",
    text: "",
    startDate: normalDate(2022, 10, 1),
    endDate: normalDate(2022, 10, 1),
    days: [6],
  },
  {
    id: "Oktoberfest-2022",
    image: "/events/Oktoberfest.jpeg",
    title: "Oktoberfest",
    category: "Entertainment",
    text: "",
    startDate: normalDate(2022, 9, 29),
    endDate: normalDate(2022, 10, 2),
    days: [0, 4, 5, 6],
  },
];

export function getUpcomingEvents(num) {
  return getUpcomingEventsInternal(SmokehouseEvents, num);
}
function getUpcomingEventsInternal(eventList, num) {
  var matchedEvents = [];
  let d = removeTime(new Date());

  const maxDate = getMaxDate(eventList);

  do {
    eventList.forEach((e) => {
      if (d >= e.startDate && d <= e.endDate && e.days.includes(d.getDay())) {
        matchedEvents.push({ ...e, instanceDate: new Date(d) });
      }
    });

    d.setDate(d.getDate() + 1);
  } while (matchedEvents.length < num && d <= maxDate);

  return matchedEvents.slice(0, num);
}

export function getEventsForMonth(year, month) {
  console.log(
    "method was called for the year: " + year + " and the month: " + month
  );
  return getEventsForMonthInternal(SmokehouseEvents, year, month);
}
function getEventsForMonthInternal(eventList, year, month) {
  var matchedEvents = [];
  let d = normalDate(year, month, 1);

  do {
    eventList.forEach((e) => {
      if (d >= e.startDate && d <= e.endDate && e.days.includes(d.getDay())) {
        matchedEvents.push({ ...e, instanceDate: new Date(d) });
      }
    });

    d.setDate(d.getDate() + 1);
  } while (d.getMonth() === month - 1);

  return matchedEvents;
}

export function getEventById(id) {
  return getEventByIdInternal(SmokehouseEvents, id);
}
function getEventByIdInternal(eventList, id) {
  return eventList.find((e) => e.id === id);
}

/// helpers
function removeTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function normalDate(year, month, day) {
  return removeTime(new Date(year, month - 1, day));
}

function getMaxDate(eventList) {
  return new Date(
    Math.max(
      ...eventList.map((e) => {
        return new Date(e.endDate);
      })
    )
  );
}
