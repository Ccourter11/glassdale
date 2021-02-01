export const Alibi = (alibi) => {
  return `
      <article class="alibiList">
        <div><h3>${alibi.name}</h3></div>
        <div>${alibi.statements}</div>
      </article>
    `;
};
