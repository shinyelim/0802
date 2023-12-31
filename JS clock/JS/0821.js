//javascript로 html요소로 생성함//
//createElement('태그네임')
 /*let PTag = document.createElement('p');
PTag.innerHTML = '안녕하세요';
//태그에 class을 넣어주고 싶을때
PTag.classList.add('text');
document.querySelector('.box-list').appendChild();*/
//box-list안에 h1태그로 생성
/*let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'apple';

document.querySelector('.box-list').appendChild(h1Tag);*/


let products = [
  {
    img:'https://www.baskinrobbins.co.kr/upload/product/1670827206.png',
    title:'민트초코',
    Price: '6000원'
    
  },
  {
    img:'https://www.baskinrobbins.co.kr/upload/product/1670827275.png',
    title:'이상한나라의 솜사탕',
    Price:'7800원'
  },
  
  {
    img:'https://www.baskinrobbins.co.kr/upload/product/1452062933.png',
    title:'아몬드 봉봉',
    Price:'8000원'

  },
  {
    img:'https://www.happyconstore.com/file/image/202308031031043518',
    title:'아이스모찌',
    Price:'3600원'
 
  },
  {
    img:'https://www.happyconstore.com/file/image/202308081105063523',
    title:'아이스 마카롱',
    Price:'1개당 3800원' 
  },
  {
    img:'https://www.happyconstore.com/file/image/202308030907573506',
    title:'더블레귤러 아이스크림',
    Price:'7800원' 
  }
]
let list = document.querySelector('.box-list');
console.log(list);
//let imgBox = '<div class="img-box"><img src="https://www.happyconstore.com/file/image/202308031031043518"></div>';
//document.querySelector('.box-list').insertAdjacentHTML('beforeend',imgBox);

products.forEach(function (item,index) {
  //div박스 생성//
  let boxItem = `<div class="box-item"></div>`;
  document.querySelector('.box-list').insertAdjacentHTML('beforeend',boxItem);
//내가 원하는 위치에 insert//
let boxImg = `<img src="${item.img}" alt="${item.title}">`   
document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend',boxImg);

let shoInfo = `<div class="sho-info"></div>`;
document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend',shoInfo);
let boxTitle =`<h2>${item.title}</h2>`;
document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend',boxTitle);
let boxPrice = `<p>${item.Price}</p>`;
document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend',boxPrice);


})

//insertAdjacentHTML 사용/ backtick을 이용해서 코드 축약
//products라는 배열을 순회하면서 가져온 값 => item parameter값이다.
//item.img => item에서 img라는 key값의 value
products.forEach(function (item) {
  let boxItem = `
  <div class="box-item">
  <img src="${item.img}" alt="${item.title}">
  <div class="sho-info">
  <h1>${item.title}</h1>
  <p>${item.Price}</p>
  
  </div> 
  </div>
  `
  document.querySelector('.box-list').insertAdjacentHTML('beforeend',boxItem);
})
/*products.forEach(function (item) {
  let boxItem = document.createElement('div');
  boxItem.classList.add('.box-item');
  list.appendChild(boxItem);
  //왼쪽은 어디에 어펜드 할것인지 오른쪽은 어펜트 할 함수를 넣어야한다. <=(append 할 정의하는 함수).appendChild(append할 함수명)
  let boxImg = document.createElement('img');
  boxImg.src = item.img;
  boxImg.alt = item.title;
  boxItem.appendChild(boxImg);
  //img 넣는법
  let shoInfo = document.createElement('div');
  shoInfo.classList.add('sho-info');
  boxItem.appendChild(shoInfo);
  
  let boxTitle = document.createElement('h1');
  boxTitle.innerHTML = item.title;
  shoInfo.appendChild(boxTitle);
  let boxPrice = document.createElement('p');
  boxPrice.innerHTML = item.Price;
  shoInfo.appendChild(boxPrice);
  
  })

/*let shoInfo = document.createElement('div');
shoInfo.classList.add('sho-info');
boxItem.appendChild(shoInfo);*/


//Javascript로 html 생성하는 방법2 (최신문법)
/*let pTag = '<p class="text">html to~ </p>';
//('.').insertAdjacentHTML(추가할 위치) => 문자형 html을 넣어주는 함수
//첫번째 파라미터:추가 할 위치(**beforeend = 안쪽 맨밑)
//두번째 파라미터:추가 할 html 문자를 넣으면 됨//

document.querySelector('.box-list').insertAdjacentHTML('beforeend',pTag);


//creatElemet로 products length만큼 html 생성

/*let imgbox = document.createElement('img');
imgbox.src = 'https://www.baskinrobbins.co.kr/upload/product/1670827206.png';
document.querySelector('.box-list').appendChild(imgbox);*/






