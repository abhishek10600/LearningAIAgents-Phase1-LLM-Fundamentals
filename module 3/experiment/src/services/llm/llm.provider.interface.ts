import { GenerateTextInput, GenerateTextResult } from "./types";

export interface LLMProvider {
  generateText(input: GenerateTextInput): Promise<GenerateTextResult>;
}
