
function getResponseFromAPI() 
{ 
    const value = true
return new Promise((resolve, reject) =>{

    if (value) resolve("done")
    reject("failed")
})
}
