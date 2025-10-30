
    
function runTask() {
    let jj = document.getElementById("arrayInput").value;

    if (jj === "") {
        document.getElementById("result").innerText = "Пожалуйста, введите числа.";
        return;
    }

    let qq = [];
    let aa = 0;
    for (let i = 0; i < jj.length; i++) {
        if (jj[i] === ',') {
            let bb = jj.substring(aa, i);
            qq.push(parseInt(bb));
            aa = i + 1;
        }
    }
    let cc = jj.substring(aa);
    qq.push(parseInt(cc));

    let dd = [];
    for (let i = 0; i < qq.length; i++) {
        if (qq[i] >= 0) {
            dd.push(qq[i]);
        }
    }

    if (dd.length === 0) {
        document.getElementById("result").innerText = "Нет неотрицательных элементов.";
    } else {
        let ee = "Неотрицательные элементы: ";
        for (let i = 0; i < dd.length; i++) {
            ee += dd[i];
            if (i < dd.length - 1) {
                ee += ", ";
            }
        }
        document.getElementById("result").innerText = ee;
    }
}

function increaseNumbers() {
    let ff = document.getElementById("arrayInput2").value;

    if (ff.trim() === "") {
        document.getElementById("result2").innerText = "Введите числа.";
        return;
    }

    let gg = [];
    let hh = 0;
    for (let i = 0; i < ff.length; i++) {
        if (ff[i] === ',') {
            let ii = ff.substring(hh, i);
            gg.push(parseFloat(ii));
            hh = i + 1;
        }
    }
    let jj = ff.substring(hh);
    gg.push(parseFloat(jj));

    let kk = [];
    for (let i = 0; i < gg.length; i++) {
        let ll = gg[i] * 1.1;
        kk.push(ll.toFixed(2));
    }

    let mm = "Результат: ";
    for (let i = 0; i < kk.length; i++) {
        mm += kk[i];
        if (i < kk.length - 1) {
            mm += ", ";
        }
    }
    document.getElementById("result2").innerText = mm;
}
