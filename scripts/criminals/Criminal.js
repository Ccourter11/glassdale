const eventHub = document.querySelector(".container");

export const Criminal = (criminalObj) => {
  return `
      <article class="criminal">
          <h4>${criminalObj.name}</h4>
          <p>Age: ${criminalObj.age}</p>
          <p>Crime: ${criminalObj.conviction}</p>
          <p>Term start: ${new Date(
            criminalObj.incarceration.start
          ).toLocaleDateString("en-US")}</p>
          <p>Term end: ${new Date(
            criminalObj.incarceration.end
          ).toLocaleDateString("en-US")}</p>
          <button id="associates--${criminalObj.id}">Associate Alibis</button>
      </article>
  `;
};

eventHub.addEventListener("click", (e) => {
  if (e.target.id.startsWith("associates--")) {
    const [prefix, criminal] = e.target.id.split("--");

    const customEvent = new CustomEvent("associatesClicked", {
      detail: {
        criminalId: `${criminalObj.id}`,
      },
    });

    eventHub.dispatchEvent(customEvent);
  }
});
