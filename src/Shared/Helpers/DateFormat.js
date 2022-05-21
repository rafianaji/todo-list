export function convertToYMD(date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const dateOfMonth = new Date(date).getDate();

  return `${year}-${month < 10 ? "0" + month : month}-${
    dateOfMonth < 10 ? "0" + dateOfMonth : dateOfMonth
  }`;
}
