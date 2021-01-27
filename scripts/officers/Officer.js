// this builds out the html for a single officer

export const Officer = (officerObj) => {
  return `
    <article class="officer">
        
        <p class="officerList">
            ${officerObj.name}
        </p>    
     </article>       
    `;
};

// then gets returned back to Officer List.js that gets all put into a string ie into ->officersHTMLRepresentations<- += Officer(officer)
