class NhanVien {
  constructor(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  ) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
  }
  //tinh tong luong
  tinhTongLuong = function () {
    let tongLuong = 0;
    switch (this.chucvu) {
      case "giamDoc":
        tongLuong = this.luongCB * 1 * 3;
        break;
      case "truongPhong":
        tongLuong = this.luongCB * 1 * 2;
        break;
      case "nhanVien":
        tongLuong = this.luongCB * 1 * 1;
        break;
    }
    return tongLuong;
  };

  xepLoai() {
    let xepLoaiNV = "";
    let gioLamNV = this.gioLam * 1;
    console.log(gioLamNV);
    if (gioLamNV < 160) {
      xepLoaiNV = "Nhan vien trung binh";
    } else if (160 <= gioLamNV && gioLamNV < 176) {
      xepLoaiNV = "Nhan vien Kha";
    } else if (176 <= gioLamNV && gioLamNV < 192) {
      xepLoaiNV = "Nhan vien gioi";
    } else if (gioLamNV >= 192) {
      xepLoaiNV = "nhan vien xuat sac";
    }
    return xepLoaiNV;
  }
}
