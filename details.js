window.onload = () => {
  img = document.createElement("img");
  let image = new URLSearchParams(window.location.search);
  let imageParam = image.get("image");
  let divImage = document.getElementById("image");
  divImage.appendChild(img);
  img.src = imageParam;
};
