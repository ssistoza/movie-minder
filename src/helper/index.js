function formatDate(dateString) {
  // MovieDB date format YYYY-MM-DD.
  const dateForm = new Date(dateString);
  //MMM DD YYYY
  const formattedDate = dateForm.toDateString();
  const correctDateNumber = dateForm.getUTCDate();

  let splittedDate = formattedDate.split(' ');

  return `${splittedDate[1]}, ${correctDateNumber} ${splittedDate[3]}`;
}

export { formatDate };
