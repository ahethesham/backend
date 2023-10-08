import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const dsa={
    add:function(req,res){
        let data=fs.readFileSync(__dirname+'/mocktest_db.json','utf8');
        data=JSON.parse(data)
        let d=data.aptitude
        if(d.length==0||d[d.length-1].length==10)d.push([])
        d[d.length-1].push(req.body)
        data.aptitude=d;
        data=JSON.stringify(data)
        fs.writeFileSync(__dirname+'/mocktest_db.json',data,()=>console.log(done))
    },
    get_tree:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].tree);
    },
    get_array:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].array);
    },
    get_stack:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].stack);
    }, 
     get_queue:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].queue);
    }, 
     get_hash:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].hash);
    },  
     get_segtree:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].segtree);
    }, 
     get_trie:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].trie);
    },
    get_graph:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].graph);
    },
    get_linkedlist:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json','utf8')
        data=JSON.parse(data)
        res.send(data[1].linkedlist);
    },
}
export {dsa}