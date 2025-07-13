// کد جاوااسکریپت ساده برای اسکرول نرم به بخش ویژگی‌ها
document.querySelector(".btn-cta").addEventListener("click", function (event) {
  // جلوگیری از رفتار پیش‌فرض لینک
  event.preventDefault();

  // رفتن به بخش اصلی محتوا با انیمیشن اسکرول نرم
  document
    .querySelector(".main-content")
    .scrollIntoView({ behavior: "smooth" });

  // باز کردن لینک در تب جدید بعد از اسکرول (1 ثانیه تاخیر)
  setTimeout(() => {
    window.open(this.href, "_blank");
  }, 1000);
});
