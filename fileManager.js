import * as readline from 'node:readline/promises'
import chalk from "chalk"
import { stdin, stdout } from 'node:process';
import {createFolder} from './sync.js'
const rl = readline.createInterface({
    input:stdin,
    output:stdout,
});
async function menu () {
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

    }


}
menu();