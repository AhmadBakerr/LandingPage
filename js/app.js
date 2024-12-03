document.addEventListener('DOMContentLoaded', () => {
  const pageSections = document.querySelectorAll('section');
  const navBarMenu = document.getElementById('navBarMenu');

  const menuFragment = document.createDocumentFragment();
  pageSections.forEach(pageSection => {
      const menuItem = document.createElement('li');
      const menuLink = document.createElement('a');
      menuLink.href = `#${pageSection.id}`;
      menuLink.textContent = pageSection.dataset.nav;
      menuItem.appendChild(menuLink);
      menuFragment.appendChild(menuItem);
  });
  navBarMenu.appendChild(menuFragment);

  navBarMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
          event.preventDefault();
          const targetPageSection = document.querySelector(event.target.getAttribute('href'));
          targetPageSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }
  });

  const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active-section');
          } else {
              entry.target.classList.remove('active-section');
          }
      });
  }, { threshold: 0.6 });

  pageSections.forEach(pageSection => sectionObserver.observe(pageSection));

  (() => {
      const topButton = document.createElement('button');
      topButton.textContent = '⬆';
      topButton.id = 'scrollTopButton';
      topButton.style.cssText = `
          position: fixed;
          bottom: 15px;
          right: 15px;
          display: none;
          padding: 10px 15px;
          font-size: 18px;
          background-color: #FF5722;
          color: white;
          border: none;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          z-index: 1000;
      `;
      document.body.appendChild(topButton);

      window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
              topButton.style.display = 'block';
          } else {
              topButton.style.display = 'none';
          }
      });

      topButton.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
          });
      });
  })();
});
