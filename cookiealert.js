function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 $(function(){
   $('body').on('click', '.btn-close-cookie-notification', function(){
     setCookie('is_cookie_compliance_accepted', true, 3000);
     $(this).parent().fadeOut(250);
   });
});