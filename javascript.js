// input에 focusin 되면 부모 .inputbox에 border-act class add
$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('border-act');
})

// input에 focusout되면 부모 .inputbox border-act class remove
$('input').focusout(function(){
  $(this).parent('.inputbox').removeClass('border-act');
})

let idverid = pwveri = pwchkveri = nameveri = bitrhveri = genderveri = phoneveri = addressveri = false;
//console.log(genderveri,phoneveri)
let mailveri = true;


// 아이디
// .userid input에 focusout 됐을 때 입력된 값의 길이가 0이라면(조건)
// .userid warn에 내용을 작성(실행문)
$('.userid input').focusout(function(){
  let userId = $(this).val();
  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp= /^[a-z0-9]{5,8}$/

  if(userId.length == 0) {
    $('.userid .warn').html('<span class="text-red">필수정보 입니다.</span>')
  } else if(!idExp.test(userId)) {
    $('.userid .warn').html('<span class="text-red">5~8자의 영문 소문자, 숫자만 사용 가능합니다.</span>')
  } else {
    idveri = true;
    $('.userid .warn').html('<span class="text-green">멋진 아이디네요!</span>')
  }
})


// 비밀번호
// .userpw input에 focusout 됐을 때 입력된 값이 0이라면 (조건)
// .userpw warn에 내용을 작성(실행문)
$('.userpw input').focusout(function(){
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if(userPw.length == 0) {
    $('.userpw .warn').html('<span class="text-red">필수정보 입니다.</span>')
    $('.userpw .input-box span').empty();
    $('.userpw .input-box img').attr('src','../0802/images/pw-close.png')
  } else if(!pwExp.test(userPw)) {
    $('.userpw .warn').html('<span class="text-red">8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>')
    $('.userpw .input-box p').html('<span class="text-red">사용불가</span>');
    $('.userpw .input-box img').attr('src', './0802/images/m_icon_pw_step_10.png')
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
    $('.userpw .inputbox p').html('<span class="text-green">안전</span>');
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_04.png')
  }
  
})
//비밀번호 재확인//
//그렇지 않다면 eles(0이 아니고,)
//.userpw-chk input에 focusout 됐을때 입력된 값이 0이라면(조건)
//.userpw-chk .warn에 빨간색 글자로 필수 정보입니다.(실행문)
//.warn에 뜨는 경고메세지 화면에서 사라지게 한다
//우층 아이콘 이미지를 바꾸기
//.userpwchk .warn에 비밀번호가 일치하지 않습니다. (text-red)
//우측 아이콘 이미지를 원래대로 변경(02)
$('.userpwchk input').focusout(function () {
  let userPwChk = $(this).val();
  if (userpwchk.length == 0) {
    $('.userpwchk .warn').html('<span class="text-red">비밀번호가 일치하지않습니다!</span>')
    $('.userpwchk .input-box img').attr('src', './images/pw-open.png')
  }else if(userpwchk == $('.userpw input').val()){
    pwchkveri = true;
    $('.userpwchk .warn').empty();
    $('.userpwchk .input-box img').attr('src','/images/red.png' )

  }else{
    $('.userpwchk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>'); 
    $('.userpwchk .input-box img').attr('src','/images/red.png' );
  }
}) 
//name
//.username input에 포커스아웃 됐을때 입력된 값이 0이라면(조건)
//text-red 필수 정보 입니다.
//eles if
//정규식 한글 최소 2~5글자
//text-red 한글로 2~5글자 사이로 작성하세요.
//eles .warn에 들어있는 경고메세지를 지워줌
//nameveri = true 로 준다.
$('.username input').focusout(function () {
  let userName = $('.username input').val();
  let nameExp = /^[가-힣]{2,5}$/;//<-name 정규식
  if (userName.length == 0) {
    $('.username .warn').html('<span class="text-red">필수</span>');
  }else if(!nameExp.test(userName)){
    $('.username .warn').html('<span class="text-red">2~5사이의 한글로 입력해주세요.</span>') 
  }
})
//생년월일
//#month의 length가 0이라면(조건)
//.birth .warn
//#year,#month,#date에 포커스아웃 됐을때
//#year의 value length가 4글자 아니라면 
//.birth .warn에 경고메세지를 text-red class '태어난년도 4자리를 정확하게 입력하세요'
//태어난 일(날짜)
//년,월,일 값이 숫자가 아니라면 text-red class
//'생년월일을 다시 확인해주세요.'
//올해 기준으로 나이가 100초과라면 조건
//.birth .warn text-red class
//'정말이세요?'
/*$('#year,#month,#date').focusout(function () {
  let yaer = $('#year').val();
  let month = $('#month').val();
  let date = $('#date').val();
  if (yaer.length != 4) {
    $('.birth .warn').html('<span class="text-red">태어난년도 4자리를 정확하게 입력하세요</span>')
  }else if(month.length == 0) {
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>')
  }else if
 

  

})*/
$('#year, #month, #date').focusout(function(){
  let year = $('#year').val();
  let month = $('#month').val();
  let date = $('#date').val();

  // 한국 날짜 및 시간 (한국 표준시)
  let now = new Date();
  // Date 객체의 getTime() 메서드는
  // 1970년 1월 1일 00시 00분 00초 (UTC) 
  // 세계표준시를 기준으로 경과한 밀리초를 반환한다. 
  let nowStamp = now.getTime();
  // 현재 날짜 및 시간에서 현재 연도의 네자리 값을 변수에 할당
  now = now.getFullYear();

  // 사용자가 입력한 year, month, date 값으로 Date 객체 생성
  let birth = new Date(year, month, date);
  console.log(birth)
  birth = birth.getTime();
  console.log(birth)

  if(year.length != 4) {
    $('.birth .warn').html('<span class="text-red">태어난 년도 4자리를 정확하게 입력하세요.</span>')
  } else if(month.length == 0 ) {
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>')
  } else if(date.length == 0 || date > 30 || date <= 0) {
    $('.birth .warn').html('<span class="text-red">태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>')
  } else if(isNaN(year * month * date)) {
    // is Not a Number
    $('.birth .warn').html('<span class="text-red">생년월일을 다시 확인 해주세요.</span>')
  } else if(now - year > 100) {
    $('.birth .warn').html('<span class="text-red">정말이세요?</span>')
  }else if(nowStamp < birth){
   $('.birth .warn').html('<sapn class="text-red">미래에서 오셨네요.</sapn>')
  }
})
//radio 성별
//.gender .input-box를 클릭했을때
//.gender 모든 .input-box에 .btn-primary class remove
//,gender .input-box안 input radio에 checked 거짓
//클릭된 자신에게만 .btn-primary class add
//클릭된 자신에가만 input radio에 checked 참
//genderveri = 참
$('.gender .input-box').on('click',function () {
  $('.gender .input-box').removeClass('.btn-primary');
  //prop => 제이쿼리에서는 라디오 버튼을 제어할때 주로 사용
  $('.gender .input-box input[type="radio"]').prop('checked',false);
  $(this).addClass('.btn-primary');
  $(this).children('input[type="radio"]').prop('checked',true);
  genderveri = true;
})
//본인 확인 이메일
//.usermail input 에 포커스 됐을때
//필수사항이 아니라 선택사항 이니까 기본적으로 mailveri = 참
//사용자가 값을 입력하지 않았을 경우 그대로 유지
//값을 입력했는데 정규식맞게 입력
//.usermail .warn 형식이 맞지않게 작성할경우 '이메일형식에 맞게 써주세요. '
$('.usermail input').focusout(function () {
  let mail = $(this).val();
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (mail.length == 0) {
    $('.usermail .warn').empty();
  }else if(!mailExp.test(mail)){
    mailveri = false;
    $('.usermail .warn').html('<span class="text-red">이메일형식을 맞게 써주세요.</span>')

  }else{
    $('.usermail .warn').empty();
  }
})
//폰 인증번호
$('.phonenum input').focusout(function () {
  let Phone = $(this).val();
  let verifi = verifi.replace(/[^0-9]/g, '');
  if (Phone.value == 0) {
    $('.phonenum .warn').empty();
  }else if(!verifi.test(Phone)){
    
  }
})
    
    

  

//한국 표준시 값
let now = new Date();
console.log(now)
let nowStmp = now.getTime();
now = now.getFullYear();
//사용자가 입력한 year,month,date 값으로 date 객체를 새롭게 생성함
let birth = new Date(year,month,date);
console.log(birth)
birth = birth.getTime();

//현재 년도보다 
//console.log(now)
//현재 날짜 및 시간에서 현재 연도의 4자리 값을 변수에 할당

//console.log(nowStmp)
//Date 객체의 getTime()메소드는
//1970년 1월 1일 00시 00분 00초 (UTC) 세계표준시를 기준으로 경과한 밀리초를 반환하는 값이다.
//isNaN:숫자가 아닌 문자나 다른것이 들어왔을때 