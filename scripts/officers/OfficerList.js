import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { Officer } from "./Officer.js";
import { useConvictions } from "./../convictions/ConvictionProvider.js";
import { useCriminals } from "../criminals/CriminalProvider.js";
const eventHub = document.querySelector(".container");

const officersContainer = document.querySelector(".officersContainer");

const renderToDom = (officerCollection) => {
  let officersHTMLRepresentations = "";

  for (const officer of officerCollection) {
    // 4th, the officer(officerObj) gets put into a string
    officersHTMLRepresentations += Officer(officer);
  }

  // we append the string above the the dom
  officersContainer.innerHTML = `
    <h3>Glassdale officers</h3>
      <section class="officerList">
          ${officersHTMLRepresentations}
      </section>`;
};

export const OfficerList = () => {
  // 2nd, OfficerList will then get the data from OfficerProvider.js in the import statement
  getOfficers().then(() => {
    const officerArray = useOfficers();

    renderToDom(officerArray);
  });
};

eventHub.addEventListener("crimeChosen", (crimeChosenEvent) => {
  if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
    // debugger
    /* 
      We have the the id of the conviction that the user selected from the drop down (crimeChosenEvent.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
    */

    // Get a copy of the array of convictions from the data provider
    const convictionsArray = useConvictions();

    // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
    const chosenConvictionObject = convictionsArray.find((convictionObj) => {
      // console.log("currently checking", convictionObj)
      return (
        convictionObj.id ===
        parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
      );
    });
    // debugger
    console.log(chosenConvictionObject.name);

    /*
        Filter the criminals application state down to the people that committed the crime
    */

    // Get a copy of the array of criminals from the data provider
    const criminalsArray = useCriminals();

    /*
      Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
    */
    //  debugger
    const filteredCriminalsArray = criminalsArray.filter(
      (criminalObj) => criminalObj.conviction === chosenConvictionObject.name
    );

    /*
        Then invoke render() and pass the filtered collection as
        an argument
    */
    renderToDom(filteredCriminalsArray);
  }
});

//     // 3rd, loop through the array of officers
//     for (const officer of officerArray) {
//       // 4th, the officer(officerObj) gets put into a string
//       officersHTMLRepresentations += Officer(officer);

//       // we append the string above the the dom
//       OfficersContainer.innerHTML = `

//         <h3>Glassdale officers</h3>
//         <section class="officerList">
//             ${officersHTMLRepresentations}
//         </section>
//         `;
//     }
//   });
// };
