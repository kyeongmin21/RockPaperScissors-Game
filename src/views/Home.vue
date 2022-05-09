<template>
  <div class="home">
    <div class="row">
      <div class="small-5 columns text-center">
        <img :src="myChoiceImg"
             alt="가위바위보이미지"
             class="text-center">
        <h1 class="text-center"><strong>YOU</strong></h1>
      </div>
      <div class="small-2 columns text-center">
        <h1 style="font-size:100px;"><strong>{{ count }}</strong></h1>
      </div>
      <div class="small-5 columns text-center">
        <img :src="comChoiceImg"
             alt="가위바위보이미지"
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
          <img v-for="life in leftLifeOfMe"
               src="/images/broken-heart.jpg"
               class="heart"
               alt="나의 깨진 하트생명"/>
        </div>
      </div>
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img v-for="life in lifeOfCom"
               src="/images/heart.jpg"
               class="heart"
               alt="컴퓨터 하트생명"/>
          <img v-for="life in leftLifeOfCom"
               src="/images/broken-heart.jpg"
               class="heart"
               alt="컴퓨터 깨진 하트생명"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="row">
          <div class="small-8 small-offset-2 columns text-center">
            <label class="radio-label" v-for="select in selects">
              <input type="radio" v-model="myChoice" :value="select.value"/>
              {{ select.name }}
            </label>
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <div class="text-center" v-if="isSelcetion">
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
          <li v-for="log in logs"
          :class="{
             'win-log': log.winner === 'me',
            'defeat-log': log.winner === 'com',
            'draw-log': log.winner === 'no one'
          }">{{ log.message }}</li>
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
      isSelcetion: true,
      count: 3,
      lifeOfMe: 3,
      lifeOfCom: 3,
      logs: [],
      selects: [
        { name: '가위', value: 'scissor' },
        { name: '바위', value: 'rock' },
        { name: '보', value: 'paper' }
      ]
    }
  },
  computed: {
    myChoiceImg () {
      return this.myChoice === null ? 'images/question.jpg' : `images/${this.myChoice}.jpg`
    },
    comChoiceImg () {
      return this.comChoice === null ? 'images/question.jpg' : `images/${this.comChoice}.jpg`
    },
    leftLifeOfMe () {
      return 3 - this.lifeOfMe
    },
    leftLifeOfCom () {
      return 3 - this.lifeOfCom
    }
  },
  watch: {
    count(newVal) {
      if (newVal === 0) {
        this.isSelcetion = true
        this.count = 3
        this.comSelect()
        this.whoIsWin()
        this.updateLog()
      }
    },
    lifeOfMe (newVal) {
      if (newVal === 0) {
        this.endGame('min 졌습니다.')
      }
    },
    lifeOfCom (newVal) {
      if (newVal === 0) {
        this.endGame('min 이겼습니다.')
      }
    }
  },
  methods: {
    startGame () {
      this.isSelcetion = false
      if (this.myChoice === null) {
        this.isSelcetion = true
        alert('가위바위보를 선택해주세요.')
      } else {
        let countDown = setInterval(() => {
          this.count--
          if (this.count === 0) {
            clearInterval(countDown)
          }
        }, 500)
      }
    },
    comSelect () {
      let number = Math.trunc(Math.random() * 10)
      if (number < 3) {
        this.comChoice = 'scissor'
      } else if (number < 6) {
        this.comChoice = 'rock'
      } else {
        this.comChoice = 'paper'
      }
    },
    whoIsWin () {
      if (this.myChoice === this.comChoice) this.winner = 'no one'
      else if (this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
      else if (this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
      else if (this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
      else if (this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
      else if (this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
      else if (this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
      else this.winner = 'error'

      if (this.winner === 'me') this.lifeOfCom--
      else if (this.winner === 'com') this.lifeOfMe--
    },
    updateLog () {
      let log = {
        message: `min: ${this.myChoice}, com: ${this.comChoice}`,
        winner: this.winner
      }
      this.logs.unshift(log)
    },
    endGame (msg) {
      setTimeout(() => {
        alert(msg)
        this.myChoice = null
        this.comChoice = null
        this.winner = null
        this.lifeOfMe = 3
        this.lifeOfCom = 3
        this.logs = []
      }, 500)
    }
  }
}
</script>

<style>
@import "/css/common.css";
@import "/css/foundation.min.css";
</style>
