const background = document.getElementById("bruh-bg");
background.style.position = 'fixed';
background.style.zIndex = 5;
background.style.width = '100vw';
background.style.height = '100vh';
background.style.backgroundColor = 'black';
background.style.display = 'none';

const bruhTitle = document.getElementById("bruh-title");
bruhTitle.style.position = 'relative';
bruhTitle.style.zIndex = 10;
bruhTitle.style.display = 'inline-block';

bruhTitle.addEventListener('mouseover', () => {
    background.style.display = 'block';
    bruhTitle.style.color = 'red';
})
bruhTitle.addEventListener('mouseleave', () => {
    background.style.display = 'none';
    bruhTitle.style.color = 'black';
})
