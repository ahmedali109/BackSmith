import chalk from 'chalk';

export const PREVIEW_COMMAND = ({ option: projectPath }: { option: string }) => {
  console.log(chalk.green('Preview command executed'));
};
