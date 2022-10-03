export function normalDate(year, month, day) {
  return removeTime(new Date(year, month - 1, day));
}

export function removeTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getMaxDate(eventList) {
  return new Date(
    Math.max(
      ...eventList.map((e) => {
        return new Date(e.endDate);
      })
    )
  );
}