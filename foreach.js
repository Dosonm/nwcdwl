const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.

data.forEach((task, ind) => { //하나일 때는 소괄호를 생략 가능하지만 두개 이상일 때는 생략 불가능
    //console.log(`${task.title}, 성공여부: ${task.isClear}`)
    const newtag = document.createElement('li');
    newtag.innerText = `${ind+1}. ${task.title}`;
    newtag.setAttribute('class', 'item')
    list.appendChild(newtag);
    if(task.isClear){
        newtag.classList.add('done')
    }
});
console.log(list)