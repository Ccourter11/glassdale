// this builds out the html for a single officer

export const Officer = (officerObj) => {
  return `

        <p class="officer">
            ${officerObj.name}
        </p>    
            
    `;
};

// then gets returned back to Officer List.js that gets all put into a string ie into ->officersHTMLRepresentations<- += Officer(officer)
