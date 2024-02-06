// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요
const numbers = [1, 2, 3];

const [one, two, three] = numbers;

// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];

const [livingRoom, ...kitchen] = products

// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요
let firstName = 'Kang';
let lastName = 'Young';

[firstName, lastName] = [lastName, firstName]

// 테스트 코드
console.log(one);
console.log(two);
console.log(three);
console.log(livingRoom);
console.log(kitchen[1]);
console.log(firstName);
console.log(lastName);



// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당해 주세요
const myBestArt = {
	title: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};

const {title,artist,year,medium} = myBestArt;

// 2. Destructuring 문법을 활용해서 myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 나머지는 rest라는 변수에 객체로 할당해 주세요
const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};

const {title: songName, artist: singer, ...rest} = myBestSong;

// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
	//  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다
	const {name, ice = true} = menu;

	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}



// 테스트 코드
console.log(title);
console.log(artist);
console.log(year);
console.log(medium);
console.log(songName);
console.log(singer);
console.log(rest);
printMenu(menu1);
printMenu(menu2);
printMenu(menu3);

const lastobject = {
	a: "apple",
	b: "banana",
	c: "cake",
	d: "desert"
}

// const lastfc = function(taken){
// 	const {a,b,c} = taken;
// 	console.log("선택한 상품은 " + a + "입니다");
// 	console.log(`두 번째 상품은 ${b}입니다`);
// 	console.log(`마지막 상품은 ${c}입니다`);
// }

const lastfc = function({a,b,c}){
	console.log("선택한 상품은 " + a + "입니다");
 	console.log(`두 번째 상품은 ${b}입니다`);
 	console.log(`마지막 상품은 ${c}입니다`);
}

lastfc(lastobject);