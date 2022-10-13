import { SitePopup, SmokehouseEvents } from "./data.js";
import { normalDate, removeTime, getMaxDate } from "./dateUtils";

export const Site = Object.freeze({
  Smokehouse: 1,
  Eatery: 2,
  NewCity: 3,
});
function getSiteData(site) {
  switch (site) {
    case Site.Smokehouse:
      return SmokehouseEvents;
    default:
      return [];
  }
}

export function getSitePopup() {
  return getUpcomingEventsInternal(SitePopup, 1);
}

export function getUpcomingEvents(site, num) {
  return getUpcomingEventsInternal(getSiteData(site), num);
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

export function getEventsForMonth(site, year, month) {
  return getEventsForMonthInternal(getSiteData(site), year, month);
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

export function getEventById(site, id) {
  return getEventByIdInternal(getSiteData(site), id);
}
function getEventByIdInternal(eventList, id) {
  const event = eventList.find((e) => e.id === id);
  const upcoming = getUpcomingEventsInternal([event], 6);
  return { ...event, upcomingDates: upcoming.map((u) => u.instanceDate) };
}
