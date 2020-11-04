const request = require('request');
// const readline = require('readline') -> for checking
const fs = require('fs');


const url = process.argv[2];
const savePath = process.argv[3];

const fetcher = function(url, savePath){
  
}

request(url, savePath, (error, response, body) => {
  // console.log('error', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body size', body);
  // console.log(response.headers)
  fs.writeFile(savePath, body, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${savePath}`);
  })
})
