<template>
  <div id="article-list" class="fadeIn">
    <div v-if="ready">
      <div class="ui divided items">
        <div v-for="post in posts" class="item">
          <div class="content">
            <h2 class="postTitle">
              <a :href="post.identifier">{{ post.title }}</a>
            </h2>
            <div class="description">
              <p>{{ post.contentDescription }}</p>
            </div>
            <div class="extra">
              <div class="ui label">
                <i class="thumbs up icon"></i> {{ post.thumbUp }}
              </div>
              <div class="ui label">
                <i class="clock icon"></i> {{ post.postTime | formatDate }}
              </div>
              <a class="ui label" @click="type = post.type">
                <i class="tags icon"></i> {{ post.type }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loader v-else></loader>
    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>
