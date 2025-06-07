const topkFreq=(arr,k)=>{
    let freqMap=new Map();   //O(n log k)

    for(let item of arr)
    {
        freqMap.set(item,(freqMap.get(item)||0)+1);
    }

    let heap=[];

    for(let [item,freq] of freqMap.entries())
    {
        heap.push([freq,item]);
        heap.sort((a,b)=>a[0]-b[0])

        if(heap.length>k)
            heap.shift();

        
    }
    return heap.map(item=>item[1]);

}

const arr=[1,1,1,1,2,2,3,3,3,3,4,4,4];
const k=2;
console.log(topkFreq(arr,k));

