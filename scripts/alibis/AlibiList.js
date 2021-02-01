import { Alibi } from "./Alibis.js";
import { getAlibis, useAlibis } from "./AlibiDataProvider.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("alibiButtonClick", (e) => {
  getAlibis().then(() => {
    const AlibiArr = useAlibis();
    const alibiString = AlibiArr.map((alibi) => {
      return Alibi(alibi);
    }).join("");
    contentTarget.innerHTML = alibiString;
  });
});
