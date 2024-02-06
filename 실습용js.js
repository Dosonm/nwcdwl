console.log('준비완료')

function print_argument(a,b){
    for(const arg of arguments){
        console.log(arg)
    }
}

const console_argument = function(a,b,c){
    for(const argu of arguments){
        console.log(argu)
    }
}

print_argument('1','2','3','4')
console_argument('5','6','7','8')

function firstWords() {
    let word = '';
  const arg = arguments;
  console.log(arg[0]);
  console.log(arg[1]);
    
    console.log('구분----------')

  for(const arg of arguments) {
    console.log(arg[0])
  }
}
  firstWords('나만', '없어', '고양이');
  firstWords('아니', '바나나말고', '라면먹어');
  firstWords('만두', '반으로', '잘라먹네', '부지런하다');
  firstWords('결국', '자바스크립트가', '해피한', '지름길');
  firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');

  let topic = "";
  let word = topic + "단어";
  console.log(word)

  const numbers = [1,2,3];
  console.log(numbers); // 배열을 보여줌
  console.log(...numbers) //spread 구문으로 

  const user = {
    a:'1',
    b:'2'
  }
  const optional_chaining = user.name?.a;
  // console.log(optional_chaining);
  console.log(optional_chaining)

  const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성하세요
//quiz.forEach((problem, ind) => {
//  console.log([ind])
//});
const answer = quiz.map((problem, ind) => {
  return problem[ind];
})

//테스트 코드
console.log(answer);

const seoul = ['김영훈', '김윤수', '김동욱', '강대위', '김영준',
  '김규식', '김태호', '김효신', '손효준', '김현승', '김재하', '김유나',
  '김재훈', '김혜선', '김민환', '김규리', '김소원', '김우재', '최영준',
  '김태순', '김종훈', '김성환', '김승용', '김지혜', '이승욱', '김도현',
  '김승규', '윤하은', '김유진', '김정민', '김혜정', '김예진', '김여진',
  '김성희', '김혜수', '김인선', '김상필', '김혜진', '서상원', '김상혜',
  '김민기', '김그루', '김희지'];

// 여기에 코드를 작성해 주세요.
const notKims = seoul.filter(ele => {
    return ele[0] !== '김'
})


// 테스트 코드
console.log(notKims);

const obj = {
  a:'apple',
  b:['q','w','e','r']
}
const {a,b} = obj
console.log(obj)