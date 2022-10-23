import axios from "axios";
// import { SitePopup } from "./data.js";
import { normalDate, removeTime, getMaxDate } from "./dateUtils";
import { formatUrl } from "./urlUtils";

export const Site = Object.freeze({
  Smokehouse: 1,
  Eatery: 2,
  NewCity: 3,
});

export async function getSitePopup() {
  const event = await getFeaturedEvent();
  const data = await getUpcomingEventsInternal(event, 1);
  return data;
}

async function getData() {
  const response = await axios.get(formatUrl(`data/smokehouse/events.json`));
  return response.data;
}

async function getEventData() {
  const response = await axios.get(formatUrl(`data/smokehouse/events.json`));
  return response.data;
}

async function getFeaturedEvent() {
  const response = await axios.get(
    formatUrl(`data/smokehouse/featuredEvent.json`)
  );
  return response.data;
}

async function getSiteData(site) {
  const events = await getData();

  switch (site) {
    case Site.Smokehouse:
      return events;
    default:
      return [];
  }
}

async function getEventSiteData(site) {
  const events = await getEventData();

  switch (site) {
    case Site.Smokehouse:
      return events;
    default:
      return [];
  }
}

export async function getUpcomingEvents(site, num) {
  const siteData = await getSiteData(site);
  const data = await getUpcomingEventsInternal(siteData, num);

  return data;
}

export async function getUpcomingEventsEventDetail(site, num) {
  const siteData = await getEventSiteData(site);
  const data = await getUpcomingEventsInternal(siteData, num);

  return data;
}

async function getUpcomingEventsInternal(eventList, num) {
  var matchedEvents = [];
  let d = removeTime(new Date());

  const maxDate = getMaxDate(eventList);

  do {
    eventList.forEach((e) => {
      if (
        d >= new Date(e.startDate) &&
        d <= new Date(e.endDate) &&
        e.days.includes(d.getDay())
      ) {
        matchedEvents.push({ ...e, instanceDate: new Date(d) });
      }
    });

    d.setDate(d.getDate() + 1);
  } while (matchedEvents.length < num && d <= maxDate);

  return matchedEvents.slice(0, num);
}

export async function getEventsForMonth(site, year, month) {
  const siteData = await getSiteData(site);
  const data = await getEventsForMonthInternal(siteData, year, month);
  return data;
}
async function getEventsForMonthInternal(eventList, year, month) {
  var matchedEvents = [];
  let d = normalDate(year, month, 1);

  do {
    eventList.forEach((e) => {
      if (
        d >= new Date(e.startDate) &&
        d <= new Date(e.endDate) &&
        e.days.includes(d.getDay())
      ) {
        matchedEvents.push({ ...e, instanceDate: new Date(d) });
      }
    });

    d.setDate(d.getDate() + 1);
  } while (d.getMonth() === month - 1);

  return matchedEvents;
}

export async function getEventById(site, id) {
  const siteData = await getEventSiteData(site);
  const data = await getEventByIdInternal(siteData, id);
  return data;
}

async function getEventByIdInternal(eventList, id) {
  const event = eventList.find((e) => e.id === id);
  const upcoming = await getUpcomingEventsInternal([event], 6);
  return { ...event, upcomingDates: upcoming.map((u) => u.instanceDate) };
}
