function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var sex = document.querySelector('input[name="sex"]:checked');
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var zip = document.getElementById("zip").value;
  var region = document.getElementById("region").value;

  if (!name || !email || !sex || !dob || !address || !city || !zip || !region) {
    alert("Vui lòng điền đầy đủ thông tin trong biểu mẫu.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Vui lòng cung cấp một địa chỉ email hợp lệ.");
    return false;
  }
  var dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dobRegex.test(dob)) {
    alert("Vui lòng nhập ngày sinh theo định dạng MM/DD/YYYY.");
    return false;
  }

  var zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zip)) {
    alert("Vui lòng nhập mã zip gồm 5 chữ số.");
    return false;
  }

  return true;
}

function clearForm() {

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("dob").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("region").value = "";
}