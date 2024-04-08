const quizWrap = document.querySelector('.quiz__wrap');




const quizInfo = [
    {
        num: "01",
        type: "변수",
        question: "다음 샘플코드에서 콘솔로그에 출력될 값을 입력해주세요.",
        sample: `let number = 1;
let number2 = 10;

number = number+number2;

number2 = number - 1;

console.log(number+number2);`,
        answer: "21",
        desc: "number는 number+number2를 해서 다시 저장했음으로 number는 11이 되었고, 그뒤에 number2는 number-1를 저장했음으로 10이 되었습니다. 마지막 콘솔에서는 11(number)+10(number2)으로 값을 계산합니다."
    },
    {
        num: "02",
        type: "변수",
        question: "다음 샘플코드에서 콘솔로그에 출력될 값을 골라주세요.",
        sample: `let x = 10;
let y = x + 1;

let a = 20;
let b = a + 1;

let c = x + a;
let d = y + b;

console.log(x+y+a+b+c+d);`,
        choices: ["122", "94", "124", "102"],
        answer: "3",
        desc: "각 변수들의 최종 값은 x = 10 , y = 11 , a = 20 , b = 21 , c = 30, d = 32 임으로 모두를 더한 값은 124 입니다."
    },
    {
        num: "03",
        type: "객체",
        question: "샘플 코드에서 carKeys 변수에 할당된 값은 무엇입니까?",
        sample: `let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

let carKeys = Object.keys(car);`,
        choices: [`["brand", "model", "year"]`, `["Toyota", "Corolla", 2022]`, `["Toyota", "Corolla", "year"]`, `[brand, model, year]`],
        answer: "1",
        desc: `Object.keys() 메서드는 객체의 속성 이름들을 배열로 반환합니다. 따라서 car 객체의 키들인 "brand", "model", "year"이 carKeys 변수에 할당됩니다.`
    },
    {
        num: "04",
        type: "객체",
        question: "콘솔로그에 들어갈 코드를 작성해주세요",
        sample: `const obj = { a: 100, b: { x: 200, y: 300 }, c: "javascript" };
    
console.log() // 300`,
        answer: "obj.b.y",
        desc: "이 문제에서는 obj 객체 안에 있는 속성 b의 내부 속성 y의 값을 콘솔에 출력하는 코드를 작성해야 합니다. 코드는 obj.b.y입니다"
    },
    {
        num: "05",
        type: "연산자",
        question: "조건문이 'true'를 반환해야 하는경우 빈칸에 들어갈 연산자를 선택해주세요.",
        sample: `let answer = 1000;
function solution(number){
    if(number (__) answer) {
        console.log('yes')
    }else {
        console.log('no')
    }
}
solution(1300)
        `,
        choices: ["<", ">", "==", "="],
        answer: "2",
        desc: "주어진 코드에서 조건문이 'true'를 반환하려면 변수 `number`가 변수 `answer`보다 큰지를 비교해야 합니다. 따라서 올바른 연산자는 `>`입니다."
    },
    {
        num: "06",
        type: "배열+객체+조건문+반복문+함수",
        question: "다음 코드의 출력 결과는 무엇입니까?",
        sample: `function calculateAverage(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    const average = total / numbers.length;
    return average;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateAverage(numbers);
console.log(result);`,
        answer: "3",
        desc: "위의 코드는 주어진 숫자 배열의 평균을 계산하는 JavaScript 함수를 나타냅니다. 함수는 배열의 모든 요소를 합한 후 배열의 길이로 나누어 평균을 계산합니다. 예시에서는 [1, 2, 3, 4, 5] 배열의 평균을 계산하고 출력합니다."
    },
    {
        num: "07",
        type: "조건문",
        question: "다음 코드의 실행 결과는 무엇입니까?",
        sample: `let numbers = 1;
if(numbers != 2){
    if(numbers == (2-1)){
        if(numbers < 3){
            let tf = numbers > 3;
            console.log(""+ tf +" = " + numbers +"")
        }
    }
}`,
        choices: ["true = 1", "false = 1", "true = 0", "false = 0"],
        answer: "2",
        desc: `주어진 코드는 다음과 같은 조건을 검사합니다:<br>
        numbers가 2가 아닌지 확인합니다. (참)<br>
        numbers가 2-1 즉, 1과 같은지 확인합니다. (참)<br>
        numbers가 3보다 작은지 확인합니다. (참)<br>
        따라서 tf 변수는 numbers > 3 조건을 만족하지 않으므로 false가 됩니다. 따라서 출력 결과는 false = 1이 됩니다.`
    },
    {
        num: "08",
        type: "반복문",
        question: "다음 코드에 결과 값은 무엇입니까?",
        sample: `let numbers = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}`,
        choices: ["1,2,3,4,5,6", "0,1,2,3,4,5", "0,1,2,3,4,5,6", "1,2,3,4,5,6,7"],
        answer: "3",
        desc: "DELETE는 레코드(튜플) 삭제 명령어이며, DROP은 데이터베이스, 테이블, 뷰 삭제 명령어입니다."
    },
    {
        num: "09",
        type: "변수+배열+조건문+반복문",
        question: "다음 코드의 출력 결과는 무엇입니까?",
        sample: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);`,
        choices: [`[1, 3, 5, 7, 9]`, `[2, 4, 6, 8, 10]`, `[1, 3, 5, 7, 8, 9, 10]`, `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`],
        answer: "2",
        desc: "주어진 배열에서 짝수를 판별하기 위해 나머지 연산자 %를 사용합니다. 짝수는 2로 나누었을 때 나머지가 0이 되기 때문에 % 연산자를 사용하여 나머지가 0인 경우를 확인합니다."
    },
    {
        num: "10",
        type: "배열+객체+조건문+반복문+함수",
        question: "다음 코드의 출력 결과는 무엇입니까?",
        sample: `function calculateTotal(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateTotal(numbers);
console.log(result);`,
        answer: "15",
        desc: "주어진 코드는 배열 numbers 안에 있는 숫자들의 합계를 계산하는 함수 calculateTotal()을 정의하고, 그 함수를 이용하여 합계를 계산한 후 출력하는 코드입니다. 주어진 numbers 배열의 숫자들의 합계는 1 + 2 + 3 + 4 + 5로 총 15입니다."
    }
];

// 변수
let currentIndex = 0; // 현재 문제에 대한 값

let good_answer = 0;
let bad_answer = 0;


const updateQuiz = (index) => {
    let quizWrapTag =``;
     quizWrapTag +=`<div class="quiz">`;
        quizWrapTag +=`<div class="quiz__header">${quizInfo[index].type}</div>`;
            quizWrapTag +=`<div class="quiz__main">`;
                quizWrapTag +=`<div class="question"><span>${quizInfo[index].num}. ${quizInfo[index].question}</span></div>`;
                quizWrapTag +=`<div class="sample_code"><pre><code class="language-js">${quizInfo[index].sample}</code></pre></div>`;
                if(quizInfo[index].hasOwnProperty('choices')){
                    quizWrapTag +=`<div class="choises">`;
                        quizWrapTag +=`<label for="choises-1" class="quiz__choice">`;
                            quizWrapTag +=`<input type="radio" name="choises" id="choises-1" value="1">`;
                            quizWrapTag +=`<span>${quizInfo[index].choices[0]}</span>`;
                        quizWrapTag +=`</label >`;
                        quizWrapTag +=`<label for="choises-2" class="quiz__choice">`;
                            quizWrapTag +=`<input type="radio" name="choises" id="choises-2" value="2">`;
                            quizWrapTag +=`<span>${quizInfo[index].choices[1]}</span>`;
                        quizWrapTag +=`</label>`;
                        quizWrapTag +=`<label for="choises-3" class="quiz__choice">`;
                            quizWrapTag +=`<input type="radio" name="choises" id="choises-3" value="3">`;
                            quizWrapTag +=`<span>${quizInfo[index].choices[2]}</span>`;
                        quizWrapTag +=`</label>`;
                        quizWrapTag +=`<label for="choises-4" class="quiz__choice">`;
                            quizWrapTag +=`<input type="radio" name="choises" id="choises-4" value="4">`;
                            quizWrapTag +=`<span>${quizInfo[index].choices[3]}</span>`;
                        quizWrapTag +=`</label>`;
                    quizWrapTag +=`</div >`;
                }else {
                    quizWrapTag +=`<div class="choises">`;
                        quizWrapTag +=`<input type="text" id="typing_answer">`;
                    quizWrapTag +=`</div >`;
                }
                quizWrapTag +=`<div class="answer none">${quizInfo[index].answer}</div>`;
                quizWrapTag +=`<div class="desc none">${quizInfo[index].desc}</div>`;
            quizWrapTag +=`</div >`;
            quizWrapTag +=`<div class="quiz__footer">`;
                quizWrapTag +=`<button class="confirm">정답 확인하기</button>`;
                quizWrapTag +=`<button class="next none">다음문제</button>`;
            quizWrapTag +=`</div>`;
        quizWrapTag +=`</div>`;
    quizWrap.innerHTML = quizWrapTag;
    Prism.highlightAll();

    // 선택자
    const quizConfirm = quizWrap.querySelector('.confirm');
    const quizNext = quizWrap.querySelector('.next');
    // 정답 버튼을 클릭
    quizConfirm.addEventListener('click', () => {
        if(quizInfo[index].hasOwnProperty('choices')){
            const quizChecked = quizWrap.querySelector(`input[name="choises"]:checked`)
            if (quizChecked) {
                const userAnswer = quizChecked.value
                const quizAnswer = quizInfo[index].answer
                const quizElement = quizWrap.querySelector(`.quiz`)
                const answerElement = quizWrap.querySelector(`.answer`)
                const descElement = quizWrap.querySelector(`.desc`)

                if (userAnswer == quizAnswer) {
                    quizElement.classList.add('good')
                    good_answer++;
                } else {
                    quizElement.classList.add('bad')
                    answerElement.classList.remove('none')
                    bad_answer++;
                }
                descElement.classList.remove('none')
                quizNext.classList.remove('none')
                quizConfirm.classList.add('none')
            } else {
                alert('보기를 선택해주세요!');
            }
        }else {
            const quizValue = quizWrap.querySelector(`#typing_answer`).value
            const userAnswer = quizValue
            const quizAnswer = quizInfo[index].answer
            const quizElement = quizWrap.querySelector(`.quiz`)
            const answerElement = quizWrap.querySelector(`.answer`)
            const descElement = quizWrap.querySelector(`.desc`)
            if (userAnswer == ""){
                alert('답을 입력해주세요!');
            }else {
                if (userAnswer == quizAnswer) {
                    quizElement.classList.add('good')
                    good_answer++;
                } else {
                    quizElement.classList.add('bad')
                    answerElement.classList.remove('none')
                    bad_answer++;
                }
                descElement.classList.remove('none')
                quizNext.classList.remove('none')
                quizConfirm.classList.add('none')
            }
        }
    })

    // 다음 문제 버튼을 클릭
    quizNext.addEventListener('click', () => {
        if (currentIndex < quizInfo.length - 1) {
            currentIndex++;
            updateQuiz(currentIndex)
        } else {
            alert('모든 문제를 풀었습니다. \n 총 10문제중 \n 정답 : '+good_answer+'문제 \n 오답 : '+bad_answer+'문제 \n 점수 '+(good_answer*10)+'점 입니다.' )
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    updateQuiz(currentIndex)
})