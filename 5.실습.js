const choose = document.getElementById('to-do-list');

const firstnode = document.createElement('li');
firstnode.innerText = '자바스크립트 공부하기';
choose.prepend(firstnode);

const secondnode = document.createElement('li');
secondnode.innerText = '집가서 머리 자르기';
firstnode.after(secondnode);

const thirdnode = document.createElement('li');
thirdnode.innerText = '운동가기';
secondnode.after(thirdnode);

//일단 createlement로 요소노드를 만들고 그 요소 노드에 innertext나 innerhtml로 요소노드를
//완성시킨 후에 prepend,append,before,after로 맞는 자리에 집어 넣는다.