//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  // RELATIONSHIPS CONCEPT JS

  let button = document.querySelector('.bio button');
  let bio_sections = document.querySelectorAll('.bio .more');

  /* index to iterate */
  let bio_index = 0;

  //trigger to check for button clicks
  button.addEventListener('click', function() {
    // ensures JS errors as otherwise elements going to be called that does not exist
    if (bio_index < bio_sections.length) {
      // makes the section visible
      bio_sections[bio_index].classList.add('d-block');
      //increases the index onclick
      bio_index++;
    }
  })
  
  // END RELATIONSHIPS CONCEPT JS
})
