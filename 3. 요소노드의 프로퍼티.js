window.onload = function(){ //js가 html보다 먼저 실행되는 버그 때문에 코드가 제대로 작동하지 않는데 이를 해결하기 위해 window.onload함수를 사용하여 해결함
    const choose_tag = document.querySelector('#p1');

        choose_tag.innerHTML += "<li>추가된 요소</li>"
        console.log(choose_tag.innerHTML) // 내부요소를 보여줌
        console.log(choose_tag.outerHTML) // 자신을 포함해서 전체를 보여줌
        console.log(choose_tag.textContent) // 오로지 textcontent만을 보여줌
}
    