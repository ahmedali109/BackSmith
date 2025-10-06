import chalk from 'chalk';

export const RENAME_COMMAND = ({ oldName, newName }: { oldName: string; newName: string }) => {
  console.log(chalk.green(`Rename command executed: ${oldName} -> ${newName}`));
};
