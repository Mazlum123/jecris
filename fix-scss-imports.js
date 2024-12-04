const fs = require('fs');
const path = require('path');

// Fonction pour remplacer les @import par @use
function replaceImports(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      replaceImports(filePath);
    } else if (file.endsWith('.scss')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      content = content.replace(/@import\s+'([^']+)';/g, "@use '$1' as *;");
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated: ${filePath}`);
    }
  });
}

// Chemin vers le dossier des styles
const stylesPath = path.join(__dirname, 'src/styles');
replaceImports(stylesPath);
