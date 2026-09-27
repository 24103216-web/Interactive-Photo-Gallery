// Function cập nhật hình ảnh hiển thị khi hover/focus
function upDate(previewPic) {
    console.log("Event triggered: upDate");
    console.log("Image alt: " + previewPic.alt);
    console.log("Image src: " + previewPic.src);

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// Function khôi phục trạng thái ban đầu khi mouseleave/blur
function unDo() {
    console.log("Event triggered: unDo");

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Function tự động chạy khi trang web tải xong (onload)
function addTabAttributes() {
    console.log("Page loaded: addTabAttributes function running");

    // Lấy tất cả các hình ảnh có class "preview"
    const images = document.querySelectorAll(".preview");

    // Vòng lặp for duyệt qua từng hình ảnh và thêm thuộc tính tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex='0' to image " + (i + 1));
    }
}

// Thêm sự kiện onload cho cửa sổ trình duyệt
window.onload = addTabAttributes;