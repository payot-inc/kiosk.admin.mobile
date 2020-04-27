<template>
  <v-navigation-drawer
    v-model="visible"
    absolute
    right
    temporary
  > 
    <div class="inner">
      <div class="profile-box">
        <p>안녕하세요</p>
        <p><strong>페이오티 금정점</strong></p>
      </div>

      <v-divider></v-divider>

      <v-list>
        <v-list-group v-for="group in navigation" :key="group.groupTitle">
          <template v-slot:activator >
            <v-list-item>
              <v-icon>mdi-{{group.icon}}</v-icon>
              <span>{{group.groupTitle}}</span>
            </v-list-item>
          </template>
          <v-list-item 
            link
            v-for="item in group.items" 
            @click="push(item.routerName)"
            :key="item"
            class="nav-2nd"
          >
            {{item.title}}
          </v-list-item>
        </v-list-group>
      </v-list>

      <div class="bottom">
        <v-btn outlined>로그아웃</v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { routes } from '../router/index';

export default {
  data(){
    return{
      visible: true,      
    }
  },
  mounted() {
    const filterNavigationRouter = routes.filter(({ name }) => !['Error', 'Home', 'Login'].includes(name));
    const navigationGroup = filterNavigationRouter.map(({ meta, children }) => {
      const items = children.map(({ meta: childMeta, path }) => ({ routerName: path, title: childMeta.title }));
      return Object.assign(meta, { items });
    });
    this.navigation = navigationGroup;
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
      return this.visible;
    },
    push(value){
      this.$router.push(value)
    }
  }
  
}
</script>

<style lang="scss" scoped>

.profile-box{
  display:flex;
  flex-direction: column;
  justify-content: center;
  background:#EE2073;
  min-height:70px;
  padding:16px;
  p{padding:0px;margin:0px;color:#fff;}
  strong{font-size:16px;color:#fff;font-weight:500}
}

.bottom{
  padding:16px;
  .v-btn{
    width:100%;
    height:32px;
    border-radius:16px;
    border:0px;
    background:#e2e2e2;
    }
}

.v-list{
  padding:0px;

  .v-list-item{
    padding:0px;
    justify-content: flex-start;

    .v-icon{margin-right:10px;font-size:20px;}
    span{font-size:14px;}
  }

  .v-list-group{
    border-bottom:1px solid #e2e2e2;
  }
  .nav-2nd{
    padding:0 16px;
    border-top:1px solid #e2e2e2;
    min-height:45px;
    font-size:13px;
  }

}




</style>