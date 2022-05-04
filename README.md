# Rock Paper Scissors - Game

## 1. radio box를 선택한 이미지 보여지게 하기
* data에 myChoice 변수를 null로 선언
* radio box에 v-model="myChoice"로 양방향 데이터 만들기
* v-model로 연결시킨 데이터는 value 값을 가지게 된다.
* 이미지 태그에 src 속성을 v-bind로 바꿔주기 (태그의 속성을 동적으로 변경할 때 사용)
* v-if / v-else : myChoice가 처음에 null이면 ? 물음표 이미지가 보여지게 하고, 값이 있으면 해당 손 이미지가 보여지게 한다.

## 2. 선택완료 클릭 버튼
* 선택완료 버튼에 @click 클릭 이벤트 추가
* startGame 함수 안에서 myChoice가 null일 경우 alert창 띄우기 (if)
* 숫자3을 {{ count }}로 바인딩 해주기
* 선택완료 버튼 누르면 1초 마다 (setInterval 함수) 숫자가 줄어들게 하기
* this.count 가 0이면 clearInterval로 함수 종료시키기 (단, setInterval 함수를 변수로 담아줘야 함)

## 3. 0초가 끝났을 때 컴퓨터가 선택한 값이 보여지게 하기
* data에 comChoice 변수를 null로 선언
* html로 가서 v-if / v-else 이미지 태그를 복붙해서 컴퓨터에도 코드 넣어주기 (myChoice가 아니라 comChoice로 변경하기)
* count의 값이 0 이 되는 것을 알기 위해 watch 감시자를 사용한다.

