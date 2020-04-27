<template>
  <div class="sub-header">
    <div class="sub-title">
      <div class="text">
        <strong>{{$route.meta.title}}</strong>
        <span>{{ $route.meta.groupTitle }}</span>
      </div>
    </div>
    <v-btn outlined @click="$emit('onSearchButtonPress')" class="search" v-if="hasFinder">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    hasFinder: {
      type: Boolean,
      default: false,
    }
  },
}
</script>