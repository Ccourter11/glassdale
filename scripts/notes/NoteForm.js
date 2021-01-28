import { saveNote } from "./NoteDataProvider.js";
const contentTarget = document.querySelector(".noteFormContainer");

const render = () => {
  contentTarget.innerHTML = `
    <form action="" method="get" class="noteForm">
    <fieldset>
    <h3>Make a Note</h3>
        <label for="dateOf">Entry Date</label>
        <input type="date" name="note-date" id="dateOf"></input>

        <label for="suspect">Suspect : </label>
        <input type="text" name="note-suspect" id="suspect"></input>

        <label for="noteEntry">Notes</label>
        <textarea id="note-text" name="noteEntry" row="5" cols="13" placeholder="Notes about case..."></textarea>

    </fieldset>
    <button type="submit" value="submit" id="saveNote">Save Note</button>
</form>`;
};

export const NoteForm = () => {
  render();
};

// Handle browser-generated click event in component
const eventHub = document.querySelector(".container");
eventHub.addEventListener("click", (clickEvent) => {
  clickEvent.preventDefault();
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note
    const newNote = {
      date: document.getElementById("dateOf").value,
      suspect: document.getElementById("suspect").value,
      subject: document.getElementById("note-text").value,
      note: document.getElementById(""),
    };

    // Change API state and application state
    saveNote(newNote);
  }
});

// const NoteForm = () => {
//   // rest of the code here
// };
