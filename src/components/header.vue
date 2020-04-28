<template>
  <div id="header">
    <div class="gnb">
      <v-btn href="#" class="logo" text @click="$router.push('/')">
        매장관리자
      </v-btn>
      <v-btn
        @click="DrawerOpen"
        text
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    DrawerOpen(){
      this.$emit('drawerOpen', true)
    }
  }
}

</script>

<style lang="scss" scoped>

#header{
  position:fixed;
  top:0px;
  left:0px;
  height:56px;
  padding:0px;
  font-family:'SCDream';
  width:100%;
  z-index:2;

  .gnb{
    display:flex;
    align-items: center;
    justify-content: space-between;
    background:#292929;
    width:100%;
    height:56px;

    .logo{
      font-size:18px;
      letter-spacing:0px;
    }
    
    .v-btn{
      min-width:56px;
      height:56px;
      color:#fff;
      border:0px;
      border-radius:0px; 
    }
  }

}

</style>