import homeController from "../controllers/homeController"

export default (router) => {

    router.get('/home', homeController.index)
    router.get('/about', homeController.about)
    router.get('/contact', homeController.contact)
    router.post('/contact', homeController.contactPost)
    
}