 const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://noorsultan539_db_user:YJyK8Ed5DxLyM8fI@myportfoliocluster.ihm0ymm.mongodb.net/myportfolio?retryWrites=true&appName=MyPortfolioCluster"
 }
 export default config
