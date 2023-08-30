<?php

require 'db/connect.php';
if (isset($_POST['btn-reg'])) {
    $uid = $_POST['uid'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $hobbies = $_POST['hobbies'];
    $nations = $_POST['nations'];
    $note = $_POST['note'];

    if (!empty($uid)&&!empty($fullname)&&!empty($email)&&!empty($gender)&&!empty($hobbies)&&!empty($nations)&&!empty($note)) {
        //insert sữ liệu
        echo "<pre>";
        print_r($_POST);

        $sql = "INSERT INTO `user` (`uid`, `fullname`, `email`, `gender`, `hobbies`, `nations`, `note`)
        VALUES('$uid', '$fullname', '$email', '$gender', '$hobbies', '$nations', '$note')";

        if ($conn->query($sql)===TRUE) {
            echo "Lưu dữ liệu thành công!";
        }
        else {
            echo "Lỗi {$sql}".$conn->error;
        }
    } else {
        echo "Bạn cần nhập đầy đủ thông tin!";
    }
}

?>