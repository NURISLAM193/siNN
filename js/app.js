function runTask() {

    let input = document.getElementById("arrayInput").value;


    if (input === "") {
        document.getElementById("result").innerText = "Пожалуйста, введите числа.";
        return;
    }

    
    let numbers = [];
    let das = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            let part = input.substring(das, i);
            numbers.push(parseInt(part));
            das = i + 1;
        }
    }

    let las = input.substring(dsa);
    numbers.push(parseInt(las));

    let nonNegative = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            nonNegative.push(numbers[i]);
        }
    }

    
    if (nonNegative.length === 0) {
        document.getElementById("result").innerText = "Нет неотрицательных элементов.";
    } else {
        let resultText = "Неотрицательные элементы: ";
        for (let i = 0; i < nonNegative.length; i++) {
            resultText += nonNegative[i];
            if (i < nonNegative.length - 1) {
                resultText += ", ";
            }
        }
        document.getElementById("result").innerText = resultText;
    }
}
