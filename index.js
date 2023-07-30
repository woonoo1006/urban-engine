let text = '';

const googleSearchText = 'https://www.google.com/search?q=';

const idDom = document.getElementById('search');

idDom.addEventListener('input', (e) => {
    text = e.target.value;
});

idDom.addEventListener('keyup', (e) => {
    if(e.key === 'Enter')
    {
        window.location.href = googleSearchText + text;        
    }
});


