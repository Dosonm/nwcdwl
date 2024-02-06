const apple = "1";
const banana = "2";
const exfunc = function(){
    console.log('올바른 출력');
}

const object = {
    ['snack' + 'town'] : '유튜버',
    [apple] : '속성이 1이고 값은 이 텍스트입니다',
    banana,
    exfunc,
    // newfucn : function(){

    // }
    newfunc() {
        console.log('객체 내에서 축약형 함수')
    }
}
console.log(object)
object.newfunc()