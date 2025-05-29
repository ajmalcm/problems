const groupAnagram=(arr)=>{  //Time Complexity: O(n * k log k)
    let group={}; //n = number of strings
    for(let item of arr)  //k log k = cost of sorting each string
    {
        const sstr=item.split("").sort().join("");
        group[sstr]=group[sstr]?[...group[sstr],item]:[item]
    }
    return Object.values(group);

}

 const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagram(arr));

const groupAnagrams2=(arr)=>{
    let group=new Map();
    for(let i of arr){
        let sorted=i.split("").sort().join("");
        if(!group.has(sorted))
            group.set(sorted,[]);

        group.get(sorted).push(i)
    }
    return Array.from(group.values());
}

console.log(groupAnagrams2(arr));


