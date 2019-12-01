module.exports = {
  apps : [{
    name: 'ION.net',
    script: '/home/rashadbahamas/www/ionbahamas.net/server.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: { NODE_ENV: 'development' },
    env_production: { NODE_ENV: 'production' }
  },
  {
    name: 'CryptoplexCron',
    script: '/home/rashadbahamas/www/cryptoplexCronJob/cron.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    //cron_restart : '0 0 * * *',
    env: { NODE_ENV: 'development' },
    env_production: { NODE_ENV: 'production' }
  }]
};
