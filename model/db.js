import {config} from '../config/config';
var mysql = require('mysql');

// 创建 mysql 连接池资源
console.log(config)
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : config.password,
    database : 'test'
});

exports.query = function(sql, arr){
  return new Promise((resolve,reject) => {
    //建立链接
    pool.getConnection(function(err,connection){
      if(err){throw err;return;}
      connection.query(sql,arr,function(error,results,fields){
        //将链接返回到连接池中，准备由其他人重复使用
        //connection.release();
        pool.releaseConnection(connection);
        if(error){
          throw error;
          reject(err)
        }else{
          let data = {
            results: results,
            fields: fields
          }
          resolve(data)
        }
      });
    });
  }) 
};
