//bruteForce

const arr=[1,2,3,4,5,6,1];  //0(n)^2

const containsDuplicate=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
            return true;
    }
    }
    return false;
}

// console.log(containsDuplicate(arr));

//best case

const containsDuplicate2=(arr)=>{   //O(n)
    let s1=new Set();
    for(let i=0;i<arr.length;i++)
    {
        if(s1.has(arr[i]))
            return true;
        else 
        s1.add(arr[i]);
    }
    return false;
}

console.log(containsDuplicate2(arr))