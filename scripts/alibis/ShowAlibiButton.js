const contentTarget = document.querySelector(".alibiListButton");
const eventHub = document.querySelector(".container");

export const ShowAlibiButton = () => {
  contentTarget.innerHTML = "<button id='showAlibis'>Alibi Statement:</button";
};

eventHub.addEventListener("click", (e) => {
  if (e.target.id === "showAlibi") {
    if (e.target.innerHTML === "Alibi Statements") {
      const customEvent = new CustomEvent("alibiButtonClick");
      eventHub.dispatchEvent(customEvent);

      e.target.innerHTML = "Criminal List";
    } else if (e.target.innerHTML === "Criminal List") {
      const customEvent = new CustomEvent("criminalButtonClick");
      eventHub.dispatchEvent(customEvent);

      e.target.innerHTML = "Alibi Statements";
    }
  }
});
