let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        if(this.step > 0) {
            this.step--;
        }
        return this;
    },
    showStep: function () {
        return this.step;
    }
};
console.log(ladder.up().down().down().down().up().up().showStep());