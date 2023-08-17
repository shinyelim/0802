//new date()
//n초 마다 코드를 실행하는 setInterval을 실행해야함
let now = new Date();
let hr = now.getHours(); //->전역변수로 선언

setInterval(function () {
  let now = new Date();
  
  //시,분,초 값을 각 변수에 할당시켜줘야 함
  let hr = now.getHours();

  let min = now.getMinutes();
  let sec = now.getSeconds();
  
  //조건문 if문
  //hr(시) 10보다 >=(크거나같을경우) ->(두자리수)
 /* if (hr >= 10) {
    hnum = hr;
  } else{
    hnum ='0' + hr;
  }
  if (min >= 10) {
    mnum = min
  }else{
    mnum = '0' + min;
  }
  if (sec >= 10) {
    senum = sec;
  }else{
    senum ='0' + sec;
  }
  document.querySelector('.phone-time').innerHTML =`${hnum} : ${mnum} : ${senum}`;*/
  //화면에 시간이 자동으로 찍히게 하는 공식
 // console.log(hnum,mnum,senum)
  //padStart() method
  
  //padStart() 메소드
  //값.padStart(자리수,채울 문자)
  //현재 문자열의 length가 자리수 보다 작을경우 채울 문자에 작성된 문자로 자리수만큼 채워주는 메소드임//
  //String(숫자) -> 숫자를 문자로 형변환해줌//
  hr = String(hr).padStart(2,'0');
  min = String(min).padStart(2,'0');
  sec = String(sec).padStart(2,'0');
  document.querySelector('.phone-time').innerHTML = hr + ':' + min + ':' + sec
  //시간에 맞춰서 배경이미지, 버튼 활성화
},2000)

let btnlist = document.querySelectorAll('.btn-list li');
let back = document.querySelector('#wrapper');
console.log(btnlist)

if (hr >= 6 && hr < 12) {
  back.classList.add('morning');
  btnlist[0].classList.add('on');
}else if(hr >= 12 && hr < 16){
  back.classList.add('afternoon');
  btnlist[1].classList.add('on');
}else if(hr >= 16 && hr < 20){
  back.classList.add('evening');
  btnlist[2].classList.add('on');
}else{
  back.classList.add('night');
  btnlist[3].classList.add('on');
}
//버튼 클릭시 배경 이미지 변경, on class add & remove 
btnlist.forEach(function (item) {
  //각 li a 태그의 HTML text를 backTxT 변수에 저장
  let backTxT = item.querySelector('a').innerHTML;
  let BackWrap = document.getElementById('back-wrap');
  //각 btn에 클릭 이벤트 추가해줘야 함//
  item.addEventListener('click', function (e) {
    //a태그 링크 이동하는것 막아주는것//
  e.preventDefault();  
  //on class remove 클릭된 버튼만 클릭되고 나머지버튼들은 활성화되지않는것
  btnlist.forEach(function (btn) {
    btn.classList.remove('on');
  })
 //현재 클릭된 요소에 on class add
 
  item.classList.add('on');
  //Element.ClassName = 'Class name';
  
  //기존에 class가 없으면 add,
  //반대로 class가 있다면 우측 class name 변경시켜줌//
  back.className = backTxT;
  })
 
  
})
//3. 16-19 까지 **evening** background-image
//4. 20~ **night** background-image