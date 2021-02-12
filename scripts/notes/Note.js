export const NoteHTMLConverter = (noteObject, criminalObj) => {
  return `
        <section class="note">
        <div class="note__suspect">Note about: ${criminalObj.name}</div>
        <div class="note__text">Note: ${noteObject.note}</div>
        <div class="note__auther">Officer Name: ${noteObject.auther}</div>
        <div class="note__timestamp">Timestamp: ${new Date(
          noteObject.date
        ).toLocaleDateString("en-US")}</div>
    </section>

    `;
};

// <div class="note__text">${noteObject.text}</div>
//     <div class="note__suspect">Title: ${noteObject.suspect}</div>
//     <div class="note__author">Author: ${noteObject.author}</div>
//     <div class="note__date">Date: ${new Date(
//       noteObject.date
//     ).toLocaleDateString("en-US")}</div>
