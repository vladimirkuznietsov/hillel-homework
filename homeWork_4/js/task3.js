const yearOfBirth = prompt('Введіть рік народження:');
const city = prompt('Введіть місто, в якому проживаєте:');
const favoriteSport = prompt('Введіть ваш улюблений вид спорту:');
let country;
let sportStar;

switch(city) {
    case 'Київ':
        country = 'України';
        break;
    case 'Вашингтон':
        country = 'США';
        break;
    case 'Лондон':
        country = 'Британії';
        break;
    default:
        break;
}

switch(favoriteSport) {
    case 'Футбол':
        sportStar = 'Ліонелем Мессі';
    case 'Баскетбол':
        sportStar = 'Майклом Джорданом';
    case 'Біг':
        sportStar = 'Усейном Болтом';
    default:
        break;
}

if (yearOfBirth && city && favoriteSport) {
    alert(`${yearOfBirth}
        \nТи живеш у столиці ${country}
        \nКруто! Хочеш стати ${sportStar}?`)
} else {
    switch(true){
        case yearOfBirth && city && !favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) спорт`);
            break;
        case yearOfBirth && !city && !favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) спорт та місто`);
            break;
        case !yearOfBirth && city && !favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) рік народження та спорт`);
            break;
        case !yearOfBirth && !city && favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) рік народження та місто`);
            break;
        case !yearOfBirth && city && favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) рік народження`);
            break;
        case yearOfBirth && !city && favoriteSport:
            alert(`Шкода, що Ви не захотіли ввести свій(ю) місто`);
            break;
    }
}