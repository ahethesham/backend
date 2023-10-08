import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const os={
   
    get_basics:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].Basics);
    },
    get_structure:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].Kernel);
    },
    get_scheduling:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].scheduling);
    },
    get_process:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].process);
    },
    get_deadlock:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].deadlock);
    },
    get_main_memory:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].main_memory);
    },
    get_threads:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].threads);
    },
    get_disk:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].disk);
    },
    get_misc:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[3].misc);
    },
   
}
export {os}