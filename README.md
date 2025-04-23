# Portfolio Test Automation

## Project Overview

This test automation suite is designed to verify the functionality of [Julie's portfolio](https://julielaursen.github.io/).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)

## Technologies Used

- TypeScript
- Cypress
- Node.js

## Project Structure

```
portfolio-test-automation/
├── tests/
│   │   └── testName.spec.ts
├── data/
│   ├── mocks, etc
├── cypress.config.ts
├── package.json
├── .gitignore
└── README.md
```

- `data/`: Contains data files used in tests.
- `tests/`: Contains test files organized by test suites or features.
- `.github/workflows/`: Contains GitHub Actions workflow
- `cypress.config.ts`: Configuration file for Cypress
- `package.json`: Defines project dependencies and scripts
- `.gitignore`: Specifies intentionally untracked files to ignore

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```

## Running Tests

To run all tests, use the following command:

```
TBD
```

## Reporting

To generate a HTML test report, use the following command:

```
TBD```

## Continuous Integration

This project uses GitHub Actions for continuous integration. The workflow is defined in:
`.github/workflows/ci.yml`.

The CI pipeline runs on push to main/master branches and on pull requests.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
