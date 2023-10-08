import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const algo={
    add:function(req,res){
        let data=fs.readFileSync(__dirname+'/ds.json','utf8');
        data=JSON.parse(data)
        data[0].array.push(req.body)
        data=JSON.stringify(data)
        fs.writeFileSync(__dirname+'/ds.json',data,()=>console.log(done))
    },
    get_space:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[2].space);
    },
    get_time:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[2].time);
    },
    get_sort:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[2].sort);
    }, 
    get_search:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[2].search);
    },
    get_recursion:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[2].recursion);
    },
    get_greedy:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[2].greedy);
    },
   
}
export {algo}