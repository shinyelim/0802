//label 클릭했을때
//클릭된 label에 자식인 checkbox-img에 checked class toggle 시켜줘야 됨//
$('label').on('click', function (e) {
  //e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');
  //클릭된 label의 자식인 .checkbox-img class 에
  //<input type="checkbox">의 속성 checked  

  if ($(this).children('.checkbox-img').hasClass('checked')){
    //checkbox-img,checked라는 class가 있을경우만 참으로 됨
   $(this).children('input[type="checkbox"]').attr('checked',true);
    //*attr:속성을 가져오기,바꾸기
  }else{
    $(this).children('input[type="checkbox"]').removeattr('checked'); 
  }//else 경우에는  위의 속성이 없어진다.//
})
