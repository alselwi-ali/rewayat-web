// var modal = document.querySelector("#ifr");
// // var m = document.querySelector("#showoff");
// document.querySelector("#showToastBtn").addEventListener("click",open)
// function open(){
//     // modal.style.display="flex";
//     if (modal.style.display=="none"){
//         modal.style.display="block";
//     }
//     else {
//         modal.style.display="none";
//     }
// };
document.getElementById("showToastBtn").addEventListener("click", function() {
  Toastify({
    text: "تم الحفظ بنجاح ✅",      // النص المعروض
    duration: 3000,                 // مدة الظهور (ملّي ثانية)
    close: true,                    // زر إغلاق
    gravity: "top",                 // مكان الظهور: "top" أو "bottom"
    position: "right",              // "left" أو "center" أو "right"
    backgroundColor: "#4CAF50",     // لون الخلفية
    stopOnFocus: true               // توقف عند تمرير الماوس
  }).showToast();
});
