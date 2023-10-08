import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
 const mocktest={
    cpp:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
        data=JSON.parse(data)
        res.send(data.cpp)
    },
    java:function(req,res){
      let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
      data=JSON.parse(data)
      res.send(data.java)
  },
  ds:function(req,res){
    let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
    data=JSON.parse(data)
    res.send(data.ds)
},
algo:function(req,res){
  let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
  data=JSON.parse(data)
  res.send(data.algo)
},
cn:function(req,res){
  let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
  data=JSON.parse(data)
  res.send(data.cn)
},
react:function(req,res){
  let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
  data=JSON.parse(data)
  res.send(data.cn)
},
js:function(req,res){
  let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
  data=JSON.parse(data)
  res.send(data.cn)
},
dbms:function(req,res){
  let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
  data=JSON.parse(data)
  res.send(data.cn)
},
aptitude:function(req,res){
  let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8')
  data=JSON.parse(data)
  res.send(data.aptitude)
}
}
export {mocktest}