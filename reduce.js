const data = [ 
    { company: 'Naber', month: 3 },
      { company: 'Amajohn', month: 12 },
      { company: 'Coogle', month: 10 },
    { company: 'Ittel', month: 6 },
    { company: 'Sasung', month: 4 },
    { company: 'CaCao', month: 3 },
      { company: 'Microhard', month: 17 },
  ];
  
  // 여기에 코드를 작성하세요
  const totalCareer = data.reduce((acc,cuval,ind,arr) => {
    const {company, month} = cuval; //각 요소 배열을 나타내는 건 cuval이고 전체 배열을 나타내는게 arr임
    console.log(company, month)
    return acc + month;
    
  },0)
  
  console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);