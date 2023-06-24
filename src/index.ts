import { program } from 'commander';
import handleAdd from "./handle-add";
import handleRemove from "./handle-remove";


const executeCommand = (command: string, args: string[]) => {
    try {
        switch (command) {
            case 'add':
                handleAdd(args);
                break;
            case 'remove':
                handleRemove(args);
                break;
            default:
                //TODO use program to print help
                throw new Error(`Unknown command: ${command}`);
        }
    } catch (e: any) {
        console.error(e.message);
    }
};


program
    .option('-a, --add [arguments...]', 'Add a new item to the package.json file')
    .option('-r, --remove [arguments...]', 'Remove an item from the package.json file')

program.parse();

const options = program.opts();

if (Object.keys(options).length > 1) {
    program.error("You can only use one option at a time")
}

const command = Object.keys(options)[0];

executeCommand(command, options[command]);
