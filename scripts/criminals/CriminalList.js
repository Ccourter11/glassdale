import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const CriminalsContinainer = document.querySelector(".criminalsContainer");

export const CriminalList = () => {
  const criminalArray = useCriminals();

  let criminalsHTMLRepresentations = "";

  for (const criminal of criminalArray) {
    criminalsHTMLRepresentations += Criminal(criminal);

    CriminalsContinainer.innerHTML = `

        
        
        `;
  }
};
