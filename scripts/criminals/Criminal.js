export const Criminal = (criminalObj) => {
  return `
  <section class="criminal">

          <h2 class="criminal__">${criminalObj.name}</h2>
          <div>Age: ${criminalObj.age}</div>
          <div>Crime: ${criminalObj.conviction}</div>
          <div>Term Start: ${new Date(
            criminalObj.incarceration.start
          ).toLocaleDateString("en-US")}</div>
          <div>Term End: ${new Date(
            criminalObj.incarceration.end
          ).toLocaleDateString("en-US")}</div>
          <button id="associates--${criminalObj.id}"> Associate Alibis</button>

  </section>
  `;
};

// export const Criminal = (criminalObj) => {
//   return `
//       <article class="criminal">
//           <h4>${criminalObj.name}</h4>
//           <p>Age: ${criminalObj.age}</p>
//           <p>Crime: ${criminalObj.conviction}</p>
//           <p>Term start: ${new Date(
//             criminalObj.incarceration.start
//           ).toLocaleDateString("en-US")}</p>
//           <p>Term end: ${new Date(
//             criminalObj.incarceration.end
//           ).toLocaleDateString("en-US")}</p>
//       </article>
//   `;
// };
