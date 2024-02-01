  //rest parameter
  const participants = function(first, second, ...rest){
    console.log('우승자는: ' + [first] + "입니다");
    console.log('준우승자는: ' + [second] + "입니다");
    for(partici of rest){
        console.log("참여자: " + [partici]);
    }
  }

  participants('A','B','C','D','E')

  const ignoreFirst = function(first,...rest){
    for(const ag of rest){
        console.log(ag);
    }
  }

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);