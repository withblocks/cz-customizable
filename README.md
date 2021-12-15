# @withblocks/cz-customizable

The customizable Commitizen plugin (or standalone utility) to help achieve consistent commit messages like
the [AngularJS team](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

## Installation

Install the module

```bash
yarn add @withblocks/cz-customizable --dev
```

## Usage

Before you can commit with consistent commit message like the AngularJS team add the following in your `package.json` file:

```
"scripts": {
  ...
  "commit": "git add . && cz-customizable && git push",
}
```

To configure cz-customizable you could use our default configuration, put the code in `.cz-config.js` file:

```js
/*
 * Copyright (c) 2021 With Blocks. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  scopes: [
    {
      name: "mobile"
    },
    {
      name: "web"
    },
    {
      name: "shared"
    }
  ],
  messages: {
    type: "What type of changes are you committing:",
    scope: "\nEnlighten us with the scope (optional):",
    customScope: "Add the scope of your liking:",
    subject: "Write a short and simple description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer: "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you the above looks right?"
  },
  types: [
    {
      emoji: "🐛",
      value: "fix",
      name: "🐛   fix:        Changes that fix a bug"
    },
    {
      emoji: "🚀",
      value: "feat",
      name: "🚀   feat:       Changes that introduce a new feature"
    },
    {
      emoji: "🔍",
      value: "refactor",
      name: "🔍   refactor:   Changes that neither fixes a bug nor adds a feature"
    },
    {
      emoji: "💡",
      value: "test",
      name: "💡   test:       Adding missing tests"
    },
    {
      emoji: "💅",
      value: "style",
      name: "💅   style:      Changes that do not impact the code base  \n                   (white-space, formatting, missing semi-colons, etc)"
    },
    {
      emoji: "📝",
      value: "docs",
      name: "📝   docs:       Changes to the docs"
    },
    {
      emoji: "🤖",
      value: "chore",
      name: "🤖   chore:      Changes to the build process or auxiliary tools\n                   and or libraries such as auto doc generation"
    },
    {
      emoji: "⏪",
      value: 'revert',
      name: '⏪    revert:     Revert to a commit'
    }
  ],
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "#",
  ticketNumberRegExp: "\\d{1,5}",
  allowCustomScopes: true,
  allowBreakingChanges: [
    "feat",
    "fix",
    "chore"
  ],
  breakingPrefix: "🚧 BREAKING CHANGES 🚧",
  footerPrefix: "CLOSES ISSUE:",
  subjectLimit: 100
};
```

## Options

Here are the options you can set in your `.cz-config.js`:

* **subjectLimit**: {number, default 100}: This is the commit first line. Example: `feat: this is a new feature` or `feat(scopePayments): this is a new feature`
* **subjectSeparator**: {string, default ': '}: This is the subject separator. Example: `feat: this is a new feature`
* **typePrefix**: {string, default ''}: This is the commit type prefix. Example: config: `{ typePrefix: '[' }`, result: `[feat: this is a new feature`
* **typeSuffix**: {string, default ''}: This is the commit type suffix. Example: config: `{ typePrefix: '[', typeSuffix: ']', subjectSeparator: ' ' }`, result: `[feat] this is a new feature`

* **scopes**: {Array of Strings}: Specify the scopes for your particular project. Eg.: for some banking system: ["acccounts", "payments"]. For another travelling application: ["bookings", "search", "profile"]
* **scopeOverrides**: {Object where key contains a Array of String}: Use this when you want to override scopes for a specific commit type. Example bellow specify scopes when type is `fix`:
  ```
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  }
  ```
* **allowCustomScopes**: {boolean, default false}: adds the option `custom` to scope selection so you can still type a scope if you need.
* **allowBreakingChanges**: {Array of Strings: default none}. List of commit types you would like to the question `breaking change` prompted. Eg.: ['feat', 'fix'].
* **skipQuestions**: {Array of Strings: default none}. List of questions you want to skip. Eg.: ['body', 'footer'].
* **appendBranchNameToCommitMessage**: If you use `cz-customizable` with `cz-customizable-ghooks`, you can get the branch name automatically appended to the commit message. This is done by a commit hook on `cz-customizable-ghooks`. This option has been added on `cz-customizable-ghooks`, v1.3.0. Default value is `true`.
* **ticketNumberPrefix**: {string, default 'ISSUES CLOSED:'}: Set custom prefix for footer ticker number.
* **breakingPrefix**: {string, default 'BREAKING CHANGE:'}: Set a custom prefix for the breaking change block in commit messages.
* **footerPrefix**: {string, default 'ISSUES CLOSED:'}: Set a custom prefix for the footer block in commit messages. Set to empty string to remove prefix.
* **breaklineChar**: {string, default '|'}: It gets replaced with \n to create the breakline in your commit message. This is supported for fields `body` and `footer` at the moment.
* **upperCaseSubject**: { boolean, default false }: Capitalizes first subject letter if set to `true`
* **askForBreakingChangeFirst**: { boolean, default false }: It asks for breaking change as first question when set to `true`

