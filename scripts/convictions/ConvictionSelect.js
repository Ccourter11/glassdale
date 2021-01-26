/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element aka container where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime");

// call ConvictionSelect will go through 3 steps
export const ConvictionSelect = () => {
  // Trigger fetching the API data and loading it into application state
  getConvictions().then(() => {
    // step 1 : get the data ^
    // Get all convictions from application state
    const convictions = useConvictions();
    // step 2 : get a copy of the data
    render(convictions);
    // step 3 : render our copy to the DOM
  });
};

const render = (convictionsCollection) => {
  /*
      Use interpolation here to invoke the map() method on
      the convictionsCollection to generate the option elements.
      Look back at the example provided above.
  */
  contentTarget.innerHTML = `
  
      <select class="dropdown" id="crimeSelect">
          <option value="0">Please select a crime...</option>
          ${convictionsCollection.map((convictionsObj) => {
            const newArray = convictionsObj.name;
            return `<option>${newArray}</option>`;
          })}
      </select>
  `;
};
// an option within an option
