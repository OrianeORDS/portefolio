import { execSync } from 'child_process';
import { writeFileSync } from 'fs';



try {
    const lastUpdate = execSync('git log -1 --format=%cd', { encoding: 'utf-8' }).trim();
  
    const content = `export const lastUpdate = "${lastUpdate}";\n`;
    writeFileSync('./components/LastUpdate.js', content);
  
    console.log('Last update date generated: ', lastUpdate);
  } catch (error) {
    console.error('Erreur en récupérant la date du dernier commit: ', error.message);
  }