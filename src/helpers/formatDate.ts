import { DateTime } from "luxon";

export const formatDate = (
  date: Date | string | undefined,
  format: string = "dd LLL yyyy"
) => {
  if (!date) {
    return undefined;
  }

  let dateTime: DateTime;

  if (date instanceof Date) {
    dateTime = DateTime.fromJSDate(date);
  } else if (typeof date === "string") {
    dateTime = DateTime.fromISO(date);
  } else {
    return undefined;
  }

  return dateTime.setLocale("es").toFormat(format).replace(/\./g, "");
};
