/*
    code by tz
*/


window.onscroll = function () {
    if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
        document.getElementById('rTop').style.display = "block"
    } else {
        document.getElementById('rTop').style.display = "none"
    }
}

//document.getElementById('txt').value
    var firstSubmit = false;
$('.fankui').on('click', function () {
    var $test = $('#txt').val();
    var reg = /^[a-zA-Z0-9\s]*$/;
    var m = reg.test($test);
    var init = $(this).attr('data-init');
    if (m) {
        $('.error').fadeIn(400).delay(3000).fadeOut(200);
        $('#txt').val(null);
         $("#txt").focus();
        return;
    } 
    else {
        if(!firstSubmit){
            $('.confirm').fadeIn(400).delay(3000).fadeOut(200);
            //后台从这里取值
            firstSubmit = true;
        }else{
            $('.false').fadeIn(400).delay(3000).fadeOut(200);
            $('#txt').val(null);
            return;
        }
    }
})





//
//$('.fankui').on('click', function () {
//    var firstSubmit = true;
//    var $test = $('#txt').val();
//    var reg = /^[a-zA-Z0-9\s]*$/;
//    var m = reg.test($test);
//    var init = $(this).attr('data-init');
//    if (m) {
//        $('.error').fadeIn(400).delay(3000).fadeOut(200);
//        $('#txt').val(null);
//         $("#txt").focus();
//        return;
//    } 
//    else {
//        if(!init){
//            $('.confirm').fadeIn(400).delay(3000).fadeOut(200);
//            //后台从这里取值
//            $(this).attr('data-init', true);
//        }else{
//            $('.false').fadeIn(400).delay(3000).fadeOut(200);
//            $('#txt').val(null);
//            return;
//        }
//    }
//})

