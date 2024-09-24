
export default interface UseCases <InputData,OutputData>{
execute(inputData:InputData ):Promise<OutputData>

} 