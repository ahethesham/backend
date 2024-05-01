import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
export const tracker={
    isValid:function(req,res){
        let username=req.body.username
        let passcode=req.body.passcode
       
        let data=fs.readFileSync(__dirname+'/tests.json');
        data=JSON.parse(data)
        let arr=data[username]
        let found=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==passcode){
                found=true;
                break;
            }
        }
        if(found)
        {
            let r={
                valid:false
            }
            res.send(r)
        }
        else{
            let r={
                valid:true
            }
            res.send(r)
        }
    }
}