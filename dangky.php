<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE-edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"> -->
        <link rel="stylesheet" href="./css/dangky.css">
        <title>Đăng ký thành viên</title>
        <style>
            .error {
                background-color: yellow;
            }
        </style>
    </head>
    <body>
        <form id="studentForm" action="./reg.php" method="post">
            <h2>Đăng ký thành viên</h2>
            <div class="maSV">
                <label class="label" for="studentId">Mã thành viên:</label>
                <input type="text" id="studentId" name="uid" required>
            </div>
            <div class="tenSV">
                <label class="label" for="fullName">Họ và tên:</label>
                <input type="text" id="fullName" name="fullname" required>
            </div>
            <div class="email">
                <label class="label" for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="gioitinh">
                <label class="label">Giới tính:</label>
                <label><input type="radio" name="gender" value="nam" required> Nam</label>
                <label><input type="radio" name="gender" value="nu" required> Nữ</label>
            </div>
            <div class="sothich">
                <label class="label">Sở thích:</label>
                <label><input type="checkbox" name="hobbies" value="đọc sách"> Đọc sách</label>
                <label><input type="checkbox" name="hobbies" value="du lịch"> Du lịch</label>
                <label><input type="checkbox" name="hobbies" value="ẩm thực"> Ẩm thực</label>
                <label><input type="checkbox" name="hobbies" value="âm nhạc"> Âm nhạc</label>
                <label><input type="checkbox" name="hobbies" value="khác"> Khác</label>
            </div>
            <div class="quoctich">
                <label class="label" for="nationality">Quốc tịch:</label>
                <select id="nationality" name="nations" required>
                    <option value="">Chọn quốc tịch</option>
                    <option value="việt nam">Việt Nam</option>
                    <option value="mỹ">Mỹ</option>
                    <option value="nhật bản">Nhật Bản</option>
                </select>
            </div>
            <div class="ghichu">
                <label class="label" for="note">Ghi chú:</label>
                <textarea id="note" name="note" rows="4"></textarea>
            </div>
            <div class="btn">
                <button type="submit" name="btn-reg" value="Đăng ký">Đăng Ký</button>
            </div>
        </form>
        <!-- <script src="./js/dangky.js"></script> -->
    </body>
</html>
