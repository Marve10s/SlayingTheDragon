export const mobileNav = () => {
  const bars = document.getElementById("bars-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-btn");

  const handleBarsBtn = () => {
    mobileNav.style.display = "flex";
  };

  const handleCloseBtn = () => {
    mobileNav.style.display = "none";
  };

  bars.addEventListener("click", handleBarsBtn);
  closeBtn.addEventListener("click", handleCloseBtn);
};
