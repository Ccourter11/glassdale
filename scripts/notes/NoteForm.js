import { saveNote } from "./NoteDataProvider.js";
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

const render = () => {
  contentTarget.innerHTML = `
    
    <form action="" method="get" class="noteForm">
    <fieldset>
    <h3>Make a Note</h3>
        <label for="note-date">Date:</label>
        <input type="date" id="note-date">

        <label for="note-suspect">Suspect:</label>
        <input type="text" id="note-suspect">

        <label for="note-text">Note: </label>
        <input type ="text" id="note-text"> 

    </fieldset>
    <button type="submit" value="submit" id="saveNote">Save Note</button>
</form>`;
};

export const NoteForm = () => {
  render();
};

// Handle browser-generated click event in component
// const eventHub = document.querySelector(".container");
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    clickEvent.preventDefault();
    // Make a new object representation of a note
    const newNote = {
      // key value pairs here
      date: document.getElementById("note-date").value,
      suspect: document.getElementById("note-suspect").value,
      note: document.getElementById("note-text").value,
    };

    // Change API state and application state
    saveNote(newNote);
  }
});

// const NoteForm = () => {
//   // rest of the code here
// };
