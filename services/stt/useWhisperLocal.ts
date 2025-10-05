export const useWhisperLocal = () => {
  const transcribe = async (audioUri: string) => {
    const formData = new FormData();
    formData.append("audio", {
      uri: audioUri,
      name: "audio.wav",
      type: "audio/wav",
    } as any);

    const res = await fetch("http://<YOUR_LOCAL_IP>:4000/transcribe", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.text;
  };

  return { transcribe };
};
