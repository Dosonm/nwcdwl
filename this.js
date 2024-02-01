function printThisTitle() {
    console.log(this.title);
  }
  
  const courseA = {
    title: '프로그래밍 기초 in JavaScript',
    printTitle: printThisTitle,
  };
  
const courseB = {
    title: '컴퓨터 개론',
    printTitle: courseA.printTitle,
  };
  
  const courseC = {
    title: '웹 퍼블리싱',
    printTitle: courseB.printTitle,
  };
  
  courseA.printTitle();
  courseB.printTitle();
  courseC.printTitle();



  //const getFullName = () => `${this.firstName} ${this.lastName}`;
  const getFullName = function(){
    // console.log([this.firstName] + [this.lastName])
    console.log(this.firstName + '' + this.lastName)
  }

const user = {
  firstName: 'Ted',
  lastName: 'Chang',
  getFullName: getFullName,
};

console.log(user.getFullName());
