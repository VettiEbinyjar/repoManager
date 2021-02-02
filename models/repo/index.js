const repoModel = require('./repoModel');

let repoModelMethods = {}

repoModelMethods.uploadRepo = async (repoName) => {
    return await repoModel.create({repoName:repoName})
}
repoModelMethods.findRepoByTags = async (repoName) => {
    let repoQuery = {
        repoName: { $regex: repoName }
    }
    return await repoModel.find(repoQuery)
}
module.exports = repoModelMethods