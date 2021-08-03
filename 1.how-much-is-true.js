// Create a function which returns the number of true values there are in an array.
const countTrue = (array = []) => {
  const convertedToBoolean = array.map((elem) => !!elem);
  console.log("Boolean array: ", convertedToBoolean);
  return convertedToBoolean.filter((elem) => elem === true).length;
};
