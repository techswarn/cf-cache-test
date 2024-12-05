const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/", (req, res, next) => {
	// setting the response headers
	res.setHeader("Cache-Control", "public, max-age=604800"); 
	// cache control header
	// next middleware or route handler
	next();
});
app.use('/', express.static('dist'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})