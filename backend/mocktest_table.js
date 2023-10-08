import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const mocktest_table={

    all:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        let arr=Object.keys(data)
  
        for(let val=0;val<arr.length;val++){
          for(let i=0;i<data[arr[val]].length;i++){
            ans.push([arr[val],i])
          }
        }
      res.send(ans)
      },
      cpp:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.cpp.length;i++)
        ans.push(['cpp',i])
        res.send(ans)
      },
      java:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.java.length;i++)
        ans.push(['java',i])
        res.send(ans)
      },
      dbms:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.dbms.length;i++)
        ans.push(['dbms',i])
        res.send(ans)
      },
      ds:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.ds.length;i++)
        ans.push(['ds',i])
        res.send(ans)
      },
      algo:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.algo.length;i++)
        ans.push(['algo',i])
        res.send(ans)
      },
      js:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.js.length;i++)
        ans.push(['js',i])
        res.send(ans)
      },
      html:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.html.length;i++)
        ans.push(['html',i])
        res.send(ans)
      },
      cn:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.cn.length;i++)
        ans.push(['Networking',i])
        res.send(ans)
      },
      aptitude:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.aptitude.length;i++)
        ans.push(['Aptitude',i])
        res.send(ans)
      },
      reasoning:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.reasoning.length;i++)
        ans.push(['Reasoning',i])
        res.send(ans)
      },
      numerical:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let ans=[]
        for(let i=0;i<data.numerical.length;i++)
        ans.push(['Numerical',i])
        res.send(ans)
      },
  }
export {mocktest_table}