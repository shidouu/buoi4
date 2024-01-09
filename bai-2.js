function solveQuadraticEquation() {
    // Lấy giá trị của A, B, và C từ các trường input
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);
    var c = parseFloat(document.getElementById("inputC").value);

    // Tính delta
    var delta = b * b - 4 * a * c;

    // Tính nghiệm và cập nhật kết quả vào các thẻ p tương ứng
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("delta").textContent = "Delta = " + delta;
        document.getElementById("x1").textContent = "x1 = " + x1;
        document.getElementById("x2").textContent = "x2 = " + x2;
    } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById("delta").textContent = "Delta = " + delta;
        document.getElementById("x1").textContent = "x = " + x;
        document.getElementById("x2").textContent = "";
    } else {
        document.getElementById("delta").textContent = "Delta = " + delta;
        document.getElementById("x1").textContent = "Phương trình không có nghiệm thực";
        document.getElementById("x2").textContent = "";
    }
}