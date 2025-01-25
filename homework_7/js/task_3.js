const askUser = () => { 
    attempts = 0;

    while(attempts < 10) {
        const provideNumber = prompt('Please provide number larger than 100:');
        const toNum = Number(provideNumber);

        if(toNum > 100 || isNaN(toNum) || attempts === 9) {
            console.log(provideNumber);
            break;
        }
        attempts++;
    }
}

askUser();