import inquirer from 'inquirer';
import chalk from 'chalk';
import { ADD_COMMAND } from '@/commands/add.js';
import { DELETE_COMMAND } from '@/commands/delete.js';
import { LIST_COMMAND } from '@/commands/list.js';
import { PREVIEW_COMMAND } from '@/commands/preview.js';
import { RENAME_COMMAND } from '@/commands/rename.js';
import { RUN_COMMAND } from '@/commands/run.js';
import { SAVE_COMMAND } from '@/commands/save.js';

const showHelp = () => {
  console.log(chalk.blue('BackSmith CLI'));
  console.log(chalk.blue('===================='));
  console.log('Usage: backsmith <command> [options]');
  console.log('');
  console.log('Commands:');
  console.log('  add <project_path>        Add a new project');
  console.log('  delete <project_name>     Delete a project');
  console.log('  list                      List all projects');
  console.log('  preview <project_name>    Preview a project');
  console.log('  rename <old_name> <new_name> Rename a project');
  console.log('  run <project_name>        Run a project');
  console.log('  save <project_name>       Save a project configuration');
  console.log('');
  console.log('Options:');
  console.log('  -h, --help                Show help');
};

export const RUN_CLI = async () => {
  const args = process.argv.slice(2);
  let command = args[0];
  let option = args[1];

  if (!command) {
    const { selectedCommand } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedCommand',
        message: 'Select a command:',
        choices: [
          { name: 'Add a new project', value: 'add' },
          { name: 'Delete a project', value: 'delete' },
          { name: 'List all projects', value: 'list' },
          { name: 'Preview a project', value: 'preview' },
          { name: 'Rename a project', value: 'rename' },
          { name: 'Run a project', value: 'run' },
          { name: 'Save a project configuration', value: 'save' },
          { name: 'Show help', value: 'help' },
        ],
      },
    ]);
    command = selectedCommand;
  }

  switch (command) {
    case 'add': {
      if (!option) {
        const { projectPath } = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectPath',
            message: 'Enter project path:',
          },
        ]);
        option = projectPath;
      }
      await ADD_COMMAND({ option });
      break;
    }
    case 'delete': {
      if (!option) {
        const { projectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: 'Enter project name to delete:',
          },
        ]);
        option = projectName;
      }
      await DELETE_COMMAND({ option });
      break;
    }
    case 'list': {
      await LIST_COMMAND();
      break;
    }
    case 'preview': {
      if (!option) {
        const { projectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: 'Enter project name to preview:',
          },
        ]);
        option = projectName;
      }
      await PREVIEW_COMMAND({ option });
      break;
    }
    case 'rename': {
      let oldName = option;
      let newName = args[2];
      if (!oldName) {
        const { oldProjectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'oldProjectName',
            message: 'Enter old project name:',
          },
        ]);
        oldName = oldProjectName;
      }
      if (!newName) {
        const { newProjectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'newProjectName',
            message: 'Enter new project name:',
          },
        ]);
        newName = newProjectName;
      }
      await RENAME_COMMAND({ oldName, newName });
      break;
    }
    case 'run': {
      if (!option) {
        const { projectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: 'Enter project name to run:',
          },
        ]);
        option = projectName;
      }
      await RUN_COMMAND({ option });
      break;
    }
    case 'save': {
      if (!option) {
        const { projectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: 'Enter project name to save:',
          },
        ]);
        option = projectName;
      }
      await SAVE_COMMAND({ option });
      break;
    }
    case '-h':
    case '--help':
    case 'help':
      showHelp();
      break;
    default:
      console.log(chalk.red('❌ Unknown command'));
      showHelp();
  }
};