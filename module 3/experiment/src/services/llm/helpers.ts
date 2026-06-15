import { OpenAI } from "openai";
import { GenerateTextResult, Message } from "./types";

export const mapOpenAIResponseToGenerateTextResult = (
  response: OpenAI.Responses.Response,
  model: string,
): GenerateTextResult => {
  return {
    text: response.output_text,
    usage: {
      inputTokens: response.usage?.input_tokens ?? 0,
      outputTokens: response.usage?.output_tokens ?? 0,
      totalTokens: response.usage?.total_tokens ?? 0,
    },
    stopReason:
      response.incomplete_details?.reason ?? response.status ?? "unknown",
    model,
  };
};

export const mapMessagesToOpenAIInput = (messages: Message[]) =>
  messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));
