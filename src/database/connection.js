const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage: './database/database.sqlite'
});

async function testDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Banco de dados conectado com sucesso')
    } catch (error) {
        console.log('Conexão falhou ', error)
    }
}

testDatabase().then();

module.exports = sequelize;