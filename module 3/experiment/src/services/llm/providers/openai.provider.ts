import { OpenAI } from "openai";
import { LLMProvider } from "../llm.provider.interface";
import { GenerateTextInput, GenerateTextResult } from "../types";
import {
  mapMessagesToOpenAIInput,
  mapOpenAIResponseToGenerateTextResult,
} from "../helpers";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

export class OpenAIProvider implements LLMProvider {
  private client: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("OPENAI_API_KEY not set");
    }

    this.client = new OpenAI({ apiKey });
  }

  async generateText(input: GenerateTextInput): Promise<GenerateTextResult> {
    try {
      const response = await this.client.responses.create({
        model: input.model,
        reasoning: {
          effort: "low",
        },
        instructions: input.system,
        input: mapMessagesToOpenAIInput(input.messages),
        max_output_tokens: input.maxTokens,
      });

      return mapOpenAIResponseToGenerateTextResult(response, input.model);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`OpenAIProvider.generateText failed: ${error.message}`);
      }

      throw error;
    }
  }
}
