# Git API (BETA PROJECT)

## GOALS
- [x] Write repo name on console, with object
- [ ] Bugfix on routes/gitRepos.js
- [ ] add error handling on project
- [ ] Genarate API tokens for users
- [ ] Renders HTML pages


## About Project
You can use this API in your web site like extension for visualize GitHub repos and information or managing your GitHub account with command prompt.

## Setup

### 1. Generate a GitHub Token 
 Firstly generate a GitHub token from => Settings => Developer Settings => Personel Access Tokens => Tokens(classic).
 > [!Warning]
 > YOU CAN SEE YOUR GITHUB TOKEN JUST ONCE AND DON'T SHARE IT ANYONE

 Generate New Token (classic) and submit all the `repo` permissions.
 Click the generate token button.

### 2. Configure Config File For Your Project.
 You must `change` the `config.json` file from `config` directory.

 > User name must be your GitHub username.
 > Github token must be your generated token.

### 3. Change The Server.js
 Change `/gitRepos` with your link branch.

 ```node.js
  app.use("/gitRepos", gitRepos); 
 ```
### 4. Running API
To run api, run the following command

```bash
  npm run test
```

## Features
- This api pulling your information on your profile like repo names, repo languages, about repo and etc. 
- I will add api authorization
- More information about your profile like stars, forks and etc.
