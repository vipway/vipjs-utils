import Client from '../src/Client'
import lineCase from '../src/lineCase'

Client.init('zh-CN')

const $div = document.createElement('div')
$div.style.backgroundColor = 'green'
$div.style.height = '1000px'
$div.style.width = '500px'

document.body.appendChild($div)
console.log($div.getBoundingClientRect())
console.log(lineCase('ElDom'))





