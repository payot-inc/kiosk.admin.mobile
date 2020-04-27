<template>
  <v-dialog
    v-model="visible"
    width="100%"
  >
    <div class="point-control-modal">
      <div class="modalHead">
        <dl>
          <dt><span>010-8525-4561</span>님, 선택</dt>
        </dl>
      </div>
      <div class="modalCont">
        <dl class="option">
          <dt>지급/차감 선택</dt>
          <dd>
            <span :class="radioValue === 'a' ? 'active' : ''">
              <input type="radio" v-model="radioValue" value="a" checked>
              <label>포인트지급</label>
              </span>
            <span :class="radioValue === 'b' ? 'active' : ''">
              <input type="radio" v-model="radioValue" value="b">
              <label>포인트차감</label>
            </span>
          </dd>
        </dl>
        <dl class="coin">
          <dt>포인트 지급/차감 금액설정</dt>
          <dd>
            <input type="text" placeholder="0">
            <span>원</span>
          </dd>
        </dl>
        <dl class="text">
          <dt>포인트 지급/차감 사유</dt>
          <dd>
            <textarea>
              
            </textarea>
          </dd>
        </dl>


        
      </div>
      <div class="modalFooter">
        <v-btn outlined @click="open(false)" class="cancle">취소</v-btn>
        <v-btn outlined @click="done" class="confirm">확인</v-btn>
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
      radioValue:'a'
    }
  },

}
</script>

<style lang="scss" scoped>
.point-control-modal{
  background:#fff;

  .modalHead{
    padding:10px 15px ;
    border-bottom:1px solid #e2e2e2;
    dl{
      dt{
        font-size:16px;
        font-weight:500;
        span{color:#DB0F90;font-weight:600}
      }
      dd{font-size:12px;color:#888}
    }
  }

  .modalCont{
   padding:15px;

   dl{
     margin-bottom:20px;
     dt{margin-bottom:8px;}
   }

   .option{
     
    
    dd{
      display:Flex;

      span{
        display:flex;
        align-items: center;
        margin-right:10px;

        input[type=radio]{
          width:90px;height:30px;
          color:#DB0F90;
          opacity: 0;
        }
        label{
          font-size:14px;
          margin-left:-90px;
          display:inline-block;
          text-align:center;
          width:90px;
          height:30px;
          line-height:30px;
          border-radius:5px;
          background:#f2f2f2;
        }

        input[tpye=radio]:checked + label{color:#DB0F90}
      }

      span.active{
        label{
          border:1px solid #DB0F90;
          color:#DB0F90;
          background:#fff;
        }
      }
    }
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
         height:80px;
         min-height:80px;
         max-height:80px;
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