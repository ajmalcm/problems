const isValid=(s,t)=>{
    if(s.length !== t.length) //O(n log n)
        return false;
    else
    {
        if(s.split("").sort().join("")!==t.split("").sort().join(""))
            return false
    }

    return true;
}

// console.log(isValid("bat","tau"));

// best case

// const isValidAnagram=(s,t)=>{  //O(n)
//     if(s.length!==t.length)
//         return false;

//     let count={};

//     for(let str of s)  //increassing the counter for the character key (for first string we start the value with 0 and for each chars we increase by one)
//         count[str]=(count[str] || 0)+1;

//         for(let str of t)  //decreasing the counter for the curresponding character key value (here if the chat counter key is not present or used up ie:false then it is not an anagram )
//         {
//             if(!count[str]) return false;
//             count[str]--;
//         }

//         return true;
// }

const isValidAnagram=(s,t)=>{
    let counter={};

    for(let char of s)
        counter[char]=(counter[char]||0)+1;

    for(let char of t)
    {
        if(!counter[char])
            return false;
        counter[char]--;
    }
    return true;
}

console.log(isValidAnagram("cac","ccs"))