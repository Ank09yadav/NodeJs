#!/usr/bin/env node
import * as readline from 'node:readline/promises'
import chalk from "chalk"
import { stdin, stdout } from 'node:process';
import {createFolder,createFile,writeToFile,deleteFile ,deleteFolder,listItems} from './sync.js'
const rl = readline.createInterface({
    input:stdin,
    output:stdout,
});

async function menu () {
    console.clear();
    console.log(chalk.blue.bold('\n 📁 File system manager \n'))

    const options = [
        'Create Folder ',
        'Create File',
        'Write To File',
        'Delete File',
        'Delete Folder',
        'List Items',
        'Exit',
    ];
    options.forEach((opt,i)=>console.log(chalk.yellow(`${i + 1}`) + chalk.white(` ${opt}`)));
    const choosenOption= await rl.question('\n select option :')
    // console.log(choosenOption);
    switch(choosenOption){
        case'1':
            const folerPath = await rl.question(chalk.cyan('\n Enter the folder Name '))
            
            createFolder(folerPath);
            console.log('✅ Folder created successfully.');
            break;
        case '2':
            const filePath = await rl.question(chalk.cyan('\n Enter the file Path : '));
            const content = await rl.question(chalk.cyan('\n Enter the content : '));
            await createFile(filePath, content);
            console.log('✅ File created successfully.');
            break;
        case '3':
            const filePathToWrite = await rl.question(chalk.cyan('\n Enter the file path : '));
            const contentToWrite = await rl.question(chalk.cyan('\n Enter the content to write : '));
            await writeToFile(filePathToWrite, `\n ${contentToWrite}`);
            console.log('✅ Content written to file successfully.');
            break;
        case '4':
            const filePathToDelete = await rl.question(chalk.cyan('\n Enter the file path to delete : '));
            await deleteFile(filePathToDelete);
            console.log('✅ File deleted successfully.');
            break;
        case '5':
            const folderPathToDelete = await rl.question(chalk.cyan('\n Enter the folder path to delete : '));
            await deleteFolder(folderPathToDelete);
            console.log('✅ Folder deleted successfully.');
            break;
        case '6' :
            const folderPathToList = await rl.question(chalk.cyan('\n Enter the folder Path to list or press "Enter" for current Folder : '));
            const listItem =await listItems(folderPathToList|| './');
            console.log(chalk.green.bold('\n Items in Folder : \n'));
            listItem.forEach((item)=>{
                const icon = item.type === "Folder"? '📁 ': '🗃️  '
                console.log(chalk.grey(`${icon} ${item.name} - ${item.type}`))
            })
            break;
        case '7':
            rl.close()
            return ;
            
        default:
            console.log(chalk.red(`Choose only 1 to 7 options : `));
            break;


    }
    await rl.question(chalk.greenBright('\n Press Enter to contineu : '))
    menu();
}
menu();