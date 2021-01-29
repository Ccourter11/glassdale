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

export const NoteForm = () => {
  render();
};

const render = () => {
  contentTarget.innerHTML = `
    <input type="date" id="note-date">
    <input type="text" id="note-author" placeholder="Author">
    <input type="text" id="note-suspect" placeholder="Suspect">
    <input type="text" id="note-text" placeholder="Notes">
    <input type="text" id="note-intuition" placeholder="Intuition">
    <button id="saveNote">Save Note</button>
  `;
};
