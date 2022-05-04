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
          <img src="/images/heart.jpg" class="heart" alt="하트">
          <img src="/images/heart.jpg" class="heart" alt="하트">
          <img src="/images/heart.jpg" class="heart" alt="하트">
        </div>
      </div>
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img src="/images/heart.jpg" class="heart" alt="하트">
          <img src="/images/heart.jpg" class="heart" alt="하트">
          <img src="/images/heart.jpg" class="heart" alt="하트">
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
            <div class="text-center">
              <button class="start-btn" @click="startGame">선택 완료!</button>
            </div>
            <div class="loading"> 기다리는 중...</div>
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
          <li></li>
          <li></li>
          <li></li>
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
      count: 3
    }
  },
  watch: {
    count(newVal) {
      if (newVal === 0) {
        console.log('0이 되었습니다.')
      }
    }
  },
  methods: {
    startGame () {
      if (this.myChoice === null) {
        alert('가위 바위 보 중 하나를 선택해주세요')
      } else {
        let countDown = setInterval(() => {
          this.count--
          if (this.count === 0) {
            clearInterval(countDown)
          }
        }, 1000)
      }
    }
  }
}
</script>

<style>
@import "/css/common.css";
@import "/css/foundation.min.css";
</style>
