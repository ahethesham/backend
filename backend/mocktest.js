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
function getstats(user,topic){
  let data=fs.readFileSync(__dirname+'/stats.json')
  data=JSON.parse(data)
  let score=0;
  let attempted=0;
  let arr=Object.keys(data)
  let p=null;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]==user)p=data[arr[i]];
  }
  arr=Object.keys(p)
  for(let i=0;i<arr.length;i++){
    if(arr[i]==topic)p=p[arr[i]]
  }
  for(let i=0;i<p.length;i++){
    if(p[i]>-1){score+=p[i];attempted++;}
  }
  let r={
    total:p.length,
    attempted:attempted,
    progress:(score/(Math.max(1,attempted*10)))*100
  }
  return r;
}
const mockstatus={
  cpp:function(req,res){
    let user=req.body.username
    let d=getstats(user,"cpp")
    res.send(d)
  },
  java:function(req,res){
    let user=req.body.username
    let d=getstats(user,"java")
    res.send(d)
  },
  ds:function(req,res){
    let user=req.body.username
    let d=getstats(user,"ds")
    res.send(d)
  },
  algo:function(req,res){
    let user=req.body.username
    let d=getstats(user,"algo")
    res.send(d)
  },
  aptitude:function(req,res){
    let user=req.body.username
    let d=getstats(user,"aptitude")
    res.send(d)
  },
  cn:function(req,res){
   let user=req.body.username
    let d=getstats(user,"cn")
    res.send(d)
  },
  dbms:function(req,res){
    let user=req.body.username
    let d=getstats(user,"dbms")
    res.send(d)
  },
  reasoning:function(req,res){
   let user=req.body.username
    let d=getstats(user,"reasoning")
    res.send(d)
  },
  numerical:function(req,res){
    let user=req.body.username
    let d=getstats(user,"numerical")
    res.send(d)
  },
  js:function(req,res){
    let user=req.body.username
    let d=getstats(user,"js")
    res.send(d)
  },
  all:function(req,res){
    let user=req.body.username
    let d=getstats(user,"cpp")
    res.send(d)
  }
  
}
export {mocktest,mockstatus}