import { ask } from '../practicaSprint/input.js';
import { primo } from '../practicaSprint/Index02.js';
import chalk from 'chalk';

async function main() {
    const a = Number(await ask('Evalua si el siguiente número es primo: '));
    console.log(chalk.cyanBright(`¿El número ${a} es primo?`, primo(a)));   
}
main();