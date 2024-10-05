let danhSachNhanVien = [];

//hien thi ds nv ra table
function renderTable() {
  let content = "";
  danhSachNhanVien.forEach((nv, index) => {
    content += `
<tr>
    <td>${nv.tknv}</td>
    <td>${nv.name}</td>
    <td>${nv.email}</td>
    <td>${nv.datepicker}</td>
    <td>${nv.chucvu}</td>
    <td>${nv.tinhTongLuong()}</td>
    <td>${nv.xepLoai()}</td>
    <td>
         <button class = "btn btn-danger" onclick ="xoaNhanVien(${index})">Xóa</button>
    </td>
</tr>
    `;
  });
  document.getElementById("tableDanhSach").innerHTML = content;
}

//xoa nhan vien khoi list
function xoaNhanVien(index) {
  danhSachNhanVien.splice(index, 1);
  renderTable();
}
//
document.getElementById("btnThemNV").addEventListener("click", function () {
  //lay du lieu tu form
  let tknv = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;

  let datepicker = document.getElementById("datepicker").value;

  let luongCB = parseFloat(document.getElementById("luongCB").value);

  let chucvu = document.getElementById("chucvu").value;

  let gioLam = document.getElementById("gioLam").value;

  //tạo nv mới
  let nhanVien = new NhanVien();
  nhanVien.tknv = tknv;
  nhanVien.name = name;
  nhanVien.email = email;
  nhanVien.password = password;
  nhanVien.datepicker = datepicker;
  nhanVien.luongCB = luongCB;
  nhanVien.chucvu = chucvu;
  nhanVien.gioLam = gioLam;

  //add nv vao list
  danhSachNhanVien.push(nhanVien);

  //hien thi ra table
  renderTable();

  //reset form sau khi add nv
  document.getElementById("formNhanVien").reset();
});
