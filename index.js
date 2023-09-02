import { ListPerson } from "./assets/js/ListPerson.js";
import { Person } from "./assets/js/Person.js";
import { SinhVien } from "./assets/js/Person.js";
import { NhanVien } from "./assets/js/Person.js";
import { KhachHang } from "./assets/js/Person.js";

let person = new ListPerson();
person.layDuLieuTuLocal();

document.getElementById('doiTuong').onchange = function () {
    let valueDT = document.getElementById('doiTuong').value;
    // console.log(valueDT)
    switch (valueDT) {
        case "SV":
            document.getElementById('formSV').style.display = "block";
            document.getElementById('formNV').style.display = "none";
            document.getElementById('formKH').style.display = "none";
            break;
        case "NV":
            document.getElementById('formSV').style.display = "none";
            document.getElementById('formNV').style.display = "block";
            document.getElementById('formKH').style.display = "none";
            break;
        case "KH":
            document.getElementById('formSV').style.display = "none";
            document.getElementById('formNV').style.display = "none";
            document.getElementById('formKH').style.display = "block";
            break;
        default:
            document.getElementById('formSV').style.display = "none";
            document.getElementById('formNV').style.display = "none";
            document.getElementById('formKH').style.display = "none";
    }
}

let arrInputSV = ['ma', 'hoTen', 'email', 'diaChi', 'doiTuong', 'diemToan', 'diemLy', 'diemHoa'];
let arrInputNV = ['ma', 'hoTen', 'email', 'diaChi', 'doiTuong', 'soNgayLam', 'luongNgay'];
let arrInputKH = ['ma', 'hoTen', 'email', 'diaChi', 'doiTuong', 'congTy', 'hoaDon', 'danhGia'];

let arrNotiInputSV = ['notiMa', 'notiHoTen', 'notiEmail', 'notiDiaChi', 'notiDoiTuong', 'notiDiemToan', 'notiDiemLy', 'notiDiemHoa'];
let arrNotiInputNV = ['notiMa', 'notiHoTen', 'notiEmail', 'notiDiaChi', 'notiDoiTuong', 'notiSoNgayLam', 'notiLuongNgay'];
let arrNotiInputKH = ['notiMa', 'notiHoTen', 'notiEmail', 'notiDiaChi', 'notiDoiTuong', 'notiCongTy', 'notiHoaDon', 'notiDanhGia'];


document.getElementById('form').onsubmit = () => {
    event.preventDefault();

    let valueDT = document.getElementById('doiTuong').value;

    let sinhVien = new SinhVien();
    let nhanVien = new NhanVien();
    let khachHang = new KhachHang();

    if (valueDT == 'SV') {
        for (let i = 0; i < arrInputSV.length; i++) {
            let valueSV = document.getElementById(arrInputSV[i]).value;
            console.log(valueSV);
            sinhVien[arrInputSV[i]] = valueSV;
        }

        let valid = true;
        valid = valid & kiemTraDuLieuRong(arrInputSV, arrNotiInputSV, sinhVien) & kiemtraMa(sinhVien.ma, 'notiMa') & kiemTraName(sinhVien.hoTen, 'notiHoTen') & kiemTraEmail(sinhVien.email, 'notiEmail');

        if (valid) {
            person.themPerson(sinhVien);
        }

        // console.log(sinhVien[arrInputSV[0]])
        // console.log(sinhVien);
        // console.log(person);
    } else if (valueDT == 'NV') {
        for (let z = 0; z < arrInputNV.length; z++) {
            let valueNV = document.getElementById(arrInputNV[z]).value;
            nhanVien[arrInputNV[z]] = valueNV;
        }

        let valid = true;
        valid = valid & kiemTraDuLieuRong(arrInputNV, arrNotiInputNV, nhanVien) & kiemTraGioLam(nhanVien.soNgayLam, 'notiSoNgayLam');

        if (valid) {
            person.themPerson(nhanVien);
        }

    } else {
        for (let k = 0; k < arrInputKH.length; k++) {
            let valueKH = document.getElementById(arrInputKH[k]).value;
            khachHang[arrInputKH[k]] = valueKH;
        }

        let valid = true;
        valid = valid & kiemTraDuLieuRong(arrInputKH, arrNotiInputKH, khachHang);

        if (valid) {
            person.themPerson(khachHang);
        }
        // console.log(arrInputKH[5]);
        // console.log(person);
    }
}

