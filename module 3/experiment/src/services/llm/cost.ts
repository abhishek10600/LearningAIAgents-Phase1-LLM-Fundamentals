import { CostBreakdown, Usage } from "./types";
import { MODEL_PRICING } from "./pricing";

interface CalculateCostInput {
  model: string;
  usage: Usage;
}

export const calculateCost = ({
  model,
  usage,
}: CalculateCostInput): CostBreakdown => {
  const pricing = MODEL_PRICING[model as keyof typeof MODEL_PRICING];

  if (!pricing) {
    throw new Error(`Pricing not found: ${model}`);
  }

  const inputCost = (usage.inputTokens / 1_000_000) * pricing.inputPerMillions;
  const outputCost =
    (usage.outputTokens / 1_000_000) * pricing.outputPerMillions;

  return {
    inputCost: Number(inputCost.toFixed(6)),
    outputCost: Number(outputCost.toFixed(6)),
    totalCost: Number((inputCost + outputCost).toFixed(6)),
  };
};
