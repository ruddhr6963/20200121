// 콜백함수 : 순서대로 동작하기 위해서 사용
// 자바스크립트 : 싱글스레드 비동기

// 콜백함수
const d = callback => {
  console.log(":a");
  return callback;
}

d();

// array helper function 클래스
// 1. map(item, index) : 모든 요소마다 특정한 일을 해서 결과를 만들어 내는 것
//                     : 필요한 매개변수만 사용
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < 10; i++){
  arr[i] = i + 1;
}

const mappedArr = arr.map(item => item + 1)
console.log(mappedArr);

// 2. reduce : 모든 요소마다 특정한 일을 해서 결과를 만들어 내는 것
const reducedArr = arr.reduce((totalVal, curVal) => totalVal + curVal);
console.log(reducedArr);

//const totalVal = 0;
//for(var j = 0; j < arr.length; j++){
//  totalVal += arr[j];
//}

// 3. filter
const filterArr = arr.filter(item => item % 2 === 0);
console.log(filterArr);

//const NewArr = [];
//for(var i = 0; i < arr.length; i++){
//  if(arr[i] % 2 == 0)
//    NewArr.push( arr[i] );
//}

// 홀수인 값을 모두 더하세요
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArr = arr2.filter(item => item % 2 === 1 );
const totalArr = sumArr.reduce((totalVal, curVal) => totalVal + curVal);

console.log(totalArr);