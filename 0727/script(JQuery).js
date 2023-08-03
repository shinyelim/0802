// label 클릭 했을 때
// 클릭된 label의 자식인 checkbox-img에 Checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  // 클릭된 label의 자식인 .checkbox-img class에
  //  checked 라는 class가 포함되어 있다면 
  // <input type="checkbox">의 속성 checked
  if($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img.checked 라는클래스가 있을 때
    $(this).children("input[type='checkbox']").attr('checked', true);
  } else {
    $(this).children("input[type='checkbox']").removeAttr('checked');
  }
})


// .total을 체크하면 .agree 올 체크
// .total을 언체크하면 .agree 전부 언체크

// .total .checkbox-img가 .checked 클래스를 가지고 있다면
// .agree안 .checkbox-img에 checked class add
// .agree안 input checkbox를 checked true

// .total .checkbox-img가 .checked 클래스를 가지고 있지 않다면
// .agree 안 .checkbox-img에 checked class remove
// .agree 안 input checkbox를 checked false
$('.total label').on('click', function(){
  if($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', true);
  } else {
    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').removeattr('checked');
  }
})
//.agree label 안 checkbox가 모두 체크상태라면 모두 동의버튼도 체크로 변경
//하나라도 체크되지않은 값이 있다면 모두 동의버튼 체크를 언체크로 바꿈
$('.agree label').on('click',function () {
  let len = $('.agree .checkbox-img').length;
  let chklen = $('.agree .checked').length;
  let unchk = len - chklen;
  //console.log(len, chklen)
  //조건이 참이라면 .total label .checkbox-img checked class add
  //.total label input checkbox checked true
  //.total label input checkbox checked removeAttr
  if (unchk == 0) {
   ($('.total label .checkbox-img').addClass('checked'));
   $('.total label input[type="checkbox"]').attr('checked',true); 
   $('.total label input[type="checkbox"]').removeattr('checked',); 
  }else{

  }
})

//확인버튼을 클릭했을때 필수사항(2)을 모두 체크했는지
//확인해서 모두 체크했으면 sumit() 하나라도 체크하지 않은게 있다면 sumit()을 막고
//.req-alert 텍스트를 보여준다.
$('#submit').on('click', function(e){
  e.preventDefault();
  let req = $('.req').length;
 // console.log(req)
 let chkreq = $('.req .checked').length;
 //req수 수 -req안 .checked수 = 체크되지 않는 값
 let unchk = req - chkreq;
 //console.log(req,chkreq)
if (unchk == 0) {
  $('.from01').submit(); 
}else{
 e.preventDefault();
 $('.req-alert').css('visibility', ' visible');
}
})
//취소버튼 클릭했을때 네이버 사이트로 이동
$('#cancel').on('click', function () {
  location.href = "https://www.naver.com";
})