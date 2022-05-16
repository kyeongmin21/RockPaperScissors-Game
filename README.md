# Rock Paper Scissors - Game

## 1. radio box를 선택한 이미지 보여지게 하기
* data 에 myChoice, comChoice 변수를 null 로 설정
* radio box 에 v-model="myChoice"로 양방향 데이터 만들기
* data 에 selects 배열 안에 객체로 만들기
* v-model 로 연결시킨 데이터는 value 값을 가지게 된다.
* :value 바인딩 해주기
* v-for 문으로 radio뒤에 가위,바위,보 글씨 나오게 반복문 돌리게 하기
* 이미지 태그에 src 속성을 v-bind 로 바꿔주기 (태그의 속성을 동적으로 변경할 때 사용)
* computed 속성을 사용하여 myChoice 가 null 이면 ? 물음표 이미지가 보여지게 하고, 값이 있으면 해당 손 이미지가 보여지게 한다.

## 2. 선택완료 클릭 버튼
* 선택완료 버튼에 @click 클릭 이벤트 추가
* startGame 함수 안에서 만약에(if) myChoice 가 null 일 경우 alert 띄우기
* 숫자3을 {{ count }}로 바인딩 해주기
* 선택완료 버튼 누르면 1초 마다 (setInterval 함수) 숫자가 줄어들게 하기
* this.count 가 0이면 clearInterval 함수 종료시키기 (단, setInterval 함수를 변수로 담아줘야 함)

## 3. 0초가 끝났을 때 컴퓨터가 선택한 값이 보여지게 하기
* data 에 comChoice 변수를 null 로 설정
* computed 속성을 사용하여 comChoice 가 null 이면 ? 물음표 이미지 보여지게 하고, 값이 있으면 손 이미지 보여지게 하기
* number 라는 변수를 만들고, Math.random() 함수로 숫자를 랜덤으로 나오게 변수에 할당한다.
* if 문을 통해 number 의 분기점을 지정해 주어서 가위, 바위, 보가 나오게 한다.
* count의 값이 0 이 되는 것을 알기 위해 watch 감시자를 사용한다.

## 4. 승패 결정
* data에 winner 변수를 null로 설정
* 승패 결정을 위해 비기는 경우, 내가 이기는 경우, 컴퓨터가 이기는 경우의 수 만들기

## 5. 생명하트 차감
* data 에 lifeOfMe, lifeOfCom 변수 초깃값 3으로 설정
* 내가 이기면 컴퓨터 하트생명 차감 / 컴퓨터가 이기면 나의 하트생명 차감
* v-for 문으로 하트의 갯수를 반복문으로 돌린다
* 졌을 때 깨진 하트가 나와야 하므로, 깨진하트의 3 - lifeOfme 를 computed 속성에서 미리 캐싱후, 반복문 돌리기 

## 6. 카운드 리셋 
* count 리셋되게 3으로 설정해주기

## 7. 기다리는 중, 선택완료
* v-if 문을 통해 기다리는 중 버튼과 선택완료 버튼을 통제한다.

## 8. 승패 알려줄 log 값 설정
* logs 를 배열로 담아 놓고, log 변수에 결과값 담기
* unshift 를 통해 최근 결과가 맨위로 올라오게 하기
* li 태그에 v-for 문을 돌려서 결과값 나오게 하기

## 9. 누가 이겼는지 컬러로 보여주기
* log 변수를 {} 객체로 메세지, 이긴사람 담아주기
* :class 클래스 바인딩을 통해 승패 결과 알려주기

## 게임종료
* 목숨이 0이 되면 초기화 시켜주고 졌는지 이겼는지 알려주기
* 초기화 시키는 함수 따로 뺏음

