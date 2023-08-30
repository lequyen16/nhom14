function kiemtra() {
    var mssv = document.getElementById("studentId")
    var ht = document.getElementById("fullName")
    var email = document.getElementById("email")
    var gioitinh = document.getElementsByName("gender")
    var sothich = document.getElementsByName("hobbies")
    var quoctich = document.getElementById("nationality")
    var ghichu = document.getElementsByName("note")
    let count = 0
    if (mssv.value.length == 0) {
        alert("Chưa nhập mã sinh viên !")
        return;
    }
    if (ht.value.length == 0) {
        alert("Chưa nhập họ và tên !")
        return;
    }
    if (email.value == "") {
        alert("Chưa nhập email !")
        return;
    }
    if (!gioitinh[0].checked && !gioitinh[1].checked) {
        alert("Chưa nhập giới tính !")
        return;
    }
    for (let i = 0; i < sothich.length; i++) {
        if(sothich[i].checked){
            count++
        }
    }
    if (count < 1) {
        alert("Chọn ít nhất 1 sở thích")
        return;
    }
    var chonQuocTich = quoctich.options[selectElement.selectedIndex].text;
    if (chonQuocTich === "Chọn quốc tịch") {
        alert("Bạn chưa chọn quốc tịch");
        return;
    }
    if (ghichu.length < 200) {
        alert("Ghi chú phải nhiều hơn 200 ký tự!")
    }
}