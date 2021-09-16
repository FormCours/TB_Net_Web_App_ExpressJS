module.exports = {

    index: (req, res) => {

        const dateFormated = (new Date()).toLocaleDateString('fr-be', {
            day: "numeric", 
            month: "long", 
            year: "numeric"
        });

        const ducks = ["Riri", "Zaza", "Della"];
        
        res.render('home/index', {dateDuJour : dateFormated, ducks});
    },

    about: (req, res) => {
        
        res.render('home/about');
    },

    contact: (req, res) => {
        
        res.render('home/contact');
    },
    
    contactPost: (req, res) => {
        const {username, message} = req.body;

        console.log(`${username} : ${message}`);

        res.render('home/contactResponse', {username});
    }

}