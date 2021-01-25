import { CriminalList } from "./CriminalList.js";

export const Criminal = (criminalObj) => {
  return `  
  <section class="criminalCard" id="${criminalObj}>
    

<div class="criminal__name">${criminalObj.name}</div>    
<div class="criminal__age">${criminalObj.age}</div> 
<div class="criminal__conviction">${criminalObj.conviction}</div> 
<div class="criminal__termStart">${new Date(
    criminalObj.incarceration.start
  ).toLocaleDateString("en-US")}</div> 
  <div class="criminal__termEnd">${new Date(
    criminalObj.incarceration.end
  ).toLocaleDateString("en-US")}</div> 
       

</section>
    
        `;
};
