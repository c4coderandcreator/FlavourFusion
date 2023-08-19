const trackReveal=document.getElementById('reveal-track-section');
const trackSection=document.getElementById('track-container-sam');
const closeTrack=document.getElementById('close-track-section');

trackReveal.addEventListener('click',()=>{
    trackSection.classList.add('active-sam');
});

closeTrack.addEventListener('click',()=>{
    trackSection.classList.remove('active-sam');
});
