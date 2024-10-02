const add = function (a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (opeartor, a, b) {
    add(a, b);
};

export { add, subtract, multiply, divide, operate };