const registrationForm = document.getElementById('registrationForm')
if (registrationForm) {
    registrationForm.addEventListener('submit', validateForm)
}

function validateForm(event) {
    // giữ trang web k tải tại ,ngăn chặn  giửi biêu mẫu nếu nó là false
    event.preventDefault();
    // Lấy giá trị từ các trường nhập liệu
    const fullName = document.getElementById('fullName').value;
    const userName = document.getElementById('userName').value;
    const passWord = document.getElementById('passWord').value;
    const rePassword = document.getElementById('rePassword').value;
    const email = document.getElementById('email').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;
    const genderRadios = document.querySelectorAll('input[name="gender"]'); // lấy all các radio button của giới tính 
    const address = document.getElementById('address').value;

    const fullNameError = document.getElementById('fullNameError');
    const userNameError = document.getElementById('userNameError');
    const passWordError = document.getElementById('passWordError');
    const rePasswordError = document.getElementById('rePasswordError');
    const emailError = document.getElementById('emailError');
    const birthdayError = document.getElementById('birthdayError');
    const phoneError = document.getElementById('phoneError');
    const genderError = document.getElementById('genderError');
    const addressError = document.getElementById('addressError');


    // Xóa thông báo lỗi cũ
    fullNameError.innerHTML = '';
    userNameError.innerHTML = '';
    passWordError.innerHTML = '';
    rePasswordError.innerHTML = '';
    emailError.innerHTML = '';
    birthdayError.innerHTML = '';
    phoneError.innerHTML = '';
    genderError.innerHTML = '';
    addressError.innerHTML = ''

    // Verify FullName
    if (fullName.trim() === '') {
        fullNameError.innerHTML = 'FullName không được để trống.';
        return false;
    }
    if (fullName.length > 200) {
        fullNameError.innerHTML = 'FullName không được vượt quá 200 ký tự.';
        return false;
    }

    // Verify UserName
    if (userName.trim() === '') {
        userNameError.innerHTML = 'UserName không được để trống';
        return false;
    }
    const userNameRegex = /^[a-zA-Z0-9_]+$/;
    if (userName.length > 200) {
        userNameError.innerHTML = 'UserName không được vượt quá 200 ký tự.';
        return false;
    }
    if (!userName.match(userNameRegex)) {
        userNameError.innerHTML = 'UserName không hợp lệ. Chỉ chấp nhận các ký tự từ a-z, A-Z, số 0-9 và gạch dưới "_".';
        return false;
    }
    //Verify passWord
    if (passWord.trim() === '') {
        passWordError.innerHTML = 'PassWord không được để trống';
        return false;
    }
    if (passWord.length < 5) {
        passWordError.innerHTML = 'PassWord  không được nhỏ hơn 5 kí tự '
        return false;
    }
    if (passWord.length > 51) {
        passWordError.innerHTML = 'PassWord  không được lớn hơn 51 kí tự '
        return false;
    }
    //Verify password
    if (rePassword !== passWord) {
        rePasswordError.innerHTML = 'Nhập lại Password không khớp';
        return false;
    }
    //Verify email
    if (email.trim() === '') {
        emailError.innerHTML = 'Email không được để trống';
        return false;
    }

    const emailRegex = "^[a-zA-Z0-9]+@gmail\.com$";


    if (email.length > 101) {
        emailError.innerHTML = 'Email không vượt quá 100 kí tự';
        return false;
    }
    if (!email.match(emailRegex)) {
        emailError.innerHTML = 'Email không đúng định dạng';
        return false;
    }

    //Veryfy birthday

    if (birthday.trim() === '') {
        birthdayError.innerHTML = 'Birthday không được để trống';
        return false;
    }

    const birthRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (!birthday.match(birthRegex)) {
        birthdayError.innerHTML = 'Ngày sinh không đúng định dạng. Vui lòng nhập theo định dạng dd/mm/yyyy.';
        return false;
    }

    const birthdayParts = birthday.match(birthRegex).slice(1).map(part => parseInt(part, 10));
    // Mã tháng bắt đầu từ 0  đến 11
    const birthdayDate = new Date(birthdayParts[2], birthdayParts[1] - 1, birthdayParts[0]);
    const currentDate = new Date();
    if (birthdayDate >= currentDate) {
        birthdayError.innerHTML = 'Ngày sinh không được lớn hơn ngày hiện tại !';
        return false;
    }
    // Veryfy  phone
    const phoneRegex = /^(?:\+84|0)\d{9,10}$/;

    if (phone.trim() === '') {
        phoneError.innerHTML = 'SĐT không được để trống';
        return false;
    }
    if (!phone.match(phoneRegex)) {
        phoneError.innerHTML = 'Bắt đầu bằng +84 hoăc 0,(9,10 số tiếp theo)';
        return false;
    }
    //Veryfy gender
    let genderChecked = false;
    for (const genderRadio of genderRadios) {
        if (genderRadio.checked) {
            genderChecked = true;
            break;
        }
    }
    if (!genderChecked) {
        genderError.innerHTML = 'Vui lòng chọn giới tính.';
        return false;
    }
    //Veryfy address
    if (address.trim() === '') {
        addressError.innerHTML = 'Địa chỉ không được để trống.';
        return false;
    }

    if (address.length > 500) {
        addressError.innerHTML = 'Địa chỉ không được vượt quá 500 ký tự.';
        return false;
    }

    return true;
}
