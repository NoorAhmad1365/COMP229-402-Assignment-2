 const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://noorsultan539_db_user:<db_password>@myportfoliocluster.ihm0ymm.mongodb.net/?appName=MyPortfolioCluster"
 }
 export default config
