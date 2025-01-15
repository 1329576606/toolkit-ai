import type { GenerateToolInput } from 'chains/BaseToolGenerationChain';
import type { Tool } from 'lib/types';
type ToolIteratorInput = {
    openAIBaseURL?: string | undefined;
    openAIApiKey: string;
    serpApiKey: string;
    modelName: string;
    verbose?: boolean;
    maxIterations?: number;
};
declare class ToolIterator {
    private toolkit;
    private openAIApikey;
    private openAIBaseURL?;
    private verbose;
    private maxIterations;
    constructor({ openAIBaseURL, openAIApiKey, serpApiKey, modelName, verbose, maxIterations, }: ToolIteratorInput);
    iterate(input: GenerateToolInput): Promise<Tool>;
    private log;
    private generateInitialTool;
    private runTool;
    private reviseTool;
}
export default ToolIterator;
//# sourceMappingURL=ToolIterator.d.ts.map