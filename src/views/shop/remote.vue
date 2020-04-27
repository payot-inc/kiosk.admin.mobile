<template>
  <div class="contents">
    <SubHeader />
    <div class="eq-remote">
      <div class="guide">
        <p>선택한 기기를 원격 접속하여 제어할 수 있습니다</p>
      </div>
      <v-list>
        <v-list-item link v-for="item in 10" :key="item" @click="$refs.eqRemote.open(true)"> 
          <div class="item">
            <div class="cont">
              <span class="name">1번 세탁기</span>
              <span class="option">
                <label>18kg</label>
                <label>68:C6:3A:CA:FC:A5</label>
              </span>
            </div>
            
            <span class="icon">
              <v-icon>
                mdi-arrow-right
              </v-icon>
            </span>
          </div>
        </v-list-item>
      </v-list>
    </div>

    <EqRemote ref="eqRemote"/>
  </div>
</template>

<script>

import SubHeader from '@/components/subHeader.vue';
import EqRemote from '@/components/modal/eqRemote.vue';
 
export default {
  components:{
    SubHeader, EqRemote,
  }
}
</script>

<style lang="scss" scoped>
.eq-remote{
  .guide{
    margin:20px 0;
    padding:0 15px;

    p{
      width:100%;
      margin:0px;padding:0px;
      text-align:center;
      background:#fff;
      height:30px;
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius:15px;
      background:#e2e2e2;
      font-size:12px;
    }
  }
  .v-list{
    background:none;
    padding-top:0px;

    .v-list-item{
      background:#fff;
      border-bottom:1px solid #e2e2e2;
      border-top:1px solid #e2e2e2;
      min-height:80px;
      margin-bottom:5px;

      .item{
        display:flex;
        width:100%;
        justify-content: space-between;

         .cont{
           span{display:block;}
           span.name{font-size:16px;}
           span.option{
             margin-top:5px;
             font-size:12px;
             color:#888;
             label{margin-right:10px;}
           }
         }
         .icon{
           height:40px;
           width:40px;
           display:flex;
           justify-content: center;
           align-items: center;
           background:#F9B1CC;
           border-radius:50%;

          .v-icon{color:#fff;}
         }
      }
     
      
    }
  }

}

</style>