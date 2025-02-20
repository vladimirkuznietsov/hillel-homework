const enterUrlBtn = document.getElementById('enter-btn');
const openUrlBtn = document.getElementById('open-btn');
const urlDisplay = document.getElementById('url-section');
let urlAddress = '';
let clicksOnEnterBtnCounter = false;


enterUrlBtn.addEventListener('click', () => {
    clicksOnEnterBtnCounter = true;
    const enterUrlPrompt = prompt('Please enter your URL');

    if((enterUrlPrompt.includes('https://') || enterUrlPrompt.includes('http://')) && enterUrlPrompt.includes('.')) {
        urlDisplay.textContent = `Your link: ${enterUrlPrompt}`;
        urlDisplay.style.color = 'black';
        urlAddress = enterUrlPrompt;

        openUrlBtn.addEventListener('click', () => {
            window.open(urlAddress);
        });
    } else {
        urlDisplay.textContent = 'Please enter a valid address';
        urlDisplay.style.color = 'red';
    };
});
