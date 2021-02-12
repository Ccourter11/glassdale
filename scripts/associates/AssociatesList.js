import { useConvictions } from "../convictions/ConvicationProvider.js";
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
import { Associate } from "./Associate.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".associateContainer");

eventHub.addEventListener("associateSelected", (event) => {
  const payload = parseInt(event.detail.criminalID);

  const criminalArray = useCriminals();

  const releventCriminal = criminalArray.find(
    (element) => element.id === payload
  ).known_associates;

  let associateHTMLRepresentation = "";
  releventCriminal.forEach(
    (element) => (associateHTMLRepresentation += associate(element))
  );

  contentTarget.innerHTML = associateHTMLRepresentation;
});
