<template>
  <div class="ui comments" id="article-comments">
    <div v-if="uid">
      <h3 class="ui dividing header">发表评论</h3>
      <form class="ui reply form">
        <div class="field">
          <textarea title="" v-model="commentContent" style="height: 3em;"></textarea>
        </div>
        <div class="ui blue labeled submit icon button"
             :class="{ disabled: commentPosting }"
             @click="postComment">
          <i class="icon edit"></i> 评论
        </div>
      </form>
    </div>

    <h3 class="ui dividing header">评论</h3>
    <div v-if="ready">
      <div class="comment" v-for="comment in comments">
        <a class="avatar"
           :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
           target="_blank">
          <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.author.uid + '.png'">
        </a>
        <div class="content">
          <a class="author"
             :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.author.uid"
             target="_blank">
            {{ comment.author.name }}
          </a>
          <div class="metadata">
            <span class="date">发表于 {{ comment.time | formatDate }}</span>
          </div>
          <div class="text">
            {{ comment.content }}&nbsp;
          </div>
        </div>
      </div>

      <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
    </div>
    <loader v-else></loader>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultMounted, getComments, postComment } from 'scripts/article_comments'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>

