export const useChatClaude = () => {
  const sendMessage = async (message: string) => {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer <YOUR_OPENROUTER_API_KEY>`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-2",
        messages: [{ role: "user", content: message }],
      }),
    });
    const data = await res.json();
    return data.choices[0]?.message?.content || "";
  };

  return { sendMessage };
};
