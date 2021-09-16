const homeController = require("../controllers/homeController");


module.exports = (router) => {

    router.get('/home', homeController.index)
    router.get('/about', homeController.about)
    router.get('/contact', homeController.contact)
    router.post('/contact', homeController.contactPost)

}