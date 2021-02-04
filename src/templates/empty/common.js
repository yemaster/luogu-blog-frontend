import 'fomantic-ui/dist/semantic.css'
import 'fomantic-ui/dist/semantic'
import './styles/fonts.css'
import './styles/style.css'
import 'plugins/event_bus'
import $ from 'jquery'

var scrollDelay

function pageScroll () {
  window.scrollBy(0, -50)
  scrollDelay = setTimeout(pageScroll, 10)
  if ($(window).scrollTop() <= 10) {
    clearTimeout(scrollDelay)
  }
}

$(document).ready(function () {
  $('#totop').click(pageScroll)
})

window.onscroll = function () {
  $('.captain').css('top', ($(window).scrollTop()) + 'px')
}
