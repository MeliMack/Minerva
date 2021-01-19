module.exports=function(sequelize,dataTypes){
    let alias="product";

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        price:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        description:{
            type:dataTypes.STRING(500),
            allowNull:false
        }
    }

    let config={
        tableName:"product",
        timestamps:false
    }
    
    let product= sequelize.define(alias, cols, config);

    return product;
}