document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');
  
    sections.forEach(section => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
      navbar.appendChild(li);
    });
  
    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < 300) {
          section.classList.add('active-section');
        } else {
          section.classList.remove('active-section');
        }
      });
    });
  });
  const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  padding: 10px;
  background: #536DFE;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
