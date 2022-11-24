const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 20;
const select = [0, 0, 0, 0, 0, 0, 0, 0];
var tendencies=[0.0, 0.0, 0.0, 0.0]
var weights=[0.0, 0.0, 0.0, 0.0]
//class of travelable city
class City{
    constructor(city,activity,budget,
			weather,cultural, nation,index,
			cityKorean,nationKorean,score){
		this.index=index;
		this.city=city;
		this.activity=activity;
		this.budget=budget;
		this.weather=weather;
		this.cultural=cultural;
		this.nation=nation;
		this.score=score;
		this.cityKorean=cityKorean;
		this.nationKorean=nationKorean;
	}
}
// manually input
{
var cities=new Array();
cities.push(new City('Hong Kong',7,3,7.43,8,'Hong Kong',0,'홍콩','홍콩',0))
cities.push(new City('Bangkok',2,2,9.34,2,'Thailand',1,'방콕','태국',0))
cities.push(new City('London',7,7,2.91,4,'United Kingdom',2,'런던','영국',0))
cities.push(new City('Singapore',6,4,9.41,7,'Singapore',3,'싱가포르','싱가포르',0))
cities.push(new City('Macau',8,3,7.16,8,'Macau',4,'마카오','마카오',0))
cities.push(new City('Paris',10,8,2.39,1,'France',5,'파리','프랑스',0))
cities.push(new City('Dubai',9,7,8.54,10,'United Arab Emirates',6,'두바이','아랍에미리트',0))
cities.push(new City('New York City',10,9,2.31,8,'USA',7,'뉴욕시','미국',0))
cities.push(new City('Kuala Lumpur',4,2,9.34,7,'Malaysia',8,'쿠알라 룸프르','말레이시아',0))
cities.push(new City('Shenzhen',9,2,7.16,8,'China',9,'선전','중국',0))
cities.push(new City('Phuket',1,2,9.19,1,'Thailand',10,'푸켓','태국',0))
cities.push(new City('Istanbul',8,6,3.48,3,'Turkey',11,'이스탄불','튀르키예',0))
cities.push(new City('Delhi',7,5,6.88,3,'India',12,'델리','인도',0))
cities.push(new City('Tokyo',8,1,3.78,7,'Japan',13,'도쿄','일본',0))
cities.push(new City('Rome',8,7,3.89,1,'Italy',14,'로마','이탈리아',0))
cities.push(new City('Antalya',2,6,5.04,3,'Turkey',15,'안탈리아','튀르키예',0))
cities.push(new City('Taipei',6,1,7.43,6,'Taiwan',16,'타이베이','대만',0))
cities.push(new City('Guangzhou',7,2,7.34,7,'China',17,'광저우','중국',0))
cities.push(new City('Mumbai',8,5,9.15,6,'India',18,'뭄바이','인도',0))
cities.push(new City('Prague',6,7,1.51,3,'Czech Republic',19,'프라하','체코',0))
cities.push(new City('Mecca',9,6,9.47,1,'Saudi Arabia',20,'메카','사우디아라비아',0))
cities.push(new City('Miami',2,8,8.34,7,'USA',21,'마이애미','미국',0))
cities.push(new City('Amsterdam',3,7,2.07,3,'Netherlands',22,'암스테르담','네덜란드',0))
cities.push(new City('Seoul',8,0,1.39,6,'South Korea',23,'서울','대한민국',0))
cities.push(new City('Pattaya',1,2,9.37,1,'Thailand',24,'파타야','태국',0))
cities.push(new City('Shanghai',8,2,3.58,6,'China',25,'상하이','중국',0))
cities.push(new City('Los Angeles',6,8,6.09,8,'USA',26,'로스앤젤레스','미국',0))
cities.push(new City('Las Vegas',9,10,3.1,10,'USA',27,'라스베이거스','미국',0))
cities.push(new City('Agra',4,4,6.88,1,'India',28,'아그라','인도',0))
cities.push(new City('Osaka',3,1,3.89,5,'Japan',29,'오사카','일본',0))
cities.push(new City('Barcelona',7,9,5.04,2,'Spain',30,'바르셀로나','스페인',0))
cities.push(new City('Mexico City',5,8,5.57,3,'Mexico',31,'멕시코 시티','멕시코',0))
cities.push(new City('Porto',3,9,4.3,2,'Portugal',32,'포르투','포르투갈',0))
cities.push(new City('Quebec City',4,8,0.45,3,'Canada',33,'퀘벡시','캐나다',0))
cities.push(new City('Beijing',7,2,1.12,6,'China',34,'베이징','중국',0))
cities.push(new City('Chicago',6,7,1.45,7,'USA',35,'시카고','미국',0))
cities.push(new City('Abu Dhabi',7,6,8.6,10,'United Arab Emirates',36,'아부다비','아랍에미리트',0))
cities.push(new City('Madrid',6,9,2.91,3,'Spain',37,'마드리드','스페인',0))
cities.push(new City('Sydney',2,6,7.76,6,'Australia',38,'시드니','호주',0))
cities.push(new City('Lisbon',5,9,5.04,3,'Portugal',39,'리스본','포르투갈',0))
cities.push(new City('Vienna',3,7,1.78,2,'Austria',40,'빈','오스트리아',0))
cities.push(new City('Berlin',6,6,1.51,5,'Germany',41,'베를린','독일',0))
cities.push(new City('Venice',1,5,2.31,1,'Italy',42,'베니스','이탈리아',0))
cities.push(new City('Honolulu',0,6,8.77,3,'USA',43,'호놀룰루','미국',0))
cities.push(new City('Jeju Island',1,0,3.39,4,'South Korea',44,'제주도','대한민국',0))
cities.push(new City('Cairo',9,9,6.88,0,'Egypt',45,'카이로','이집트',0))
cities.push(new City('Bali',0,4,9.23,3,'Indonesia',46,'발리','인도네시아',0))
cities.push(new City('Toronto',8,8,1.28,7,'Canada',47,'토론토','캐나다',0))
cities.push(new City('Cebu',0,2,9.34,3,'Philippines',48,'세부','필리핀',0))
cities.push(new City('Home',0,0,1.39,5,'South Korea',49,'집','대한민국',0))
cities.push(new City('San Francisco',3,6,4.72,8,'USA',50,'샌프란시스코','미국',0))
cities.push(new City('Washington DC',7,7,2.31,3,'USA',51,'워싱턴 D.C.','미국',0))
cities.push(new City('Guam',1,5,9.47,3,'USA',52,'괌','미국',0))
cities.push(new City('Florida',4,7,8.34,6,'USA',53,'플로리다','미국',0))
cities.push(new City('Okinawa',1,2,7.6,4,'Japan',54,'오키나와','일본',0))
cities.push(new City('Kyoto',4,1,3.29,3,'Japan',55,'교토','일본',0))
cities.push(new City('Yokohama',3,1,3.78,7,'Japan',56,'요코하마','일본',0))
cities.push(new City('Moscow',6,4,0.4,4,'Russia',57,'모스크바','러시아',0))
cities.push(new City('Vladivostok',7,3,0.14,5,'Russia',58,'블라디보스토크','러시아',0))
cities.push(new City('Milan',8,8,2.31,8,'Italy',59,'밀라노','이탈리아',0))
cities.push(new City('Montreal',7,7,0.65,8,'Canada',60,'몬트리올','캐나다',0))
cities.push(new City('Vancouver',5,7,2.15,7,'Canada',61,'밴쿠버','캐나다',0))
cities.push(new City('Ottawa',4,7,0.47,5,'Canada',62,'오타와','캐나다',0))
cities.push(new City('Sevilla',7,9,4.94,3,'Spain',63,'세비야','스페인',0))
cities.push(new City('Jakarta',6,3,9.44,6,'Indonesia',64,'자카르타','인도네시아',0))
cities.push(new City('Hanoi',3,2,7.76,4,'Vietnam',65,'하노이','베트남',0))
cities.push(new City('Da Nang',2,2,8.6,3,'Vietnam',66,'다낭','베트남',0))
cities.push(new City('Busan',3,0,2.91,7,'South Korea',67,'부산','대한민국',0))
cities.push(new City('Gyeongju',8,0,2.39,1,'South Korea',68,'경주','대한민국',0))
cities.push(new City('Jeonju',7,0,1.92,3,'South Korea',69,'전주','대한민국',0))
cities.push(new City('Yeosu',2,0,2.82,6,'South Korea',70,'여수','대한민국',0))
cities.push(new City('Vientiane',7,2,8.65,2,'Laos',71,'비엔티안','라오스',0))
cities.push(new City('Luang Prabang',3,2,8.34,3,'Laos',72,'루앙프라방','라오스',0))
cities.push(new City('Kota Kinabalu',1,2,9.34,3,'Malaysia',73,'코타키나발루','말레이시아',0))
cities.push(new City('Munich',7,7,1.28,3,'Germany',74,'뮌헨','독일',0))
cities.push(new City('Hamburg',6,7,1.64,4,'Germany',75,'함부르크','독일',0))
cities.push(new City('Brussels',6,8,1.99,3,'Belgium',76,'브뤼셀','벨기에',0))
cities.push(new City('Bruges',4,8,2.31,4,'Belgium',77,'브뤼허','벨기에',0))

}
function calResult(){ 
  //console.log(tendencies);
  for(let i = 0; i < cities.length; i++){
    cities[i].score+=Math.abs(tendencies[0]-cities[i].activity)*weights[0]
    cities[i].score+=Math.abs(tendencies[1]-cities[i].budget)*weights[1]
    cities[i].score+=Math.abs(tendencies[2]-cities[i].weather)*weights[2]
    cities[i].score+=Math.abs(tendencies[3]-cities[i].cultural)*weights[3]
    console.log(cities[i].score);
  }
  cities=cities.sort(function(city1, city2){ return city1.score>city2.score?1:-1;});
  
  //console.log(cities);
  //ybti appending
  var ybti='';
  var ybtinum=0;
  tendencies[0]<5?ybti+='H':ybti+='T';
  tendencies[1]<5?ybti+='B':ybti+='L';
  tendencies[2]<5?ybti+='F':ybti+='S';
  tendencies[3]<5?ybti+='C':ybti+='M';
  console.log(ybti);
  console.log(tendencies);

  switch(ybti){
    case "HBFC":num=0;break;
    case "HBFM":num=1;break;
    case "HBSC":num=2;break;
    case "HBSM":num=3;break;
    case "HLFC":num=4;break;
    case "HLFM":num=5;break;
    case "HLSC":num=6;break;
    case "HLSM":num=7;break;
    case "TBFC":num=8;break;
    case "TBFM":num=9;break;
    case "TBSC":num=10;break;
    case "TBSM":num=11;break;
    case "TLFC":num=12;break;
    case "TLFM":num=13;break;
    case "TLSC":num=14;break;
    case "TLSM":num=15;break;
  }
  console.log(num);
  //var result = select.indexOf(Math.max(...select));
  return num;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML += infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML += infoList[point].desc;

  const bestDesc1 = document.querySelector('.resultDesc');
  bestDesc1.innerHTML += "당신에게 추천드리는 베스트1 도시는?"

  var bestImg1 = document.createElement('img');
  const bestimgDiv1 = document.querySelector('#resultImg');
  var bestimgURL1 = '../cityimage/' + cities[0].index + '.jpg';
  bestImg1.src = bestimgURL1;
  bestImg1.alt = cities[0].index;
  bestImg1.classList.add('img-fluid');
  bestimgDiv1.appendChild(bestImg1);

  const bestresultDesc1 = document.querySelector('.resultDesc');
  bestresultDesc1.innerHTML += cities[0].cityKorean;
  bestresultDesc1.innerHTML +=", "
  bestresultDesc1.innerHTML += cities[0].nationKorean;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      //var target = qnaList[qIdx].a[idx].type;
      // for(let i = 0; i < target.length; i++){
      //   select[target[i]] += 1;
      // }
      var tg = qnaList[qIdx].a[idx].typ;
      if(qIdx<16)
      {
       tendencies[tg[0]]+=0.5*tg[1];
      }else{
        weights[tg[0]]=tg[1];
      }
      //console.log(tendencies,weights)
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
