let officers = [];

// my useOfficers method returns a copy of the data
export const useOfficers = () => {
  return officers.slice();
};

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/officers")
    .then((response) => response.json())
    .then((parsedOfficers) => {
      console.table(parsedOfficers);
      officers = parsedOfficers;
    });
};
