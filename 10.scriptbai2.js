function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var mobile = document.getElementById("mobile").value;
  var city = document.getElementById("city").value;
  var expertise = document.querySelectorAll('.expertise:checked');

  if (!name.trim() || !email.trim() || !gender || !mobile.trim() || !city.trim() || expertise.length === 0) {
    alert("Vui lòng điền đầy đủ thông tin trong biểu mẫu và chọn ít nhất một lĩnh vực chuyên môn.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Vui lòng cung cấp một địa chỉ email hợp lệ.");
    return false;
  }

  return true;
}