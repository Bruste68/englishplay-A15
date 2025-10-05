const fs = require('fs');
const path = require('path');

module.exports = function withGoogleServicesCopy(config) {
  const src = path.join(__dirname, '..', 'google-services.json');
  const dest = path.join(__dirname, '..', 'android', 'app', 'google-services.json');

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('✅ google-services.json copied to android/app');
  } else {
    console.warn('⚠️ google-services.json not found in root. Skipping copy.');
  }

  return config;
};
