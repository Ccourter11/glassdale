// import { CriminalList } from "./CriminalList.js";

// export const Criminal = (criminalObj) => {
//   return `
//   <section class="criminalCard" id="${criminalObj}>

// <div class="criminal__name">${criminalObj.name}</div>
// <div class="criminal__age">${criminalObj.age}</div>
// <div class="criminal__conviction">${criminalObj.conviction}</div>
// <div class="criminal__termStart">${new Date(
//     criminalObj.incarceration.start
//   ).toLocaleDateString("en-US")}</div>
//   <div class="criminal__termEnd">${new Date(
//     criminalObj.incarceration.end
//   ).toLocaleDateString("en-US")}</div>

// </section>

//         `;
// };

// mine above

// scotts below

export const Criminal = (criminalObj) => {
  return `
  <section id="criminal-${criminalObj.id}" class="criminal__card">
      <div class="col">
          <h2 class="criminal__">${criminalObj.name}</h2>
          <div>Age: ${criminalObj.age}</div>
          <div>Crime: ${criminalObj.conviction}</div>
          <div>Term Start: ${new Date(
            criminalObj.incarceration.start
          ).toLocaleDateString("en-US")}</div>
          <div>Term End: ${new Date(
            criminalObj.incarceration.end
          ).toLocaleDateString("en-US")}</div>
          <button id="associates--${criminalObj.id}">Associate Alibis</button>
      </div>
  </section>
  `;
};
