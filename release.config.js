module.exports = {
branches: "main",
repositoryUrl: "git@github.com:zikorauzo89/labwrk-semVer01.git",
plugins: [
'@semantic-release/commit-analyzer',
'@semantic-release/release-notes-generator',
'@semantic-release/git',
'@semantic-release/github']
}
