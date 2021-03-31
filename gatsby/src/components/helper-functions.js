// Given a Date object returns the years and months since them.
// Function is lazy and doesn't include days.
export const getYearsMonths = (startDate) => {
  const today = new Date();
  const start = new Date(startDate);
  let stringOut = '';
  const yearsInMonths =
    (today.getFullYear() - start.getFullYear()) * 12 +
    today.getMonth() -
    start.getMonth();
  const totalYears = Math.floor(yearsInMonths / 12);
  const totalMonths =
    totalYears > 0 ? yearsInMonths - totalYears * 12 : yearsInMonths;
  if (totalMonths > 0) {
    //Drop the the months if there are none
    stringOut =
      yearsInMonths < 12
        ? `${yearsInMonths} MONTH${yearsInMonths > 1 ? 'S' : ''}` //Add the S if it's plural
        : `${totalYears} YEAR${totalYears > 1 ? 'S' : ''} ${totalMonths} MONTH${
            yearsInMonths > 1 ? 'S' : ''
          }`;
  } else {
    stringOut =
      yearsInMonths < 12
        ? `${yearsInMonths} MONTH${yearsInMonths > 1 ? 'S' : ''}`
        : `${totalYears} YEAR${totalYears > 1 ? 'S' : ''}`;
  }
  return stringOut;
};
