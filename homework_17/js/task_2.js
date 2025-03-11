class Coach {
  #name;
  #specialization;
  #rating;

  constructor(name, specialization, rating) {
    this.#name = name;
    this.#specialization = specialization;
    this.#rating = rating;
  }

  displayInfo() {
    console.log(
      `Coach: ${this.#name}, Specialization: ${this.#specialization}, Rating: ${
        this.#rating
      }`
    );
  }
}

const coach1 = new Coach('James May', 'Yoga', 9.7);
const coach2 = new Coach('Richard Hammond', 'Fitness', 5.5);

coach1.displayInfo();
coach2.displayInfo();
