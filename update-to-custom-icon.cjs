const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src', 'screens');
const files = fs.readdirSync(screensDir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(screensDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace Ionicons import with CustomIcon.jsx
    content = content.replace(/from ['"]react-native-web-icons[/\w]*['"]/, "from '../components/CustomIcon.jsx'");
    content = content.replace(/from ['"]react-native-vector-icons['"]/, "from '../components/CustomIcon.jsx'");
    content = content.replace(/<Ionicons/, "<CustomIcon");

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
