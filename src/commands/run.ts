import chalk from 'chalk';

export const RUN_COMMAND = ({ option: projectPath }: { option: string }) => {
  console.log(chalk.green('Run command executed'));
};
