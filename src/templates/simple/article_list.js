import Vue from 'vue'
import './common'
import ArticleList from './layouts/article_list.vue'

// import 'components/icon.css'

window.articleList = new Vue({
  el: '#article-list',
  render: h => h(ArticleList)
})
