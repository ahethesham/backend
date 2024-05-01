import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
export const js={
    get_closure:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json');
        data=JSON.parse(data)
        res.send(data[5].closure)
    },
    get_object:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json');
        data=JSON.parse(data)
        res.send(data[5].object)
    },
    get_datatype:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json');
        data=JSON.parse(data)
        res.send(data[5].datatype)
    },
    get_asynchronous:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json');
        data=JSON.parse(data)
        res.send(data[5].asynchronous)
    },
    get_function:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json');
        data=JSON.parse(data)
        res.send(data[5].function)
    },
    get_nan:function(req,res){
        let data=fs.readFileSync(__dirname+'/database.json');
        data=JSON.parse(data)
        res.send(data[5].nan)
    }
}