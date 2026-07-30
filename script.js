

function showAlert() {
  alert("Welcome to Caffeine Cove ☕ Enjoy your coffee!");
}
function showAlert() {
  if (document.querySelector('.toast')) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = "Welcome to Caffeine Cove ☕ Enjoy your coffee!";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
  }, 3000);

  toast.addEventListener('transitionend', () => {
    toast.remove();
  });
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', showAlert);
});
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
const hoverImages = document.querySelectorAll('#menu img, #about img');

hoverImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.5s ease';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
const sliders = document.querySelectorAll('.slide-in');

const slideObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide-appear');
      slideObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sliders.forEach(slide => {
  slideObserver.observe(slide);
});
const contactInputs = document.querySelectorAll('#contact input, #contact textarea');

const inputObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      inputObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

contactInputs.forEach(input => {
  input.classList.add('contact-input'); 
  inputObserver.observe(input);
});

const contactFields = document.querySelectorAll('#contact input, #contact textarea');

contactFields.forEach(field => {
  field.addEventListener('mousemove', (e) => {
    const rect = field.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x - rect.width / 2) * 0.05;
    const moveY = (y - rect.height / 2) * 0.05;
    field.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
  });

  field.addEventListener('mouseleave', () => {
    field.style.transform = 'translate(0,0) scale(1)';
  });
});
const parallaxImages = document.querySelectorAll('#home img, #about img');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  parallaxImages.forEach(img => {
    img.style.transform = `translateY(${scrollPos * 0.2}px)`;
  });
});
const menuItems = document.querySelectorAll('#menu .item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = 'none';
  });
});
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(50px)';
  sec.style.transition = 'all 0.8s ease';
  observer.observe(sec);
});
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});
const footer = document.getElementById('footer');

const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      footer.classList.add('show-footer');
      footerObserver.unobserve(footer);
    }
  });
}, { threshold: 0.2 });

footerObserver.observe(footer);
footer.addEventListener('mouseenter', () => {
  footer.style.transform = 'translateY(-10px)';
  footer.style.transition = 'transform 0.3s ease';
});

footer.addEventListener('mouseleave', () => {
  footer.style.transform = 'translateY(0)';
});


