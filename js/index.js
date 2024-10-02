let danhSachNhanVien = [];
//hiển thị ds nhân viên
function renderTableDanhSachNhanVien() {
  let tableBody = document.getElementById("tableDanhSach");
  tableBody.innerHTML = "";

  danhSachNhanVien.forEach((nv) => {
    let row = `
<tr>
    <td>${nv.tknv}</td>
    <td>${nv.name}</td>
    <td>${nv.email}</td>
    <td>${nv.datepicker}</td>
    <td>${nv.chucvu}</td>
    <td>${nv.tinhTongLuong()}</td>
    <td>${nv.xepLoai()}</td>
    <td>
        <button class="btn btn-danger" onclick ="xoaNhanVien('${
          nv.tknv
        }')">Xóa</button>
    </td>
</tr>
    `;
    tableBody.innerHTML += row;
  });
}

//Xóa nv
function xoaNhanVien(tknv) {
  danhSachNhanVien = danhSachNhanVien.filter((nv) => nv.tknv !== tknv);
  renderTableDanhSachNhanVien(); //cập nhật bảng sau xóa
}

//
function themNhanVienMoi() {
  //
  let tknv = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let datepicker = document.getElementById("datepicker").value;
  let luongCB = parseFloat(document.getElementById("luongCB").value);
  let chucvu = document.getElementById("chucvu").value;
  let gioLam = parseFloat(document.getElementById("gioLam").value);

  //tạo nv
  let nhanVien = new NhanVien();
  nhanVien.tknv = tknv;
  nhanVien.name = name;
  nhanVien.email = email;
  nhanVien.password = password;
  nhanVien.datepicker = datepicker;
  nhanVien.luongCB = luongCB;
  nhanVien.chucvu = chucvu;
  nhanVien.gioLam = gioLam;

  //thêm ds
  danhSachNhanVien.push(nhanVien);

  //cập nhật lại bảng
  renderTableDanhSachNhanVien();

  //reset
  document.getElementById("formThemNhanVien").reset();
}

//
document.getElementById("btnThemNV").addEventListener("click", themNhanVienMoi);
