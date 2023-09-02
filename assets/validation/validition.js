let valid = true;
function kiemTraDuLieuRong(arrInput,arrNotiInput,nhanVien) {
    let valid = true;
    for (let m = 0; m < arrInput.length; m++) {
        if (nhanVien[arrInput[m]] == '') {
            valid = valid && false;
            document.getElementById(arrNotiInput[m]).style.display = 'inline-block';
            document.getElementById(arrNotiInput[m]).innerHTML = 'Vui lòng nhập dữ liệu';
        } else {
            valid = valid && true;
            document.getElementById(arrNotiInput[m]).style.display = 'none';
            document.getElementById(arrNotiInput[m]).innerHTML = '';
        }
    }
    return valid;
}

function kiemtraMa(valueTK,idNoti) {
    let valid = true;
    if (valueTK!== '') {
        if (valueTK.length < 4 || valueTK.length > 6) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Độ dài tài khoản không được nhỏ hơn 4 và lớn hơn 6';
        }
    }
    return valid;
}

function kiemTraName(valueName,idNoti) {
    let valid = true;
    let regexChu = /^[A-Za-z]*$/;
    if (valueName !== '') {
        if (!regexChu.test(valueName)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Tên chỉ có thể là chữ';
        } 
    }
    return valid;
}

function kiemTraEmail(valueEmail,idNoti) {
    let valid = true;
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (valueEmail !== '') {
        if (!regexEmail.test(valueEmail)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Định dạng email không đúng';
        } 
    }
    return valid;
}

function kiemTraGioLam(valueGioLam,idNoti) {
    let valid = true;
    if (valueGioLam !== '') {
        if (valueGioLam < 80 || valueGioLam > 200) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Số giờ làm phải từ 80 đến 200 giờ';
        }
    }
    return valid;
}