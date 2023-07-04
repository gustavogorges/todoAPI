const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection')

class Usuario extends Model {}

Usuario.init ({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull : false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    cardAdd: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    },
    cardEdit: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    },
    cardRemove: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    },
    cardMove: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    },
    propertieAdd: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    },
    propertieEdit: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    },
    propertieRemove: {
        type:DataTypes.BOOLEAN,
        allowNull : true
    }
}, {
    sequelize: connection,
    modelName: 'users'
});

Usuario.sync(
    {
       alter : true 
    }
)
.then(() => {
    console.log('Usuario sincronizado')
})
.catch((e) => {
    console.log('Usuario não sincronizado ',e)
})

module.exports = Usuario;
