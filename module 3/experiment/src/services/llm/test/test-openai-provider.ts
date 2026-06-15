import { calculateCost } from "../cost.js";
import { LLMClient } from "../llm.client.js";
import { OpenAIProvider } from "../providers/openai.provider.js";

const provider = new OpenAIProvider();
const llmClient = new LLMClient(provider);

const result = await llmClient.generateText({
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
