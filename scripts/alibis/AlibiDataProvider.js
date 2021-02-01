let alibiCollection = [];

export const useAlibis = () => {
  return alibiCollection.slice();
};

export const getAlibis = () => {
  return fetch("https://criminals.glassdale.us/alibis")
    .then((response) => response.json())
    .then((parsedWitnesses) => {
      witnessCollection = parsedWitnesses;
    });
};
