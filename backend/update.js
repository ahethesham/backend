import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
export const update={
    add:function(req,res){
        let user=req.body.username;
        console.log(req.body)
        let data=fs.readFileSync(__dirname+'/stats.json')
        data=JSON.parse(data)
        data[user][req.body.topic][req.body.index]=req.body.score;
        data=JSON.stringify(data)
        fs.writeFileSync(__dirname+'/stats.json',data)
    }
}