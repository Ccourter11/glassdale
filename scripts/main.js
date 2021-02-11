import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
getCriminals().then(NoteForm);
import { ShowWitnessButton } from "./witnesses/ShowWitnessesButton.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import "./notes/NoteList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";

OfficerList();
CriminalList();
ConvictionSelect();
OfficerSelect();
getCriminals();
NoteForm();
ShowNoteButton();
ShowWitnessButton();
