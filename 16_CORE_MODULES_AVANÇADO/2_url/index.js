const url = require('url')

const q = url.parse('http://localhost:3000/summer?year=2024&month=october', true)

console.log(q.host) // localhost:3000
console.log(q.pathname) // /summer
console.log(q.search) // ?year=2024&month=october

const qDataUrl = q.query

console.log(qDataUrl) // {year: 2024, month: 'october'}
console.log(qDataUrl.year) // 2024
console.log(qDataUrl.month) // october