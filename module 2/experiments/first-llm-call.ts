import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chat = async () => {
  // const response = await openai.chat.completions.create({
  //   model: `${process.env.MODEL}`,

  //   messages: [
  //     {
  //       role: "user",
  //       content: "What is LLM ?",
  //     },
  //   ],
  // });

  try {
    const response = await openai.responses.create({
      model: `${process.env.MODEL}`,
      reasoning: {
        effort: "low",
      },
      instructions: "You are a helpful assistant.",
      input: "What is LLM ?",
      max_output_tokens: 100,
    });

    console.log(response);
    return response.output_text;
  } catch (error) {
    console.log("Failed to get response:", error);
    return null;
  }
};

const ans = await chat();

console.log(ans);
