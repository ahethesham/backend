import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
export const react={
    component:function(req,res){
        let data=fs.readFileSync(__dirname+"/database.json");
        data=JSON.parse(data)
        res.send(data[7].component)
    },
    state:function(req,res){
        let data=fs.readFileSync(__dirname+"/database.json");
        data=JSON.parse(data)
        res.send(data[7].state)
    },
    hooks:function(req,res){
        let data=fs.readFileSync(__dirname+"/database.json");
        data=JSON.parse(data)
        res.send(data[7].hooks)
    },
    class:function(req,res){
        let data=fs.readFileSync(__dirname+"/database.json");
        data=JSON.parse(data)
        res.send(data[7].class)
    },
    callbacks:function(req,res){
        let data=fs.readFileSync(__dirname+"/database.json");
        data=JSON.parse(data)
        res.send(data[7].callbacks)
    },
    props:function(req,res){
        let data=fs.readFileSync(__dirname+"/database.json");
        data=JSON.parse(data)
        res.send(data[7].props)
    }
}