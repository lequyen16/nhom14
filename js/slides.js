var images = [];
var index = 0;
var sohinh = 20;
for (var i = 0; i < sohinh; i++) {
    images[i] = new Image();
    images[i].src = "images/" + i + ".jpg";
}

function next() {
    index++;
    if (index >= images.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    var vitri = index + 1;
    var inVitri = 'Ảnh ' + vitri + '/20';
    document.getElementById("vitri").innerText = inVitri;
}

function prev() {
    index--;
    if (index < 0) index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    var vitri = index + 1;
    var inVitri = 'Ảnh ' + vitri + '/20';
    document.getElementById("vitri").innerText = inVitri;
}

function first() {
    index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    var vitri = index + 1;
    var inVitri = 'Ảnh ' + vitri + '/20';
    document.getElementById("vitri").innerText = inVitri;
}

function last() {
    index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    var vitri = index + 1;
    var inVitri = 'Ảnh ' + vitri + '/20';
    document.getElementById("vitri").innerText = inVitri;
}

