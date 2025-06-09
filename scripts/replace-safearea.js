import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screensDir = path.join(__dirname, '../src/screens');

// Get all screen files
const screenFiles = fs.readdirSync(screensDir)
  .filter(file => file.endsWith('.jsx'));

screenFiles.forEach(file => {
  const filePath = path.join(screensDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Get existing imports
  const imports = content.match(/import.*from.*react-native-web/g);
  if (imports) {
    // Remove SafeAreaView from imports
    content = content.replace(/SafeAreaView,?\s*/g, '');
    // Remove any trailing commas
    content = content.replace(/,\s*}/g, '}');
    // Remove empty import
    content = content.replace(/import\s*\{\s*\}\s*from\s*['"]react-native-web['"]/g, '');
  }

  // Add App.css import if it doesn't exist
  if (!content.includes('import "../App.css"')) {
    // Find the last react-native-web import and add App.css after it
    const lastImport = content.match(/import.*from.*react-native-web/g)?.[0];
    if (lastImport) {
      content = content.replace(lastImport, `${lastImport}\nimport "../App.css"`);
    }
  }

  // Replace SafeAreaView usage with div
  content = content.replace(/<SafeAreaView/g, '<div');
  content = content.replace(/<\/SafeAreaView>/g, '</div>');

  // Replace style={styles.container} with className="container"
  content = content.replace(/style={styles.container}/g, 'className="container"');

  fs.writeFileSync(filePath, content);
});
