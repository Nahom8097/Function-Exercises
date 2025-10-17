let calculator = {
    read() {
        this.a = +prompt("Enter the first number:", 0);
        this.b = +prompt("Enter the second Number:", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert("sum = " + calculator.sum());
alert("multiplication = " + calculator.mul());