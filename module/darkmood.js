export default function darkmood() {
  const darkmoodBtn = document.querySelector(".header-darkmood__btn");
  const darkmoodBtnCircle = document.querySelector(
    ".header-darkmood__btn-circle"
  );
  darkmoodBtn.addEventListener("click", function () {
    document.body.classList.toggle("darkmood");
    const darkmoodOnOff = document.body.classList.contains("darkmood")
      ? true
      : false;
    console.log(darkmoodOnOff);

    if (darkmoodOnOff) {
      this.classList.add("darkmood-bg-on");
      darkmoodBtnCircle.classList.add("darkmood-circle-on");

      // Change Card BG Color
      document.documentElement.style.setProperty(
        "--card-bg",
        "hsl(228, 28%, 20%)"
      );

      // Change Body Bg Color
      document.documentElement.style.setProperty(
        "--bg-body",
        "hsl(230, 17%, 14%)"
      );

      // Change Title Color
      document.documentElement.style.setProperty(
        "--title-text",
        "hsl(0, 0%, 100%)"
      );

      // Change Subtile Color
      document.documentElement.style.setProperty(
        "--blue-text",
        "hsl(228, 34%, 66%)"
      );

      // Change Subtile Color
      document.documentElement.style.setProperty(
        "--header-bg",
        "hsl(232, 19%, 15%)"
      );
    }
    if (!darkmoodOnOff) {
      this.classList.remove("darkmood-bg-on");
      darkmoodBtnCircle.classList.remove("darkmood-circle-on");

      // Change Card BG Color
      document.documentElement.style.setProperty(
        "--card-bg",
        "hsl(227, 47%, 96%)"
      );

      // Change Body Bg Color
      document.documentElement.style.setProperty(
        "--bg-body",
        "hsl(0, 0%, 100%)"
      );

      // Change Title Color
      document.documentElement.style.setProperty(
        "--title-text",
        "hsl(230, 17%, 14%)"
      );

      // Change Subtile Color
      document.documentElement.style.setProperty(
        "--blue-text",
        "hsl(228, 12%, 44%)"
      );

      // Change Header BG Color
      document.documentElement.style.setProperty(
        "--header-bg",
        "hsl(225, 100%, 98%)"
      );
    }
  });
}
