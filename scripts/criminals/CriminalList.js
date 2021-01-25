import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const CriminalsContinainer = document.querySelector(".criminalsContainer");

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminalArray = useCriminals();

    let criminalsHTMLRepresentations = "";
    // loop through the array of criminals
    for (const criminal of criminalArray) {
      criminalsHTMLRepresentations += Criminal(criminal);

      CriminalsContinainer.innerHTML = `


    <h3>Glassdale officers</h3>
    <section class="criminalList">
        ${criminalsHTMLRepresentations}
        ${criminalsHTMLRepresentations}
        ${criminalsHTMLRepresentations}
        ${criminalsHTMLRepresentations}
    </section>
        
        
        `;
    }
  });
};
