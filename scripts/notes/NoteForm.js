const contentTarget = document.querySelector(".noteFormContainer");

const render = () => {
  contentTarget.innerHTML = `
    <form action="" method="get" class="noteForm">
    <fieldset>
        <label for="dateOf">Entry Date</label>
        <input type="date" name="dateOf" id="dateOf"></input>

        <label for="suspect">Suspect : </label>
        <input type="text" name="suspect" id="suspect"></input>

        <label for="noteEntry">Notes</label>
        <textarea id="noteEntry" name="noteEntry" row="5" cols="13" placeholder="Notes about case..."></textarea>

    </fieldset>
    <button type="submit" value="submit" id="saveNote">Save Note</button>
</form>`;
};

export const NoteForm = () => {
  render();
};
