import chalk from 'chalk';

export const SAVE_COMMAND = ({ option: projectPath }: { option: string }) => {
  console.log(chalk.green('Save command executed'));
};
