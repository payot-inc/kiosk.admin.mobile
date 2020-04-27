<template>
  <div class="kiosk-control">
    <SubHeader />
    
    <v-list>
      <v-list-item link @click="$refs.confirm.open(true)">
        <dl>
          <dt>
            <span> <v-icon>mdi-play</v-icon></span>
          </dt>
          <dd>
            <strong>키오스크 작동</strong>
            <span>키오스크의 판매를 재개합니다</span>
          </dd>
        </dl>
      </v-list-item>

      <v-list-item link @click="$refs.question.open(true)">
        <dl>
          <dt>
            <span> <v-icon>mdi-stop</v-icon></span>
          </dt>
          <dd>
            <strong>키오스크 정지</strong>
            <span>키오스크의 판매를 중지합니다</span>
          </dd>
        </dl>
      </v-list-item>

      <v-list-item link>
        <dl>
          <dt>
            <span> <v-icon>mdi-autorenew</v-icon></span>
          </dt>
          <dd>
            <strong>키오스크 프로그램 재실행</strong>
            <span>키오스크 프로그램을 재실행 합니다</span>
          </dd>
        </dl>
      </v-list-item>

      <v-list-item link>
        <dl>
          <dt>
            <span> <v-icon>mdi-power</v-icon></span>
          </dt>
          <dd>
            <strong>키오스크 재부팅</strong>
            <span>키오스크의 전원을 완전히 종료 후 다시 전원이 켜집니다</span>
          </dd>
        </dl>
      </v-list-item>
    </v-list>

    <Confirm ref="confirm" />
    <Question ref="question" />
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader.vue';
import Confirm from '@/components/modal/confirm.vue'
import Question from '@/components/modal/question.vue'

export default {
  components:{
    SubHeader, Confirm, Question
  }
}
</script>

<style lang="scss" scoped>
.v-list{
  background:none;
  
  .row{padding:0px}
  .col{padding:0px;}

  .v-list-item{
    border:1px solid #e2e2e2;
    background:#fff;
    padding:15px;
    margin-bottom:5px;
      
    dl{
      display:flex;
      align-items: center;
      
      dt{
        display:flex;
        justify-content: center;

        span{
          display:flex;
          justify-content: center;
          align-content: center;
          width:50px;
          height:50px;
          border-radius:50%;
          background:#f2f2f2
        }
      }
      dd{
        margin-left:15px;
        strong{display:block;font-size:16px;font-weight:500}
        span{display:block;font-size:12px;color:#888;word-break:keep-all;}
      }
    }
  }
}
</style>