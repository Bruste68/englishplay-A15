import { writeFileSync } from "fs";

if (process.env.GOOGLE_SERVICES_JSON) {
  console.log("📦 복원 중: google-services.json");
  const filePath = "android/app/google-services.json";
  const json = Buffer.from(process.env.GOOGLE_SERVICES_JSON, "base64").toString("utf-8");
  writeFileSync(filePath, json);
  console.log("✅ 복원 완료: google-services.json");
}
