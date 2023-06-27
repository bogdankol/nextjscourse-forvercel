const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = 'next/constants'

module.export = (phase) => {

  return {
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_cluster: process.env.MONGODB_CLUSTER,
      mongodb_db: process.env.MONGODB_DB
    }
  }
  
}
