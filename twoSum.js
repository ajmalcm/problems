//bruteForce  o(n^2);

const twoSum=(nums,target)=>{
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j]===target)
                return [i,j];
        }
    }
    return [];
}

const nums=[2,3,5,6,7];
// console.log(twoSum(nums,8));


//best case  O(n); since only one loop

const twoSum2=(nums,target)=>{
    let seen=new Map();
    for(let i=0;i<nums.length;i++)
    {
        let compliment=target-nums[i];

        if(seen.has(compliment))
            return [seen.get(compliment),i];
        
        seen.set(nums[i],i);
    }
    return [];
}

console.log(twoSum2(nums,5))

