const navBtns = document.querySelectorAll('.nav-btn');
  const sections = ['about','projects','contact'].map(id => document.getElementById(id));

  navBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.getElementById(btn.dataset.target).scrollIntoView({behavior:'smooth'});
    });
  });

  const setActive = () => {
    let current = sections[0].id;
    sections.forEach(sec=>{
      const rect = sec.getBoundingClientRect();
      if(rect.top <= window.innerHeight*0.4) current = sec.id;
    });
    navBtns.forEach(b=> b.classList.toggle('active', b.dataset.target === current));
  };
  window.addEventListener('scroll', setActive);
  setActive();