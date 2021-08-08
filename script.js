    const uploadFile = document.getElementById("uploadFile");
    const previewContainer = document.getElementById("show-Image");
    const imageShow = previewContainer.querySelector(".showImagePreview");
    const imageTextShow = previewContainer.querySelector(".showImageText");

      uploadFile.addEventListener("change", function(){
      const file = this.files[0];

      if (file) {
        const reader = new FileReader();

        // imageTextShow.style.display = "none";
        // imageShow.style.display = "block";

        const changetext = document.getElementById('imageTextShow');
        changetext.style.display = "none";
        const changeimage = document.getElementById('imageShow');
        changeimage.style.display = "block";

        reader.addEventListener("load", function(){
          imageShow.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
      } else {
        imageTextShow.style.display = null;
        imageShow.style.display = null;
        previewImage.setAttribute("src", " ");
      }
    });