window.xoaPerson = function (id) {
    person.xoaPerson(id);
};

window.layThongTin = function (id) {
    console.log(id);
    let personNew = person.layThongTin(id);
    console.log(personNew.doiTuong)

    if (personNew.doiTuong == "SV") {
        document.getElementById('formSV').style.display = "block";
        document.getElementById('formNV').style.display = "none";
        document.getElementById('formKH').style.display = "none";
        for (let i = 0; i < arrInputSV.length; i++) {
            document.getElementById(arrInputSV[i]).value = personNew[arrInputSV[i]];
        }
    } else if (personNew.doiTuong == "NV") {
        document.getElementById('formSV').style.display = "none";
        document.getElementById('formNV').style.display = "block";
        document.getElementById('formKH').style.display = "none";
        for (let z = 0; z < arrInputNV.length; z++) {
            document.getElementById(arrInputNV[z]).value = personNew[arrInputNV[z]];
        }
    } else {
        document.getElementById('formSV').style.display = "none";
        document.getElementById('formNV').style.display = "none";
        document.getElementById('formKH').style.display = "block";
        for (let k = 0; k < arrInputKH.length; k++) {
            document.getElementById(arrInputKH[k]).value = personNew[arrInputKH[k]];
        }
    }

    document.getElementById('btnCapNhat').style.display = "inline-block";
    document.getElementById('ma').readOnly = true;
};

// cập nhật thông tin
document.getElementById('btnCapNhat').onclick = () => {
    let valueDT = document.getElementById('doiTuong').value;

    let sinhVien = new SinhVien();
    let nhanVien = new NhanVien();
    let khachHang = new KhachHang();

    if (valueDT == 'SV') {
        for (let i = 0; i < arrInputSV.length; i++) {
            let valueSV = document.getElementById(arrInputSV[i]).value;
            sinhVien[arrInputSV[i]] = valueSV;
        }
        person.capNhatThongTin(sinhVien);

    } else if (valueDT == 'NV') {
        for (let z = 0; z < arrInputNV.length; z++) {
            let valueNV = document.getElementById(arrInputNV[z]).value;
            nhanVien[arrInputNV[z]] = valueNV;
        }
        person.capNhatThongTin(nhanVien);

    } else {
        for (let k = 0; k < arrInputKH.length; k++) {
            let valueKH = document.getElementById(arrInputKH[k]).value;
            khachHang[arrInputKH[k]] = valueKH;
        }
        person.capNhatThongTin(khachHang);
    }
    document.getElementById('btnCapNhat').style.display = "none";
    document.getElementById('ma').readOnly = false;
    document.getElementById('form').reset();
}

// sắp xếp theo tên 
window.sapXepTheoTen = () => {
    // console.log(person.arrPerson);
    let personSort = person.arrPerson;
    // console.log(personSort);
    personSort.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
    person.renderListPerson();
}

window.sapXepTheoTen2 = () => {
    // console.log(person.arrPerson);
    let personSort = person.arrPerson;
    // console.log(personSort);
    personSort.sort((a, b) => b.hoTen.localeCompare(a.hoTen));
    person.renderListPerson();
}


// tìm kiếm theo đối tượng
document.getElementById('timKiemDoiTuong').onchange = () => {
    let personNew = person.arrPerson;
    let value = document.getElementById('timKiemDoiTuong').value;
    console.log(value)
    let arrNew = [];
    if (value) {
        for (let i = 0; i < personNew.length; i++) {
            if (personNew[i].doiTuong === value) {
                arrNew.push(personNew[i]);
            }
        }
        console.log(arrNew);
        person.renderListPerson(arrNew);
    } else {
        person.renderListPerson();
    }
}
