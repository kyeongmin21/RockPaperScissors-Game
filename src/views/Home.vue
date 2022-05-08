<template>
  <div class="home">
    <div class="row">
      <div class="small-5 columns text-center">
        <img v-if="myChoice !== null"
             :src="'images/' + myChoice + '.jpg'"
             alt="가위바위보이미지"
             class="text-center">
        <img v-else
             :src="'/images/question.jpg'"
             alt="물음표이미지"
             class="text-center">
        <h1 class="text-center"><strong>YOU</strong></h1>
      </div>
      <div class="small-2 columns text-center">
        <h1 style="font-size:100px;"><strong>{{ count }}</strong></h1>
      </div>
      <div class="small-5 columns text-center">
        <img v-if="comChoice !== null"
             :src="'images/' + comChoice + '.jpg'"
             alt="가위바위보이미지"
             class="text-center">
        <img v-else
             :src="'/images/question.jpg'"
             alt="물음표이미지"
             class="text-center">
        <h1 class="text-center"><strong>Computer</strong></h1>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img v-for="life in lifeOfMe"
               src="/images/heart.jpg"
               class="heart"
               alt="나의 하트생명"/>
          <img v-for="life in 3 - lifeOfMe"
               src="/images/broken-heart.jpg"
               class="heart"
               alt="깨진 나의 하트생명"/>
        </div>
      </div>
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img v-for="life in lifeOfCom"
               src="/images/heart.jpg"
               class="heart"
               alt="컴퓨터 하트생명"/>
          <img v-for="life in 3 - lifeOfCom"
               src="/images/heart.jpg"
               class="heart"
               alt="깨진 컴퓨터 하트생명"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="row">
          <div class="small-8 small-offset-2 columns text-center">
            <label class="radio-label"><input type="radio" v-model="myChoice" value="scissor"/> 가위</label>
            <label class="radio-label"><input type="radio" v-model="myChoice" value="rock"/> 바위</label>
            <label class="radio-label"><input type="radio" v-model="myChoice" value="paper"/> 보</label>
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <div class="text-center" v-if="isSelectable">
              <button class="start-btn" @click="startGame">선택 완료!</button>
            </div>
            <div class="loading" v-else> 기다리는 중...</div>
          </div>
        </div>
      </div>
      <div class="small-6 columns text-center">
        <p>생각 중...</p>
      </div>
    </div>

    <div class="row">
      <div class="small-12 columns log">
        <ul>
          <li v-for="log in logs" :key="log">{{ log }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      myChoice: null,
      comChoice: null,
      winner: null,
      count: 3,
      lifeOfMe: 3,
      lifeOfCom: 3,
      isSelectable: true,
      logs: []
    }
  },
  watch: {
    count(newVal) {
      if (newVal === 0) {
        let number = Math.trunc(Math.random() * 10)
        if (number < 3) {
          this.comChoice = 'scissor'
        } else if (number < 6) {
          this.comChoice = 'rock'
        } else {
          this.comChoice = 'paper'
        }

        // 가위바위보 승패 결정
        if (this.myChoice === this.comChoice) this.winner = 'no one'
        else if (this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
        else if (this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
        else if (this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
        else if (this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
        else if (this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
        else if (this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
        else this.winner = 'error'

        // 하트생명 차감
        if (this.winner === 'me') this.lifeOfCom--
        else if (this.winner === 'com') this.lifeOfMe--
        // 초깃값 셋팅
        this.count = 3
        // 버튼은 다시 보이게 됨
        this.isSelectable = true

        // 결과를 알려주는 로그
        let log = `You: ${this.myChoice}, Computer: ${this.comChoice}`
        this.logs.unshift(log)
      }
    }
  },
  methods: {
    startGame() {
      // 버튼이 보이지 않음
      this.isSelectable = false
      if (this.myChoice === null) {
        alert('가위 바위 보 중 하나를 선택해주세요')
      } else {
        let countDown = setInterval(() => {
          this.count--
          if (this.count === 0) {
            clearInterval(countDown)
          }
        }, 500)
      }
    }
  }
}
</script>

<style>
@import "/css/common.css";
@import "/css/foundation.min.css";
</style>
