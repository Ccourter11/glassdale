// this builds out the html for a single officer

export const Officer = (officerObj) => {
  return `

        <p class="officer">
            ${officerObj.name}
        </p>    
            
    `;
};

// the gets returned back to officer list that gets all put into a string ie into ->officersHTMLRepresentations<- += Officer(officer)
