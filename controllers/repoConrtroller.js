const repoModelMethods = require('../models/repo/index');
const statuCode = require('../constants/httpStatus');
const repoConrtroller = {}

repoConrtroller.uploadrepo = async (repoName) => {

    return new Promise((resolve, reject) => {
        return repoModelMethods.uploadRepo(repoName).then((result) => {
            return resolve({ ...statuCode.OK, result })
        }).catch((err) => {
            console.log(err);
            return reject({ ...statuCode.INTERNAL_SERVER_ERROR })
        })
    })

}
repoConrtroller.retriveFilesByTags = (repoName) => {
    return new Promise((resolve, reject) => {

        return repoModelMethods.findRepoByTags(repoName).then((result) => {
            if (result) {
                return resolve({ ...statuCode.OK, result })

            } else {
                return reject({ ...statuCode.BAD_REQUEST })

            }
        }).catch((err) => {
            console.log(err);
            return reject({ ...statuCode.INTERNAL_SERVER_ERROR })
        })
    })

}
module.exports = repoConrtroller