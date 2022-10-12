let uudised = [
    {
        pildiUrl: 'torn.jpeg',
        pealkiri: 'POMMUUDIS!',
        kirjeldus: ' Donec elementum eros sit amet ipsum euismod, et blandit elit vestibulum. In eu leo porttitor, ornare nibh sed, dapibus tortor.',
        viideUudisele: 'uudis1.html',
    },
    {
        pildiUrl: 'puu.jpeg',
        pealkiri: 'POMMUUDIS 2!',
        kirjeldus: ' Donec elementum eros sit amet ipsum euismod, et blandit elit vestibulum. In eu leo porttitor, ornare nibh sed, dapibus tortor.',
        viideUudisele: 'uudis2.html',
    },
    {
        pildiUrl: 'jarv.jpeg',
        pealkiri: 'POMMUUDIS 3!',
        kirjeldus: ' Donec elementum eros sit amet ipsum euismod, et blandit elit vestibulum. In eu leo porttitor, ornare nibh sed, dapibus tortor.',
        viideUudisele: 'uudis3.html',
    }
];

let uudisedElement = document.querySelector('.uudised');
for (let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];
    let pildiElement = document.createElement('img')
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);
    let pealkiriElement = document.createElement('h3')
    pealkiriElement.innerHTML = uudised[i].pealkiri;
    uudisElement.appendChild(pealkiriElement);
    let kirjeldusElement = document.createElement('kokkuvote');
    kirjeldusElement.innerHTML = uudised[i].kirjeldus;
    uudisElement.appendChild(kirjeldusElement); 
    let viideElement = document.createElement('a');
    viideElement.href = uudised[i].viideUudisele;
    viideElement.innerHTML = 'Loe edasi..'
    uudisElement.appendChild(viideElement);
    uudisedElement.appendChild(uudisElement);
    
}
 