import * as fs from 'node:fs/promises'
// import * as fs from 'node:fs'
async function createFile(pathname){
    await fs.writeFile(pathname,"hello Ank \n")
     console.log('file operation done')
}

// function createFile(pathname){
//     promises




//     Sync
//     fs.writeFileSync(pathname,"Hello Nodejs")
//     console.log("file has been created");
//     fs.writeFile(pathname,"hello Ank \n",(err)=>{
//         if(err){
//             console.log("something went wrong ")
//             return
//         }
//         console.log('file has been created successfully.')

//     });
//     console.log('file operation done')
//     }
 createFile('./hello.txt');