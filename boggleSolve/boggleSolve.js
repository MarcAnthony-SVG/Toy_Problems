// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string

const boggleSolve = (str) => {
    targetArray =[...str]; // [ 'b', 'a', 't' ]
    alphabetCounterOBJ = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0
     };
    alphabetOBJ = {
       a:1,
       b:2,
       c:3,
       d:4,
       e:5,
       f:6,
       g:7,
       h:8,
       i:9,
       j:10,
       k:11,
       l:12,
       m:13,
       n:14,
       o:15,
       p:16,
       q:17,
       r:18,
       s:19,
       t:20,
       u:21,
       v:22,
       w:23,
       x:24,
       y:25,
       z:26
    };
    for (let i = 0; i < targetArray.length; i++){
        if (targetArray['i'] === alphabetOBJ.key && alphabetOBJ.key === alphabetCounterOBJ.key){
            alphabetCounterOBJ.key.value = 1;
        }
    }
    return alphabetCounterOBJ;
};
console.log(boggleSolve("bat"));