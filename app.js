function runTask() {
    let a = document.getElementById("arrayInput").value;

    if (a === "") {
        document.getElementById("result").innerText = "Пожалуйста, введите числа.";
        return;
    }

    let b = [];
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === ',') {
            let d = a.substring(c, i);
            b.push(parseInt(d));
            c = i + 1;
        }
    }
    let e = a.substring(c);
    b.push(parseInt(e));

    let f = [];
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= 0) {
            f.push(b[i]);
        }
    }

    if (f.length === 0) {
        document.getElementById("result").innerText = "Нет неотрицательных элементов.";
    } else {
        let g = "Неотрицательные элементы: ";
        for (let i = 0; i < f.length; i++) {
            g += f[i];
            if (i < f.length - 1) {
                g += ", ";
            }
        }
        document.getElementById("result").innerText = g;
    }
}
