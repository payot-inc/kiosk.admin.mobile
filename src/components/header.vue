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
  font-family:'SCDream';

  .gnb{
    display:flex;
    align-items: center;
    justify-content: space-between;
    background:#292929;
    height:50px;

    .logo{
      font-size:18px;
      letter-spacing:0px;
    }
    
    .v-btn{
      min-width:50px;
      height:50px;
      color:#fff;
      border:0px;
      border-radius:0px; 
    }
  }

}

</style>