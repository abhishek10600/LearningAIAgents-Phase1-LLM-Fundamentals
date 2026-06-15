import { MODELS } from "./models";

export type Role = "system" | "user" | "assistant";

export interface Message {
  role: Role;
  content: string;
}

export type ModelName = (typeof MODELS)[keyof typeof MODELS];

export interface Usage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

export interface GenerateTextInput {
  model: ModelName;
  messages: Message[];
  temperature?: number;
  maxTokens?: number;
  system?: string;
}

export interface GenerateTextResult {
  text: string;
  usage: Usage;
  stopReason: string;
  model: string;
}

export interface CostBreakdown {
  inputCost: number;
  outputCost: number;
  totalCost: number;
}
