const spait = [
    { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
    { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
    { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
    { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
    { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
    { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  ];
  
  function checkSpy(team) {
    // 여기에 코드를 작성하세요
    // const {codeName, members} = team 이렇게 하면 team.members이렇게 안 쓰고 바로 members 쓸 수 있음 // Destructuring은 코드를 더 간결하고 가독성 있게 만들며, 코드 작성과 유지보수를 더 편리하게 합니다.
    const check = team.members.every(mem => {
        return mem === "스파이";
    })
    if(check){
       const message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`
       console.log(message);
    } else{
        const message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`
        console.log(message);
    }
       
  }
  
  // 테스트 코드
  spait.forEach((team) => checkSpy(team)); //콜백함수임 checkspy()란에는 실행할 함수가 들어가야하는데 다른 함수를 대신 실행시켜서 값을 가져오는 콜백함수임