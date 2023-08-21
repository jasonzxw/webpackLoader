module.exports = class EntryPlugin{
    constructor(){

    }
    apply(complier){
        complier.hooks.entryOption.tap('EntryPlugin',(ctx,entry)=>{
            console.log(`entry init`)
            console.log(ctx);
            console.log(entry)
        })
    }
}