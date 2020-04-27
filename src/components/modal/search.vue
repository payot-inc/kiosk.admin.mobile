<template>
  <v-dialog
    v-model="visible"
    width="100%"
  >
    <div class="search-option modal">
      <div class="modalHead">
        검색 옵션
      </div>
      <div class="modalCont">
        <dl class="date-search">
          <dt>날짜검색</dt>
          <dd>
            <span>
              <v-dialog
                v-model="firstDateModal"
                :close-on-content-click="false"
                :nudge-right="0"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <input type="text"
                    v-model="query.start"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="query.start" @input="firstDateModal = false"  locale="ko-kr"/>
              </v-dialog>
            </span>
            <span class="bar">-</span>
            <span>
              <v-dialog
                v-model="lastDateModal"
                :close-on-content-click="false"
                :nudge-right="0"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <input type="text"
                    v-model="query.end"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="query.end" @input="lastDateModal = false"  locale="ko-kr"/>
              </v-dialog>
            </span>
          </dd>
        </dl>

        <dl class="keyword">
          <dt>키워드 검색</dt>
          <dd>
            <input v-model="query.query" type="text" placeholder="키워드를 입력해주세요">
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
      query: {
        query: '',
        start: new Date().toISOString().substr(0, 10),
        end: new Date().toISOString().substr(0, 10),
      },
      firstDateModal: false,
      lastDateModal:false,
    }
  },
  methods: {
    done() {
      this.$emit('onUpdateQuery', this.query);
      this.visible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.search-option{
  background:#fff;

  .modalHead{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:50px;
    font-size:18px;
    font-weight:500;
    padding:0 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    color:#DB0F90
  }
  .modalCont{
    padding:20px;

    dl{
      margin-bottom:20px;
      border-bottom:1px dashed #c2c2c2;
      padding-bottom:20px;

      dt{
        margin-bottom:10px;
      }
    }
    dl:last-child{
      border-bottom:0px;
      margin-bottom:0px;
      padding-bottom:0px;
    }

    .date-search{
      dd{
        display:flex;
        justify-content: space-around;
        
        span{
          flex:4;
          display:flex;
          justify-content: center;
          align-items: center;
          text-align:center;
          
        }
        span.bar{
          text-align:center;
          flex:1;
          margin:0 10px;
          background:#f2f2f2;
          border-radius:5px;
        }
        input[type=text]{
          border:1px solid #c2c2c2;
          width:100%;
          height:40px;
          text-align:center;
          border-radius:5px;
          font-size:13px;
        }
      }
    }

    .keyword{
      input[type=text]{
        border:1px solid #c2c2c2;
        height:40px;
        width:100%;
        border-radius:5px;
        padding:0 10px;
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