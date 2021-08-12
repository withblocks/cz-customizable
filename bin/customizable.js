#!/usr/bin/env node

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const { execSync } = require('child_process');
const inquirer = require('inquirer');

const app = require('../src/index');

console.info('cz-customizable standalone version');

const commit = (commitMessage) => {
  try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: [0, 1, 2] });
  } catch (error) {
    console.error('>>> ERROR', error.error);
  }
};

app.prompter(inquirer, commit);
