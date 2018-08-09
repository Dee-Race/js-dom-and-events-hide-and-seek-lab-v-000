function getFirstSelector(selector) {
  const getElement = document.querySelector(selector)
  return getElement
}

function nestedTarget() {
  const nestedTarget = document.querySelector('#nested .target')
  return nestedTarget
}

function deepestChild() {
  const div = document.querySelector('#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
  return div
}

function increaseRankBy(n) {

}
