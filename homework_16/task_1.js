class Student {
    #name;
    #surname;
    #yearOfBirth;

    constructor(name, surname, yearOfBirth) {
        this.#name = name;
        this.#surname = surname;
        this.#yearOfBirth = yearOfBirth;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#yearOfBirth;
    }

    avgGrade() {
        if(this.grades.length > 0) {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
        } else {
            return 0;
        }
    }

    present() {
        const index = this.attendance.indexOf(null);

        if(index != -1) {
            this.attendance[index] = true;
        } else {
            console.log('Attendance for this month is completed')
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);

        if(index != -1) {
            this.attendance[index] = false;
        } else {
            console.log('Attendance for this month is completed')
        }
    }

    summary() {
        const grade = this.avgGrade();
        const attended = this.attendance.filter((lecture) => lecture === true).length;
        const totalClasses = this.attendance.filter((lecture) => lecture !== null).length;
        const avgAttendance = totalClasses > 0 ? attended / totalClasses : 0;
        console.log(avgAttendance);

        if(grade > 90 && avgAttendance > 0.9) {
            return 'Молодець!';
        } else if(grade < 90 && avgAttendance < 0.9) {
            return 'Редиска!';
        } else {
            return 'Добре, але можна краще';
        }


    }
}

// Below is a long list of examples

let Mark = new Student('John', 'Malkovic', 2002);
let Susy = new Student('Susy', 'Brown', 2003);
let Abby = new Student('Abby', 'Kaos', 2001);

console.log(Mark.age);
console.log(Susy.age);
console.log(Abby.age);
console.log(Mark.summary());

Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.absent();
Susy.present();
Susy.grades.push(2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 50, 50) // 26th entry. Error message is shown in console log

console.log(Susy.summary());

Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);
Abby.present();
Abby.grades.push(100);

console.log(Abby.summary());
