const express = require('express')  // import thư viện express vào
const app = express()               // khởi tạo biến app = function express
const port = 3001                   // khỏi tạo cổng vào web
// arow function: () => {}
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})                           // get là tuyến đường tơi các trang của web, nó như route
// res.send là trả về trình duyệt 1 cái j đó, ở đây là hello world!

//127.0.0.1 - localhot
// function app sẽ được mở trên cổng 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})