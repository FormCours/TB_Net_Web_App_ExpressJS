const config = require('./config.json');

module.exports = (mode) => {
    const arg = process.argv.slice(2).map(a => a.toLowerCase());

    const onDev = arg.find(a => /^(--developpement|-dev)$/.test(a)) !== undefined;
    const onProd = arg.find(a => /^(--production|-prod)$/.test(a)) !== undefined;

    if(onDev && onProd) {
        console.error('Error : Mode dev and prod !');
        process.exit();
    }

    if(mode) {
        return config[mode] || config.local;
    }

    return onProd ? config.production :
            onDev ? config.developpement : 
            config.local;
}