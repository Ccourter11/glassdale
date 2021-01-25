import { useOfficers } from "./OfficerProvider.js";
import { Officer } from "./Officer.js";

const OfficersContainer = document.querySelector(".officersContainer");

export const OfficerList = () => {
  // 2nd, OfficerList will then get the data from OfficerProvider.js in the import statement
  const officerArray = useOfficers();

  let officersHTMLRepresentations = "";

  // 3rd, loop through the array of officers
  for (const officer of officerArray) {
    // 4th, the officer(officerObj) gets put into a string
    officersHTMLRepresentations += Officer(officer);

    // we append the string above the the dom
    OfficersContainer.innerHTML = `
            
        <h3>Glassdale officers</h3>
        <section class="officerList">
            ${officersHTMLRepresentations}
        </section>
        `;
  }
};
