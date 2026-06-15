import { LLMProvider } from "./llm.provider.interface";
import { GenerateTextInput, GenerateTextResult } from "./types";

export class LLMClient {
  constructor(private provider: LLMProvider) {}

  async generateText(input: GenerateTextInput): Promise<GenerateTextResult> {
    return this.provider.generateText(input);
  }
}
