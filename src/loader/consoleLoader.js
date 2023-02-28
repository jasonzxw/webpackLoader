module.exports = function(source){
    console.log(source)
    const { author , email} = this.getOptions();
    const newcontent = `
    /**
     * @Author:${author}
     * @Email:${email}
     * */
    
    ${source}
    `
    return newcontent
}