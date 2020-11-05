const request = require('request');
// const readline = require('readline') -> for checking
const fs = require('fs');


const url = process.argv[2];
const savePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log("error");
  }
  fs.writeFile(savePath, body, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${savePath}`);
  })
})
