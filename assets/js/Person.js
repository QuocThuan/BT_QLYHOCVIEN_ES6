class Person {
    ma = '';
    hoTen = '';
    email = '';
    diaChi = '';

    constructor(ma,hoTen,email,diaChi) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.email = email;
        this.diaChi = diaChi;
    }
}

class SinhVien extends Person {
    diemToan = 0;
    diemLy = 0;
    diemHoa = 0;

    constructor (ma,hoTen,email,diaChi,diemToan,diemLy,diemHoa) {
        super(ma,hoTen,email,diaChi);
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    tinhDiemTrungBinh = () => {
        return (this.diemToan*1 + this.diemLy*1 + this.diemHoa*1)/3;
    }
}

class NhanVien extends Person {
    soNgayLam = 0;
    luongNgay = 0;

    constructor (ma,hoTen,email,diaChi,soNgayLam,luongNgay) {
        super(ma,hoTen,email,diaChi);
        this.soNgayLam = soNgayLam;
        this.luongNgay = luongNgay;
    }

    tinhLuong = () => {
        return this.soNgayLam*1 * this.luongNgay*1;
    }
}

class KhachHang extends Person {
    congTy = '';
    hoaDon = 0;
    danhGia = '';

    constructor (ma,hoTen,email,diaChi,congTy,hoaDon,danhGia) {
        super(ma,hoTen,email,diaChi);
        this.congTy = congTy;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;
    }
}

export {Person};
export {SinhVien};
export {NhanVien};
export {KhachHang};


