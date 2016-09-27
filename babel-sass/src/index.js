const meth = {
    speak: (stri) => {
        let str = `Hua hua ${stri} hua hua..`;
        return str;
    }
};

setTimeout(()=> {
    console.log(meth.speak('This is template strings let const and arrow functions'));
}, 100);
