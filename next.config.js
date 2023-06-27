const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = 'next/constants'

module.export = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.MONGODB_USERNAME,
        mongodb_password: process.env.MONGODB_PASSWORD,
        mongodb_cluster: process.env.MONGODB_CLUSTER,
        mongodb_db: process.env.MONGODB_DB,
        someOtherVarName: 'someOtherVarValue'
      }
    }
  }
  return {
    env: {
      mongodb_username: 'bogdank208',
      mongodb_password: 'bogdank208',
      mongodb_cluster: 'cluster0.dgcghix.mongodb.net',
      mongodb_db: 'nextjsCourse'
    }
  }
  
}
