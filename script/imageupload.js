// Load Image
let fileTag = document.getElementById("img-orig-input");
let preview = document.getElementById("img-orig-preview");

fileTag.addEventListener("change", function() {
    previewImage(this);
});

function previewImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

