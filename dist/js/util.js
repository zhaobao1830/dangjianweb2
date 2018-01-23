// 计算font-size
function computedFontSize () {
  var docWidth = document.documentElement.getBoundingClientRect().width
  var rem = docWidth / 10
  document.documentElement.style.fontSize = rem + 'px'
}
