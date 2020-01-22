// 변수에 함수를 저장하는 방법
// 1.
const C = function() {
  console.log("Hello world");
};

C();

// 2. Unknown-Function : 이름없는 함수
function Foo() {
  return function() {
    console.log("I am Return Func");
  };
}

const F = Foo();

F();

// 3. array Function
//    함수 = 매개변수 + 리턴
//    const A = (매개변수) => {리턴}
// 1)
const B = error => {
  console.log(error);
};

B("ayayaya");
// -> "ayayaya" 가 매개변수 error 값으로 들어감

// 2) 매개변수가 1개일 경우에는 () 생략가능
//    return이 간단할 경우에는 return, {} 생략가능
const BB = error => {
  return "ERROR MSG: " + error;
};

BB("ayayaya");

// 3) 2) 코드를 한 줄로 표현 가능
const BBB = error => "ERROR MSG: " + error;

BBB("ayayaya");
