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
  const rankItems = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankItems.length; i++) {
    rankItems[i].innerHTML = parseInt(rankItems[i].innerHTML) + n
  }
  return rankItems
}
