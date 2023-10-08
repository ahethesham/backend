import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const dbms={
   
    get_rdbms:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].rdbms);
    },
    get_constraints:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].constraints);
    },
    get_ddl:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].ddl);
    },
    get_templates:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].templates);
    },
    get_tcl:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].tcl);
    },
    get_keys:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].keys);
    },
    get_dml:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[4].dml);
    },
}
export {dbms}