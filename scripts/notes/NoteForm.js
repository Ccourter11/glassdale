import { useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");
// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note
    const newNote = {
      date: `${document.getElementById("note-date").value}`,
      author: `${document.getElementById("note-author").value}`,
      suspect: `${document.getElementById("note-suspect").value}`,
      text: `${document.getElementById("note-text").value}`,
      intuition: `${document.getElementById("note-intuition").value}`,
    };

    // Change API state and application state
    saveNote(newNote);
  }
});

const renderNote = () => {
  const criminalArray = useCriminals();
  contentTarget.innerHTML = `
  
  <form action="">
  <fieldset>
    <label for="note-author"> Author </label>
    <input type="text" id="note-author" placeholder="Author">
  </fieldset>
  <fieldset>
    <label for="note-text"> Case Note Entry </label>
    
    <select id="noteForm__criminal" class="criminalSelect">
    ${criminalArray
      .map(
        (criminal) => `<option value="${criminal.id}">${criminal.name}</option>`
      )
      .join("")}
    </select>
    </fieldset>
    
    <fieldset>
    <label for="note-intuition"> Intuition </label>
    <input type="text" id="note-intuition" placeholder="Intuition">
    </fieldset>
    

    <fieldset>
        <label for="note-text"> Case Note Entry </label>
        <textarea type="textare" name="noteText" id="note-text" class="formOption"></textarea>
    </fieldset>
    <button id="saveNote">Save Note</button>
    </form>
  `;
};

export const NoteForm = () => {
  renderNote();
};
