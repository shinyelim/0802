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
products.forEach(function (item) {
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
  
  

/*let shoInfo = document.createElement('div');
shoInfo.classList.add('sho-info');
boxItem.appendChild(shoInfo);*/

})

//creatElemet로 products length만큼 html 생성

/*let imgbox = document.createElement('img');
imgbox.src = 'https://www.baskinrobbins.co.kr/upload/product/1670827206.png';
document.querySelector('.box-list').appendChild(imgbox);*/






