// The data I have currently lives in this array
// our data lives in OfficerProvider.js

let officers = [
  {
    id: 1,
    name: "Marques Balistreri",
  },
  {
    id: 2,
    name: "Alessia Bailey",
  },
  {
    id: 3,
    name: "Lazaro Lweschke",
  },
  {
    id: 4,
    name: "Braden Stoltenberg",
  },
  {
    id: 5,
    name: "Betty Flatley",
  },
];

// my useOfficers method returns a copy of the data
export const useOfficers = () => {
  return officers.slice();
};

// export const getOfficers = () => {
//   return fetch("https://criminals.glassdale.us/officers")
//     .then((response) => response.json())
//     .then((parsedOfficers) => {
//       console.table(parsedOfficers);
//       officers = parsedOfficers;
//     });
// };
