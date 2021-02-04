<template>
  <div class="ui category search item">
    <div class="ui transparent icon input">
      <input class="prompt" type="text" placeholder="Search……" v-model="keyword">
      <i class="search link icon" @click.prevent="search()"></i>
    </div>
  </div>
</template>

<script>
import { defaultData, defaultMounted } from 'scripts/search_bar'

export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: {
    search: undefined
  }
}
</script>
