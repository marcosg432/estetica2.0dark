/**
 * Configuração PM2 - Lumière Estética
 * Uso: pm2 start ecosystem.config.cjs
 */

module.exports = {
  apps: [{
    name: 'lumiere-estetica',
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
