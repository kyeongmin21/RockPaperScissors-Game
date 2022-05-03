<template>
  <div class="home">
    <h1>Game</h1>
    <div class="row">
      <div class="small-5 columns text-center">
        <img src="./public/images/rock.jpg" alt="" class="text-center">
        <h1 class="text-center"><strong>YOU</strong></h1>
      </div>
      <div class="small-2 columns text-center">
        <h1 style="font-size:100px;"><strong>3</strong></h1>
      </div>
      <div class="small-5 columns text-center">
        <img src="./public/images/question.jpg" alt="" class="text-center">
        <h1 class="text-center"><strong>Computer</strong></h1>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img src="./public/images/heart.jpg" class="heart" alt="">
          <img src="./public/images/heart.jpg" class="heart" alt="">
          <img src="./public/images/heart.jpg" class="heart" alt="">
        </div>
      </div>
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img src="./public/images/heart.jpg" class="heart" alt="">
          <img src="./public/images/heart.jpg" class="heart" alt="">
          <img src="./public/images/heart.jpg" class="heart" alt="">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="row">
          <div class="small-8 small-offset-2 columns text-center">
            <label class="radio-label"><input type="radio"> 가위</label>
            <label class="radio-label"><input type="radio"> 바위</label>
            <label class="radio-label"><input type="radio"> 보</label>
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <div class="text-center">
              <button class="start-btn">선택 완료!</button>
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
  name: 'Home'
}
</script>
