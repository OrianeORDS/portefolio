const { execSync } = require('child_process');
const fs = require('fs');

try {
  const lastUpdate = execSync('git log -1 --format=%cd', { encoding: 'utf-8' }).trim();

  const content = `export const lastUpdate = "${lastUpdate}";\n`;
  fs.writeFileSync('./components/LastUpdate.js', content);
  console.log('Last update date generated: ', lastUpdate);

} catch (error) {
  console.error('Erreur en récupérant la date du dernier commit: ', error.message);
}