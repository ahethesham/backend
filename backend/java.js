import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const java={
    /*home:(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        let pre=fs.readFileSync(__dirname+'/cpp.json');
        pre=JSON.parse(pre)
        pre.push(req.body)
        console.log(pre.length)
        pre=JSON.stringify(pre)
        fs.writeFileSync(__dirname+'/java.json',pre,'utf8');
    },*/
    get_array:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].array);
    },
    get_class:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].class);
    },
    get_abstract:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].abstract);
    },
    get_datatype:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].datatype);
    },
    get_objects:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].objects);
    },
    get_polymorphism:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].polymorphism);
    },
    get_inheritance:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].inheritance);
    },
    get_string:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].string);
    },
    get_thread:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].thread);
    },
    get_access_specifier:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[6].access_specifier);
    },

}
export {java};