import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

export const useCoquiTTS = () => {
  const speak = async (text: string) => {
    const res = await fetch("http://<YOUR_LOCAL_IP>:5000/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const blob = await res.blob();
    const fileUri = FileSystem.documentDirectory + "coqui.wav";
    await FileSystem.writeAsStringAsync(fileUri, await blob.text(), {
      encoding: FileSystem.EncodingType.Base64,
    });

    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    await sound.playAsync();
  };

  return { speak };
};
