import chalk from 'chalk';

export const ADD_COMMAND = ({option: projectPath}: {option: string}) => {
    console.log(chalk.green("Add command executed"));
}