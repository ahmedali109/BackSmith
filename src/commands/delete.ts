import chalk from 'chalk';

export const DELETE_COMMAND = ({ option: projectPath }: { option: string }) => {
  console.log(chalk.green('Delete command executed'));
};
