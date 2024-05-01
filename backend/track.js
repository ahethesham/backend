import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
function score(user,data){
    let total=0,a=0;
    let sub=Object.keys(data[user])
    for(let i=0;i<sub.length;i++){
        for(let j=0;j<data[user][sub[i]].length;j++){
            if(data[user][sub[i]][j]>-1)total+=data[user][sub[i]][j],a++;
        }
    }
    return [total,a];
}
function sort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++){
            if(arr[i][1]<arr[j][1])
            {
                let k=arr[i];
                arr[i]=arr[j]
                arr[j]=k;
            }
        }
    }
}
export const track={
    getleaderboard:function(req,res){
        let data=fs.readFileSync(__dirname+'/stats.json')
        data=JSON.parse(data)
        //console.log(data)
        let arr=Object.keys(data)
        let t=[];
        for(let i=0;i<arr.length;i++)
        {
            t.push([arr[i],score(arr[i],data)[0]])
        }
        sort(t)
        t=JSON.stringify(t)
        res.send(t)
    },
    getstats:function(req,res){
        let data=fs.readFileSync(__dirname+'/stats.json')
        data=JSON.parse(data)
        let s=score(req.body.username,data);
        let sc=s[0]
        let attempt=s[1]
        let rank;
        let arr=Object.keys(data)
        let t=[];
        for(let i=0;i<arr.length;i++)
        {
            t.push([arr[i],score(arr[i],data)[0]])
        }
        sort(t)
        for(let i=0;i<t.length;i++){
            if(t[i][0]==req.body.username){rank=i+1;break;}
        }
        let r={
            score:sc,
            accuracy:((sc/(attempt*10))*100),
            rank:rank
        }
        res.send(r)
    }
}