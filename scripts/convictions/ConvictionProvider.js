let crimes = [];

export const useConvictions = () => crimes.slice();

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedCrime) => {
      console.log(parsedCrime);
      crimes = parsedCrime;
    });
  /*
      Load database state into application state with a fetch().
      Make sure the last `then()` sets the local `convictions`
      variable to what is in the response from the API.
      Steps:
      1. Use fetch() to get data
      2. Parse response
      3. Put parsed response in convictions variable
  */
};
