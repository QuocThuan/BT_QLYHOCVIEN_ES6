import { Person } from "./Person.js";
import { SinhVien } from "./Person.js";
import { NhanVien } from "./Person.js";
import { KhachHang } from "./Person.js";

class ListPerson {
    arrPerson = [];

    // thêm person
    themPerson = (person) => {
        this.arrPerson.push(person);
        this.luuDuLieuLocal();
        this.renderListPerson();
    }

    // render giao diện
    renderListPerson = (arr = this.arrPerson) => {
        let content = '';
        for (let i = 0; i < arr.length; i++) {
            let sinhVien = new SinhVien();
            let nhanVien = new NhanVien();
            Object.assign(sinhVien, arr[i]);
            Object.assign(nhanVien, arr[i]);

            let {ma,hoTen,email,diaChi,doiTuong,tinhDiemTrungBinh} = sinhVien;
            let {tinhLuong} = nhanVien;
            let {congTy} = arr[i];
            console.log(arr[i])

            content += `
            <tr>
                <td>${ma}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${diaChi}</td>
                <td>${doiTuong}</td>
                <td>${doiTuong == "SV" ? tinhDiemTrungBinh() : "-"}</td>
                <td>${doiTuong == "NV" ? tinhLuong() : "-"}</td>
                <td>${doiTuong == "KH" ? congTy : "-"}</td>
                <td>
                    <button class="btn btn-danger" onClick="xoaPerson('${ma}')" >Xóa</button>
                    <button class="btn btn-warning" onClick="layThongTin('${ma}')">Sửa</button>
                </td>
            </tr>
            `;
        }
    document.getElementById('tbodyPerson').innerHTML = content;
    };


    // lưu xuống local
    luuDuLieuLocal = () => {
        let arrString = JSON.stringify(this.arrPerson);
        localStorage.setItem('listPerson', arrString);
    };
    // lấy từ local lên
    layDuLieuTuLocal = () => {
        let mangNew = localStorage.getItem('listPerson');
        if (mangNew) {
            this.arrPerson = JSON.parse(mangNew);
        }
        this.renderListPerson();
    };

    // xóa person
    xoaPerson = (id) => {  
        let index = this.arrPerson.findIndex((item) => item.ma === id);

        if (index !== -1) {
            this.arrPerson.splice(index,1);
            this.renderListPerson();
            this.luuDuLieuLocal();
        }
    };

    // lấy thông tin 
    layThongTin = (id) => {
        let person = this.arrPerson.find(function(item,index){
            return item.ma === id;
        })

        if (person) {
            return person;
        }
    };

    // cập nhật thông tin
    capNhatThongTin = (person) => {
        // tìm vị trí index của person cần sửa
        let index = this.arrPerson.findIndex((item) => item.ma == person.ma);
        if (index !== -1) {
            this.arrPerson[index] = person;
            this.luuDuLieuLocal();
            this.renderListPerson();
        };
    };


}

export {ListPerson};