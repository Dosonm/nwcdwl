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
  console.log(numbers);
  console.log(...numbers)