const yearOfBirth = prompt('Введіть рік народження:');
const city = prompt('Введіть місто, в якому проживаєте:');
const favoriteSport = prompt('Введіть ваш улюблений вид спорту:');
let country;
let sportStar;
let date = new Date();
currentYear = date.getFullYear();

switch(city) {
    case 'Київ':
        country = 'столиці України';
        break;
    case 'Вашингтон':
        country = 'столиці США';
        break;
    case 'Лондон':
        country = 'столиці Британії';
        break;
    default:
        country = city;
}

switch(favoriteSport) {
    case 'Футбол':
        sportStar = 'Ліонелем Мессі';
        break;
    case 'Баскетбол':
        sportStar = 'Майклом Джорданом';
        break;
    case 'Біг':
        sportStar = 'Усейном Болтом';
        break;
    default:
        break;
}

if (yearOfBirth && city && favoriteSport) {
    alert(`${currentYear - yearOfBirth}
        Ти живеш у ${country}
        Круто! Хочеш стати ${sportStar}?`)
} else {
    switch(true){
        case yearOfBirth && city && !favoriteSport:

            alert(`${currentYear - yearOfBirth}
                   Ти живеш у ${country}
                   Шкода, що Ви не захотіли ввести свій(ю) спорт`);
            break;
        case yearOfBirth && !city && !favoriteSport:
            alert(`${currentYear - yearOfBirth}
                   Шкода, що Ви не захотіли ввести свій(ю) спорт та місто`);
            break;
        case !yearOfBirth && city && !favoriteSport:
            alert(`Ти живеш у ${country}
                   Шкода, що Ви не захотіли ввести свій(ю) рік народження та спорт`);
            break;
        case !yearOfBirth && !city && favoriteSport:
            alert(`Круто! Хочеш стати ${sportStar}?
                   Шкода, що Ви не захотіли ввести свій(ю) рік народження та місто`);
            break;
        case !yearOfBirth && city && favoriteSport:
            alert(`Ти живеш у ${country}
                   Круто! Хочеш стати ${sportStar}?
                   Шкода, що Ви не захотіли ввести свій(ю) рік народження`);
            break;
        case yearOfBirth && !city && favoriteSport:
            alert(`${currentYear - yearOfBirth}
                   Круто! Хочеш стати ${sportStar}?
                   Шкода, що Ви не захотіли ввести свій(ю) місто`);
            break;
        case !yearOfBirth && !city && !favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) рік народження, місто та спорт`);
    }
}