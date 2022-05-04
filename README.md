# Rock Paper Scissors - Game

## 1. radio box를 선택한 이미지 보여지게 하기
* radio box에 v-model="myChoice"로 양방향 데이터 만들기
* v-model로 연결시킨 데이터는 value 값을 가지게 된다.
* 이미지 태그에 src 속성을 v-bind로 바꿔주기 (태그의 속성을 동적으로 변경할 때 사용)
* v-if / v-else : myChoice가 처음에 null이면 ? 물음표 이미지가 보여지게 하고, 값이 있으면 해당 손 이미지가 보여지게 한다.

## 2. 선택완료 클릭 버튼
* 선택완료 버튼에 @click 클릭 이벤트 추가
* methods에 myChoice가 null일 경우 alert창 띄우기
* count를 {{ count }}로 바인딩 해주기
* 선택완료 버튼 누르면 1초 마다 (setInterval 함수) 숫자가 줄어들게 하기
* this.count 가 0이면 clearInterval로 함수 종료시키기 (단, setInterval 함수를 변수로 담아줘야 함)
