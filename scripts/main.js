// Main.js is calling OfficerList here
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from "./officers/OfficerList.js";
// import { getOfficers } from "./officers/OfficerProvider.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";

OfficerList();
CriminalList();
// getOfficers();
ConvictionSelect();
