//COOKIE
//클라이언트 = cookie를 저장가능
//서버 = cookie + section도 같이 저장됨
//둘 다 텍스트형태 문자로 저장이 된다.
//쿠키를 저장하도록 허용(O)/(X) -> 정보가 서버에 저장이 된다.
//사용자가 해당 사이트에서 어떤 행동을 했는지
//cookie:일정기간동안 데이터 값을 브라우저가 내부에 값을 저장하는것이다.//
//cookie가 저장되는 방식 name = value방식으로 저장을 한다.
//개발자 도구(F12)-어플리캐이션-cookies(쿠키)에 들어가면 해당사이트의 쿠키를 확인할수있음//
//쿠키에 만료기간을 넣어서 쿠키가 자동만료 되도록 코드를 작성함(UTC)라고도 불림
//setCookie/getCookie라는 함수를 생성
//setCookie: 쿠키를 설정하는 함수/ getCookie : 쿠키값을 가져오는 함수
//lockalstorage에서 이용해서 구현할수있다.

//SetCookie
function setCookie(name,value,hours) {
  //빈 문자열로 변수 초기화 = cookie 만료시간을 담아주는 역할을 함//
  let expires = '';
  //만약에 hours라는 값이 있다면 (참)
  if (hours) {
    //date라는 변수 안에 현재시간을 가지는 date
    let date = new Date();
    console.log(date);
    //cookie 만료된 시점의 시간
    //cookie 만료된시간이 hours + 시간만큼 뒤로 설정함

    //시간을 밀리초(ms)로 변환
    //hour(시간) * 60(분) * 60(초) *1000 
    //자바스크립트에서 시간을 다룰 때 일반적으로 밀리초(ms)로 계산함//
    //date 객체가 밀리초(ms) 단위로 시간을 나타내기 때문에
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))
    //;(세미콜론)
    //쿠키설정은 문자열 name과 value로 구성되는데,
    //각각 옵션과 값을;(세미콜론)으로 구분함 
    //toUTCString():Date 객체의 시간 => UTC 형태의 문자열로 변환
    //쿠키 만료시간을 표준화된 방식으로 변환해줌

    expires = '; expires' + date.toUTCString();
  }
 //'; path=/' => 쿠키가 어떤 경로에서 유효하게 할건지 경로 설정하는것
 //경로를 설정할때 /(slash)만 사용하면 현재 도메인의 모든 경로에서 쿠키가 유효함
 ///(다른값) 으로 작성할경우에는 해당 경로에서만 쿠키가 유효하게 됨.//
  document.cookie = name + '=' + (value || '') + expires + '; path=/'

}
//특정 이름의 쿠키값을 가져오는 함수//
function getCookie(name) {
  //name Equal
  //쿠키의 이름 = 값 사이에 Equal(=) 들어간다.
  //name = value 
  //쿠키이름 = 쿠키의 이름과 일치하는 문자열인지 확인
 let nameEqu = name + '=';
 //쿠키의 name 과 value 은 세미콜론으로 구분
 //현재페이지의 쿠키 문자열을 ;(세미콜론)을 기준으로 값을 쪼개서 배열로 만들어준다. 
 let cookies = document.cookie.split(';');
 //cookies 라는 배열을 순회하면서 쿠키값을 찾는다.
 for(let i = 0; i < cookies.length; i++){
  //현재 순회중인 쿠키 문자열을 cookie 변수 담는다.//
  let cookie = cookies[i];
  //cookie 문자열에서 특정이름과 일치하는 쿠키 값이 있는지 확인하는것
  //indexOf: 문자열 내에서 특정 문자열을 찾는 메소드
  //nameEqu 변수가 쿠키 문자열의 시작 0번째 위치에서 시작되는지를 확인 => 참
  //ubstring():문자열의 시작 index와 마지막 index를 지정해서 해당범위 내의 문자들을 추출하는 메소드이다.

  if(cookie.indexOf(nameEqu) == 0) {
    return cookie.substring(nameEqu.length,cookie.length);
  }
 }
return null; 
//일치하는 쿠키를 찾지 못했을때는 null값을 반환해서 쿠키가 존재하지않는다는것을 나타냄//
}
//문서가 로드될 때 실행될 함수 설정하고 실행
//DOMContentLoaded
document.addEventListener('DOMContentLoaded',function () {
  let popup = document.querySelector('.popup');
  let nonepopup = document.getElementById('none-popup');
  let closeBtn = document.getElementById('close-btn');
  //console.log(popup,nonpopup,closeBtn)
  //getCookie에서 hidepopup이라는 값을 가져왔을때 null이 아니라면 
  if (getCookie("hidepopup")) {
    popup.style.display = 'none'; 
  }
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none'; 
    //closeBtn 클릭했을때 nonepopup에 checked 속성이 있다면 setCookie
    if ( nonepopup.checked) {
      setCookie("hidepopup","true",24);
      //쿠키를 00시간동안 유지 => setCookie("hidepopup","true",00)
    }
  })
  //checkbox에 checked 속성이 있다면
  //setcookie 함수에 name,value,hours 매개변수 값을 전달해서 hours 시간동안 팝업이 보이지 않게 한다.

})



