function formatDate(dateString) {
  // MovieDB date format YYYY-MM-DD.
  const dateForm = new Date(dateString);
  //MMM DD YYYY
  const monthNum = dateForm.getUTCMonth();
  const day = dateForm.getUTCDate();
  const year = dateForm.getUTCFullYear();
  const MONTH = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${MONTH[monthNum]}, ${dateForm.getUTCDate()} ${year}`;
}

function isUpcomingDate(currentDate, dateToBeChecked) {
  let upcoming = currentDate < new Date(dateToBeChecked).getTime();
  return upcoming;
}

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export { formatDate, updateObject, isUpcomingDate };
