export const formatDates = (date: string) => {
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const partsDates = date.split("-");
  const day = partsDates[2];
  const month = months[parseInt(partsDates[1], 10) - 1];
  const year = partsDates[0];

  return `${day} ${month} ${year}`;
};
