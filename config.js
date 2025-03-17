const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2ZKqSBT8l3rVvrIJakRHDAjuuCCLMHEfSiiwBAGLEsQO/30C7Y7uh7k9PW8VteTJysxz3kCa4QLNUQ0GbyAnuIQUNUta5wgMgHIJQ0RAGwSQQjAAmd7jksUmE9iooxl43zvM2PGGMbfzYZJeZ2dX08oeVLJ0Ir+Cexvkl32C/W8AL1YpLsoeklq2xYuaV5yYeImvLqqTm4DrfiWnFV6qbs5br+DeIEJMcBpp+QGdEIHJHNVriMnP6IvLoS/qQr2g1hjmgtHHccQ5PcNXnUmmYz8QsWRfu240jn5GfyH4/IHQFteXzM4MT8SzJK0v/q7UCUd0fm4gMj0qZDHd6E/6BY5SFEwDlFJM6x/rvtKC2M5uFWeHdbKRBW+09ec5nuWjsc7oiVwu7Um5S2DpCD8jLgTbzjF2zD0hE17Y5OvxmBHUpXTixx2bP4Y1FzDJxollx/1KfE0+shL/H91bw+NSDKeLk2Boql8UB6taddnziHSjzsraLcLCHnuKKly1+Gf0w1rSOjNpn4gcjLUUl1caLknpochQ5aMzbE0YpafpoW5on/QhvZDvWJpOrdVc/7pl6MTLN8zSZdTI96PckdmYy6yrerzZ54tlYGlYewuOnksZL3piWpWHc2tfKKWwX+o3stAT+8hVuOOZ3jF6ffwoRvU0AAP23gYERbigBFKcpY89ttsGMCi3yCeIPuQFUO5Fjrg9mqtkp1+MLEhXvB94V8Pv8tPYVZMrX8RdpdU3qlfQBjnJfFQUKJjggmak1lFRwAgVYPD37zZI0ZU+jWvK8WwbhJgU1EoveZLB4MPVj0Po+9klpds69YfNAhEwYD63EaU4jYpGx0sKiX/AJRoeIC3AIIRJge5tEKAS+6jBA0Lmn3Q7um2dYf86JWizOxMraigfsvR5hRe4PbsXuRdJFIUXgUW9l35/z71IXNiDUICCFHKgDfB7zzRv/mght0XmQVGmSter+q6mUI1lyLmQO63pw4an9oigAAwouaA22EM/vuRmFqP0G1w4J+p4sta8BOq37oRwuZAWs121JPoX3KenYPD2OaeGWdDgeVxvZs/HDmiD0yOCuPk51xUkRhRESeJ6A477q/hVNULCPP+VItrgvovevAgQhTgpwAAMV7s9t9KH2hLZwkIYj2UmkoeRDD5N+kj7M03sCh/d/hJD3d15es5W57jv95VbvvVXy+4lOZAAWzLxN7b2+i8gDVMqO13XzldmXPO03mtp6QYz1mbweWHLusnr+5EQlStFmx9zvZpUl+7Q0/K1onPMJFOx1V8XmkcPRle7jcWROVq2Vmr12lR7huVrsa5+0PU5mwnEN2prHV9r53rjF5Nyt/aWB6gPWbxTAw0ji+t58/7kVLFEdrDsBHL/KuS2c4J7YzqeB6reCQPRkWnOHqtnHz7mQPI+f/GjQ97eoxVi9BhnKTyh/zbna8qZe/sLxvuA/EOSlMDMMm5tuqfjeMSZ88Cf5+vdeuOLVqoe0T53Ie8m8pzXRga433+3QZ5AGmbk1MQwDUiGA9AGCSyo/NmoJj6hgsJTDgasJHAcy/ZY4f4PdwiU2t4HAAA=',
    PREFIXE: process.env.PREFIX || "*",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
                  
