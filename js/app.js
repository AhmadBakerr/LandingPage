document.addEventListener('DOMContentLoaded', () => {
    const sections = [...document.querySelectorAll('section')];
    const menuList = document.getElementById('menuList');

    sections.forEach((section) => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `<a href="#${section.id}" data-id="${section.id}">${section.dataset.label}</a>`;
        menuList.appendChild(menuItem);
    });

    menuList.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.dataset.id;
            const targetSection = document.getElementById(targetId);

            window.scroll({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth',
            });
        }
    });

    window.addEventListener('scroll', () => {
        let currentSection = sections.find(section => {
            const bounds = section.getBoundingClientRect();
            return bounds.top >= 0 && bounds.top < window.innerHeight / 2;
        });

        sections.forEach(section => section.classList.remove('current'));
        if (currentSection) currentSection.classList.add('current');
    });

    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.textContent = '⬆';
    backToTop.style.display = 'none';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
