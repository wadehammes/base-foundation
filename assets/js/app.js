/*=============================================
=            Detect Smart Browsers            =
=============================================*/
if (
  'querySelector' in document &&
  'localStorage' in window &&
  'addEventListener' in window
) {
  $('html').addClass('modern-browser');
}



