<template>
  <v-dialog
    v-model="visible"
    width="100%"
  >
    <div class="search-option modal">
      <div class="modalHead">
        <dl>
          <dt>키오스크 정지</dt>
          <dd>키오스크의 판매를 중지할까요?</dd>
        </dl>
      </div>
      <div class="modalFooter">
        <v-btn outlined @click="open(false)" class="cancle">취소</v-btn>
        <v-btn outlined @click="open(false)" class="confirm">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixin/modal.js';

export default {
  mixins: [ModalMixin],

  data(){
    return{

    }
  },

}
</script>

<style lang="scss" scoped>
.search-option{
  background:#fff;

  .modalHead{
    padding:15px;
    border-bottom:1px solid #e2e2e2;
    dl{
      dt{
        font-size:16px;
        span{color:#DB0F90}
      }
      dd{font-size:13px;color:#888;margin-top:5px;}
    }
  }

  .modalCont{
   padding:15px;

   dl{
     margin-bottom:20px;
     dt{margin-bottom:8px;}
   }

   .coin{
     dd{
       position:relative;
       color:#888;

       input[type=text]{
         width:100%;
         border-bottom:1px solid #DB0F90;
         height:40px;
         padding:0 15px 0 0;
         font-size:16px;
         outline: none;

       }
       span{
         position:absolute;
         right:0px;
         bottom:10px;
       }
     }
   }
   .text{
     dd{
       textarea{
         width:100%;
         height:90px;
         min-height:90px;
         max-height:90px;
         border:1px solid #c2c2c2;
         outline: none;
         padding:10px;
       }
     }
   }
  }

  .modalFooter{
    display:flex;
    align-items: center;
    justify-content:flex-end;
    padding:15px;
    background:#f2f2f2;

    .v-btn{
      height:35px;
      border:0px;
      background:#fff;
      margin-left:10px;
    }

    .v-btn.confirm{
      background:#292929;
      color:#fff;
    }
  }
}
</style>