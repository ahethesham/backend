import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const cpp={
    home:(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        let pre=fs.readFileSync(__dirname+'/cpp.json');
        pre=JSON.parse(pre)
        pre.push(req.body)
        console.log(pre.length)
        pre=JSON.stringify(pre)
        fs.writeFileSync(__dirname+'/cpp.json',pre,'utf8');
    },
    get_pointer:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].pointers);
    },
    get_macros:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].macros);
    },
    get_preprocessor:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].preprocessor);
    },
    get_templates:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].templates);
    },
    get_struct:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].struct);
    },
    get_vector:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].vector);
    },
    get_map:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].map);
    },
    get_unordered_map:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].unordered_map);
    },
    get_set:(req,res)=>{
        let r=fs.readFileSync(__dirname+'/database.json');
        r=JSON.parse(r);
        res.send(r[0].set);
    },

}
export default cpp;