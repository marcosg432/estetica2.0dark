/**
 * Configuração PM2 - Estética Harmonik
 * Uso: pm2 start ecosystem.config.cjs
 */

module.exports = {
  apps: [{
    name: 'estetica-harmonik',
    script: 'server.js',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '150M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
