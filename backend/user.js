import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
export const user={
    add:function(req,res){
        let data=fs.readFileSync(__dirname+'/users.json');
        data=JSON.parse(data)
        data.push(req.body)
        data=JSON.stringify(data)
        fs.writeFileSync(__dirname+'/users.json',data);
        data=fs.readFileSync(__dirname+'/stats.json');
        data=JSON.parse(data)
        let l=fs.readFileSync(__dirname+'/mocktest_db.json')
        l=JSON.parse(l)
        let arr=Object.keys(l)
        let obj={}
        for(let i=0;i<arr.length;i++){
            let a=[]
            console.log(arr[i])
            for(let j=0;j<l[arr[i]].length;j++){
                a.push(-1)
            }
            obj[arr[i]]=a
        }
        data[req.body.username]=obj;
        data=JSON.stringify(data)
        fs.writeFileSync(__dirname+'/stats.json',data)
    },
    find:function(req,res){
        let data=fs.readFileSync(__dirname+'/users.json')
        data=JSON.parse(data)
        let r={found:false}
        let r2={found:true}
        for(let i=0;i<data.length;i++)
        {
            if(req.body.username==data[i].username&&req.body.password==data[i].password){res.send(r2);return;}
        }

        res.send(r)
    }
}