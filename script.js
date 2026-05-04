const sections = document.querySelectorAll('section');
const liens = document.querySelectorAll('.navbar a');

console.log(sections);
console.log(liens);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            
            // Retire .active de tous les liens
            liens.forEach(lien => lien.classList.remove('active'));
            
            // Ajoute .active sur le bon lien
            const lienActif = document.querySelector(`a[href="#${id}"]`);
            if (lienActif) lienActif.classList.add('active');
        }
    });
});
sections.forEach(section => observer.observe(section));

/* Souris */

const curseur = document.querySelector('.curseur');

document.addEventListener('mousemove', (e) => {
    curseur.style.left = `${e.clientX - 25}px`;
    curseur.style.top = `${e.clientY - 25}px`;
})