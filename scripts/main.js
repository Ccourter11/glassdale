// Main.js is calling OfficerList here
import { NoteForm } from "./notes/NoteForm.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from "./officers/OfficerList.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";

OfficerList();
CriminalList();

ConvictionSelect();
getConvictions();
OfficerSelect();
NoteForm();

ShowNoteButton();
