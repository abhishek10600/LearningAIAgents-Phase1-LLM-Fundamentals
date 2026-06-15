import { calculateCost } from "../cost.js";
import { OpenAIProvider } from "../providers/openai.provider.js";

const provider = new OpenAIProvider();

const result = await provider.generateText({
  model: "gpt-5",
  system: "You are a helpful assistant",
  messages: [
    {
      role: "user",
      content: "Explain transformers simply",
    },
  ],
  maxTokens: 500,
});

const cost = calculateCost({
  model: result.model,
  usage: result.usage,
});

console.log("*****PRICING*****");
console.log(cost);
console.log("**********");

console.log(result);
console.log(result.text);
