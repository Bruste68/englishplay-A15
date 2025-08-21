// scripts/create-google-services.js

const fs = require('fs');
const path = require('path');

function createGoogleServicesFile() {
  const base64 = process.env.GOOGLE_SERVICES_JSON;

  if (!base64) {
    console.log('⚠️ GOOGLE_SERVICES_JSON env not found. Skipping.');
    return;
  }

  const androidAppPath = path.resolve(__dirname, '../android/app');
  const targetPath = path.join(androidAppPath, 'google-services.json');

  if (!fs.existsSync(androidAppPath)) {
    fs.mkdirSync(androidAppPath, { recursive: true });
  }

  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync(targetPath, buffer);
  console.log('✅ google-services.json created at android/app/');
}

createGoogleServicesFile();
