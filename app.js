
    
// Задача 1: Неотрицательные элементы
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

// Задача 2: Увеличить на 10%
function increaseNumbers() {
    let h = document.getElementById("arrayInput2").value;

    if (h.trim() === "") {
        document.getElementById("result2").innerText = "Введите числа.";
        return;
    }

    let i = [];
    let j = 0;
    for (let k = 0; k < h.length; k++) {
        if (h[k] === ',') {
            let l = h.substring(j, k);
            i.push(parseFloat(l));
            j = k + 1;
        }
    }
    let m = h.substring(j);
    i.push(parseFloat(m));

    let n = [];
    for (let o = 0; o < i.length; o++) {
        let p = i[o] * 1.1;
        n.push(p.toFixed(2));
    }

    let q = "Результат: ";
    for (let r = 0; r < n.length; r++) {
        q += n[r];
        if (r < n.length - 1) {
            q += ", ";
        }
    }
    document.getElementById("result2").innerText = q;
}
