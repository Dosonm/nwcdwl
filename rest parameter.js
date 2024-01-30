  //rest parameter
  const participants = function(first, second, ...rest){
    console.log('우승자는: ' + [first] + "입니다");
    console.log('준우승자는: ' + [second] + "입니다");
    for(partici of rest){
        console.log("참여자: " + [partici]);
    }
  }

  participants('A','B','C','D','E')