// Main.js is calling OfficerList here
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ShowAlibiButton } from "./alibis/ShowAlibiButton.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import "./notes/NoteList.js";

OfficerList();
CriminalList();
ShowAlibiButton();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNoteButton();
