const provideAString = prompt('Enter a string:');

if (provideAString == null || provideAString == "") {
    alert('String was not provided');
} else {
    const provideSymToRemove = prompt('Type characters you want to remove. If multiple, separate with ","');
    if (provideSymToRemove == null || provideSymToRemove == "") {
        console.log(provideAString);
    } else {
        if (provideSymToRemove.split("").length > provideAString.split("").length) {
            console.log("Number of symbols you provided is bigger than string length");
        } else {
            const removeSymbols = provideAString.toLowerCase().split("").filter(function(char) {
                return !provideSymToRemove.toLowerCase().split(",").includes(char);
            }).join("");
            console.log(removeSymbols);
        }
    }
}
