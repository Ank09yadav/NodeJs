import * as fs from 'node:fs/promises'
// import * as fs from 'node:fs'
// async function createFile(pathname){
//     await fs.writeFile(pathname,"hello Ank \n")
//      console.log('file operation done')
// }

// function createFile(pathname){
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

 export async function createFolder(folderpath){
    await fs.mkdir(folderpath, {recursive:true});
 }
 export async function createFile(pathname,content=''){
    await fs.writeFile(pathname,content);
 }
 export async function writeToFile(pathname, content=''){
    await fs.appendFile(pathname,content);
 }