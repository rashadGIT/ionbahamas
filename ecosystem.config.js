module.exports = {
  apps : [{
    name: 'ION.net',
    script: './server.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: { NODE_ENV: 'development' },
    env_production: { NODE_ENV: 'production' }
  },
  {
    name: 'test',
    script: '/home/rashadbahamas/www/cryptoplexCronJob/ms.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    cron_restart : '* * * * *',
    env: { NODE_ENV: 'development' },
    env_production: { NODE_ENV: 'production' }
  }]
};
