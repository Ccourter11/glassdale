import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { Officer } from "./Officer.js";

const OfficersContainer = document.querySelector(".officersContainer");

export const OfficerList = () => {
  // 2nd, OfficerList will then get the data from OfficerProvider.js in the import statement
  getOfficers().then(() => {
    //   get the data from the api, parse the data through json, once parsed put it into the array, once into the array now give me a copy of that array through the useOfficers method ie slice
    const officerArray = useOfficers();

    //   when a function returns a promise, you can chain a .then to it

    let officersHTMLRepresentations = "";

    // 3rd, loop through the array of officers
    for (const officer of officerArray) {
      // 4th, the officer(officerObj) gets put into a string
      officersHTMLRepresentations += Officer(officer);

      // we append the string above the the dom
      OfficersContainer.innerHTML = `
            
        <h3>Katie stinky so sexy hehe</h3>
        <section class="officerList">
            ${officersHTMLRepresentations}
        </section>
        `;
    }
  });
};
