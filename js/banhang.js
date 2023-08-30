var mucGia = document.getElementById('mucgia');
var loaiHangHoa = document.querySelectorAll('#cartTable tbody tr');
var soLuong = document.querySelectorAll('.soluong');
var chonCheckBox = document.querySelectorAll('.nut-checkbox');
var Tong = document.getElementById('tong');

mucGia.addEventListener('change', () => {
    var chonMucGia = mucGia.value;

    for (let i = 0; i < loaiHangHoa.length; i++) {
        var giaHangHoa = loaiHangHoa[i].querySelector('.don-gia').textContent;
        var gia = parseFloat(giaHangHoa.slice(0));

        if (chonMucGia === "0-50" && gia <= 50) {
            loaiHangHoa[i].style.display = 'table-row';
        } else if (chonMucGia === "50-100" && gia > 50 && gia <= 100) {
            loaiHangHoa[i].style.display = 'table-row';
        } else if (chonMucGia === "100-200" && gia > 100 && gia <= 200) {
            loaiHangHoa[i].style.display = 'table-row';
        } else if (chonMucGia === "200+" && gia > 200) {
            loaiHangHoa[i].style.display = 'table-row';
        } else {
            loaiHangHoa[i].style.display = 'none';
        }
    }
    tinhTong();
});

function tinhThanhTien(index) {
    var gia = parseFloat(document.querySelectorAll('.don-gia')[index].textContent.slice(0));
    var sluong = parseInt(soLuong[index].value);
    var tong = gia * sluong;
    var thanhTien = document.querySelectorAll('.thanh-tien')[index];
    thanhTien.textContent = tong + 'k';
}

function tinhTong() {
    let tong = 0;
    for (let i = 0; i < soLuong.length; i++) {
        if (chonCheckBox[i].checked) {
            tinhThanhTien(i);
            tong += parseFloat(document.querySelectorAll('.thanh-tien')[i].textContent.slice(0));
        }
    }
    Tong.textContent = tong + 'k';
}

for (let i = 0; i < chonCheckBox.length; i++) {
    chonCheckBox[i].addEventListener('change', () => {
        soLuong[i].disabled = !chonCheckBox[i].checked;
        if (!chonCheckBox[i].checked) {
            soLuong[i].value = 0;
            tinhThanhTien(i);
        }
        tinhTong();
    });

    soLuong[i].addEventListener('input', () => {
        tinhThanhTien(i);
        tinhTong();
    });
}