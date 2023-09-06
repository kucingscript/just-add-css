if (confirm("Are you sure you want to insert css file ?")) {
  document.getElementById("head").innerHTML =
    `<title>Just add css - Kucingscript</title> 
    <link rel="stylesheet" href="assets/css/style.css" />
    <meta
      name="description"
      content="Just add CSS - The difference between a website with and without css files"
    />
    <meta
      name="keyword"
      content="ar rasyid sarifullah, kucingscript, just add css"
    />
    <meta name="author" content="Ar Rasyid Sarifullah" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />`;

  const menu_btn = document.querySelector(".menu-btn");
  const side_bar = document.querySelector(".side-bar");
  const close_btn = document.querySelector(".close-btn");

  menu_btn.addEventListener("click", () => {
    side_bar.classList.add("active");
    menu_btn.style.visibility = "hidden";
  });

  close_btn.addEventListener("click", () => {
    side_bar.classList.remove("active");
    menu_btn.style.visibility = "visible";
  });
} else {
  alert("Website looks bad, please reload the page and add css file");
  document.getElementById("head").innerHTML =
    `<title>Just add css - Kucingscript</title> 
    <meta
      name="description"
      content="Just add CSS - The difference between a website with and without css files"
    />
    <meta
      name="keyword"
      content="ar rasyid sarifullah, kucingscript, just add css"
    />
    <meta name="author" content="Ar Rasyid Sarifullah" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />`;
}