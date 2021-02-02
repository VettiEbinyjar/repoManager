let express = require('express');
let repoConrtroller = require('../controllers/repoConrtroller');
const repoRouter = express.Router();

repoRouter.post('/create', (request, response) => {
    repoConrtroller.uploadrepo(request.body.repoName).then((result) => {
        response.status(result.status).json(result)
    }).catch((err) => {
        console.log(err);
        response.status(501).json(err)

    })

})

repoRouter.get('/retrive', (request, response) => {

    repoConrtroller.retriveFilesByTags(request.query.repoName).then((result) => {
        response.status(result.status).json(result)
    }).catch((err) => {
        console.log(err);
        response.status(500).json(err)

    })
})


module.exports = repoRouter;
