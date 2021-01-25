let criminals = [];

export const useCriminals = () => criminals.slice();

export const getCriminals = () => {
  /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
  return fetch("https://criminals.glassdale.us/criminals");
};

export const useOfficers = () => {
  return officers.slice();
};

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then((response) => response.json())
    .then((parsedOfficers) => {
      console.table(parsedOfficers);
      officers = parsedOfficers;
    });
};
