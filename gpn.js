function calculatePercentOfNumber(x, p) {
    if (isNaN(x) || isNaN(p)) {
        return "Будь ласка, введіть коректні числа для X та P.";
    }
    if (p < 0) {
        return "Відсоток P не може бути негативним.";
    }
    return (p / 100) * x;
}

function calculateNumberFromPartAndPercent(y, p) {
    if (isNaN(y) || isNaN(p)) {
        return "Будь ласка, введіть коректні числа для Y та P.";
    }
    if (p <= 0) { 
        return "Відсоток P має бути більшим за нуль.";
    }
    return (y * 100) / p;
}

function calculateWhatPercentIsPartFromWhole(y, x) {
    if (isNaN(y) || isNaN(x)) {
        return "Будь ласка, введіть коректні числа для Y та X.";
    }
    if (x === 0) {
        return "Число X (ціле) не може бути нулем для цього розрахунку (ділення на нуль).";
    }
    return (y / x) * 100;
}