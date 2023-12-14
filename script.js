const faqTitleEL = document.querySelectorAll('.faq__box');

faqTitleEL.forEach((faqTitle) => {

  faqTitle.addEventListener('click', () => {
    let openEl = document.querySelector('.open');
      if (openEl && openEl.hasAttribute("class")) {
        openEl.firstElementChild.lastElementChild.setAttribute("name","add-circle");
        openEl.firstElementChild.lastElementChild.classList.add("add_circle");
        openEl.removeAttribute("class");
      }
      faqTitle.parentElement.classList.add('open');
      faqTitle.lastElementChild.setAttribute("name","remove-circle");
      faqTitle.lastElementChild.classList.remove("add_circle");

   
    
  });
});


