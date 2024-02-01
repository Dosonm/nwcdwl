let msg = '';  //msg라는 변수는 문자열이다
let x = 5

if (x > 3) {
  msg = 'x는 3보다 크다.';
} else {
  msg = 'x는 3보다 크지 않다.';
}

let msg2 = x>3 ? 'y는 3보다 크다' : 'y는 3보다 크지 않다'    //위의 if문을 조건연산자로 조금 더 간편하게 만든거

console.log(msg)
console.log(msg2)