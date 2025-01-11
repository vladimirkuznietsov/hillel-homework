let date = new Date();
let currentYear = date.getFullYear();
let yearOfBirth = prompt('Введіть рік народження:');

if (Number(yearOfBirth) > currentYear || Number(yearOfBirth) < 1900 || isNaN(Number(yearOfBirth))) {
    do {
        alert('Введіть корректний рік');
        yearOfBirth = prompt('Введіть рік народження:');
    } while (Number(yearOfBirth) > currentYear || Number(yearOfBirth) < 1900 || isNaN(Number(yearOfBirth)));
}


const city = prompt('Введіть місто, в якому проживаєте:');
let youLiveInText;

switch (city) {
    case 'Київ':
        youLiveInText = 'столиці України';
        break;
    case 'Вашингтон':
        youLiveInText = 'столиці США';
        break;
    case 'Лондон':
        youLiveInText = 'столиці Британії';
        break;
    default:
        youLiveInText = `місті ${city}`;
        break;
}

const favoriteSport = prompt('Введіть ваш улюблений вид спорту:');
let sportText;


switch (favoriteSport) {
    case 'Футбол':
        sportText = 'Круто! Хочеш стати Ліонелем Мессі?';
        break;
    case 'Баскетбол':
        sportText = 'Круто! Хочеш стати Майклом Джорданом?';
        break;
    case 'Біг':
        sportText = 'Круто! Хочеш стати Усейном Болтом?';
        break;
    default:
        sportText = `${favoriteSport} це круто!`;
        break;
}

if (yearOfBirth && city && favoriteSport) {
    alert(`${currentYear - yearOfBirth}
                Ти живеш у ${youLiveInText}
                ${sportText}`)
} else if (yearOfBirth && city && !favoriteSport) {
    alert(`${currentYear - yearOfBirth}
                Ти живеш у ${youLiveInText}
                Шкода, що Ви не захотіли ввести свій(ю) спорт`);
} else if (yearOfBirth && !city && favoriteSport) {
    alert(`${currentYear - yearOfBirth}
                ${sportText}
                Шкода, що Ви не захотіли ввести свій(ю) місто`);
} else if (!yearOfBirth && city && favoriteSport) {
    alert(`Ти живеш у ${youLiveInText}
                ${sportText}
                Шкода, що Ви не захотіли ввести свій(ю) рік народження`);
} else if (yearOfBirth && !city && !favoriteSport) {
    alert(`${currentYear - yearOfBirth}
                Шкода, що Ви не захотіли ввести свій(ю) спорт та місто`);
} else if (!yearOfBirth && city && !favoriteSport) {
    alert(`Ти живеш у ${youLiveInText}
                Шкода, що Ви не захотіли ввести свій(ю) рік народження та спорт`);
} else if (!yearOfBirth && !city && favoriteSport) {
    alert(`Круто! Хочеш стати ${sportText}?
                Шкода, що Ви не захотіли ввести свій(ю) рік народження та місто`);
} else {
    alert(`Шкода, що Ви не захотіли ввести свій(ю) рік народження, місто та спорт`);
}


