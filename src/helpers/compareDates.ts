export const compareDates = (a: string, b: string) => {
  const dateA = new Date(a);
  const dateB = new Date(b);

  return dateA.getTime() - dateB.getTime();
};
