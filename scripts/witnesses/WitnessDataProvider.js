let witnessCollection = [];

export const useWitnesses = () => {
  return witnessCollection.slice();
};

// Where the data is coming from

export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses")
    .then((response) => response.json())
    .then((parsedWitnesses) => {
      witnessCollection = parsedWitnesses;
    });
};
