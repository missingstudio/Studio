// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file llm/service.proto (package llm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Struct } from "@bufbuild/protobuf";

/**
 * @generated from enum llm.v1.FinishReason
 */
export enum FinishReason {
  /**
   * @generated from enum value: NULL = 0;
   */
  NULL = 0,

  /**
   * @generated from enum value: LENGTH = 1;
   */
  LENGTH = 1,

  /**
   * @generated from enum value: STOP = 2;
   */
  STOP = 2,

  /**
   * @generated from enum value: ERROR = 3;
   */
  ERROR = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(FinishReason)
proto3.util.setEnumType(FinishReason, "llm.v1.FinishReason", [
  { no: 0, name: "NULL" },
  { no: 1, name: "LENGTH" },
  { no: 2, name: "STOP" },
  { no: 3, name: "ERROR" },
]);

/**
 * @generated from message llm.v1.Role
 */
export class Role extends Message<Role> {
  /**
   * @generated from oneof llm.v1.Role.role
   */
  role: {
    /**
     * @generated from field: string system = 1;
     */
    value: string;
    case: "system";
  } | {
    /**
     * @generated from field: string user = 2;
     */
    value: string;
    case: "user";
  } | {
    /**
     * @generated from field: string assistant = 3;
     */
    value: string;
    case: "assistant";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Role>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.Role";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "system", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "role" },
    { no: 2, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "role" },
    { no: 3, name: "assistant", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "role" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role {
    return new Role().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJsonString(jsonString, options);
  }

  static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean {
    return proto3.util.equals(Role, a, b);
  }
}

/**
 * @generated from message llm.v1.ResponseFormat
 */
export class ResponseFormat extends Message<ResponseFormat> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  constructor(data?: PartialMessage<ResponseFormat>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ResponseFormat";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseFormat {
    return new ResponseFormat().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseFormat {
    return new ResponseFormat().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseFormat {
    return new ResponseFormat().fromJsonString(jsonString, options);
  }

  static equals(a: ResponseFormat | PlainMessage<ResponseFormat> | undefined, b: ResponseFormat | PlainMessage<ResponseFormat> | undefined): boolean {
    return proto3.util.equals(ResponseFormat, a, b);
  }
}

/**
 * @generated from message llm.v1.ChatCompletionMessage
 */
export class ChatCompletionMessage extends Message<ChatCompletionMessage> {
  /**
   * role of the message author. One of "system", "user", "assistant".
   *
   * @generated from field: string role = 1;
   */
  role = "";

  /**
   * content of the message
   *
   * @generated from field: string content = 2;
   */
  content = "";

  /**
   * @generated from field: google.protobuf.Struct logprobs = 3;
   */
  logprobs?: Struct;

  constructor(data?: PartialMessage<ChatCompletionMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ChatCompletionMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "logprobs", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCompletionMessage {
    return new ChatCompletionMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCompletionMessage {
    return new ChatCompletionMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCompletionMessage {
    return new ChatCompletionMessage().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCompletionMessage | PlainMessage<ChatCompletionMessage> | undefined, b: ChatCompletionMessage | PlainMessage<ChatCompletionMessage> | undefined): boolean {
    return proto3.util.equals(ChatCompletionMessage, a, b);
  }
}

/**
 * @generated from message llm.v1.ChatCompletionRequest
 */
export class ChatCompletionRequest extends Message<ChatCompletionRequest> {
  /**
   * @generated from field: string model = 1;
   */
  model = "";

  /**
   * a list of messages comprising all the conversation so far
   *
   * @generated from field: repeated llm.v1.ChatCompletionMessage messages = 2;
   */
  messages: ChatCompletionMessage[] = [];

  /**
   * temperature of the sampling, between [0, 2]. default = 1.0
   *
   * @generated from field: optional float temperature = 3;
   */
  temperature?: number;

  /**
   * @generated from field: optional uint32 seed = 4;
   */
  seed?: number;

  /**
   * number of chat completion choices to generate for each input message. default = 1
   *
   * @generated from field: optional uint32 n = 5;
   */
  n?: number;

  /**
   * @generated from field: optional float presence_penalty = 6;
   */
  presencePenalty?: number;

  /**
   * @generated from field: optional float frequency_penalty = 7;
   */
  frequencyPenalty?: number;

  /**
   * whether to stream partial completions back as they are generated. default = false
   *
   * @generated from field: optional bool stream = 8;
   */
  stream?: boolean;

  /**
   * @generated from field: optional uint32 top_k = 9;
   */
  topK?: number;

  /**
   * @generated from field: optional float top_p = 10;
   */
  topP?: number;

  /**
   * @generated from field: repeated string stop = 11;
   */
  stop: string[] = [];

  /**
   * @generated from field: optional uint64 max_tokens = 12;
   */
  maxTokens?: bigint;

  /**
   * @generated from field: optional bool logprobs = 13;
   */
  logprobs?: boolean;

  /**
   * @generated from field: optional uint32 top_logprobs = 14;
   */
  topLogprobs?: number;

  /**
   * @generated from field: optional google.protobuf.Struct logit_bias = 15;
   */
  logitBias?: Struct;

  /**
   * @generated from field: optional llm.v1.ResponseFormat response_format = 16;
   */
  responseFormat?: ResponseFormat;

  /**
   * @generated from field: optional string user = 17;
   */
  user?: string;

  /**
   * @generated from field: optional google.protobuf.Struct tool_choice = 18;
   */
  toolChoice?: Struct;

  constructor(data?: PartialMessage<ChatCompletionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ChatCompletionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "model", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "messages", kind: "message", T: ChatCompletionMessage, repeated: true },
    { no: 3, name: "temperature", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 4, name: "seed", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 5, name: "n", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 6, name: "presence_penalty", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 7, name: "frequency_penalty", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 8, name: "stream", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 9, name: "top_k", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 10, name: "top_p", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 11, name: "stop", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "max_tokens", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 13, name: "logprobs", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 14, name: "top_logprobs", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 15, name: "logit_bias", kind: "message", T: Struct, opt: true },
    { no: 16, name: "response_format", kind: "message", T: ResponseFormat, opt: true },
    { no: 17, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 18, name: "tool_choice", kind: "message", T: Struct, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCompletionRequest {
    return new ChatCompletionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCompletionRequest {
    return new ChatCompletionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCompletionRequest {
    return new ChatCompletionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCompletionRequest | PlainMessage<ChatCompletionRequest> | undefined, b: ChatCompletionRequest | PlainMessage<ChatCompletionRequest> | undefined): boolean {
    return proto3.util.equals(ChatCompletionRequest, a, b);
  }
}

/**
 * @generated from message llm.v1.CompletionChoice
 */
export class CompletionChoice extends Message<CompletionChoice> {
  /**
   * index of the choice in the list of choices.
   *
   * @generated from field: uint32 index = 1;
   */
  index = 0;

  /**
   * message generated by the model.
   *
   * @generated from field: llm.v1.ChatCompletionMessage message = 2;
   */
  message?: ChatCompletionMessage;

  /**
   * @generated from field: google.protobuf.Struct logprobs = 3;
   */
  logprobs?: Struct;

  /**
   * @generated from field: string finish_reason = 4;
   */
  finishReason = "";

  constructor(data?: PartialMessage<CompletionChoice>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.CompletionChoice";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "message", kind: "message", T: ChatCompletionMessage },
    { no: 3, name: "logprobs", kind: "message", T: Struct },
    { no: 4, name: "finish_reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompletionChoice {
    return new CompletionChoice().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompletionChoice {
    return new CompletionChoice().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompletionChoice {
    return new CompletionChoice().fromJsonString(jsonString, options);
  }

  static equals(a: CompletionChoice | PlainMessage<CompletionChoice> | undefined, b: CompletionChoice | PlainMessage<CompletionChoice> | undefined): boolean {
    return proto3.util.equals(CompletionChoice, a, b);
  }
}

/**
 * @generated from message llm.v1.Usage
 */
export class Usage extends Message<Usage> {
  /**
   * number of tokens in the prompt.
   *
   * @generated from field: optional int32 prompt_tokens = 1;
   */
  promptTokens?: number;

  /**
   * number of tokens in the generated completion.
   *
   * @generated from field: optional int32 completion_tokens = 2;
   */
  completionTokens?: number;

  /**
   * total number of tokens used in the request (prompt + completion).
   *
   * @generated from field: optional int32 total_tokens = 3;
   */
  totalTokens?: number;

  constructor(data?: PartialMessage<Usage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.Usage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prompt_tokens", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "completion_tokens", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "total_tokens", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Usage {
    return new Usage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Usage {
    return new Usage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Usage {
    return new Usage().fromJsonString(jsonString, options);
  }

  static equals(a: Usage | PlainMessage<Usage> | undefined, b: Usage | PlainMessage<Usage> | undefined): boolean {
    return proto3.util.equals(Usage, a, b);
  }
}

/**
 * @generated from message llm.v1.ChatCompletionResponse
 */
export class ChatCompletionResponse extends Message<ChatCompletionResponse> {
  /**
   * unique id for the chat completion.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * object type, which is always "chat.completion[.chunk]".
   *
   * @generated from field: string object = 2;
   */
  object = "";

  /**
   * unix timestamp (in seconds) of when the chat completion was created.
   *
   * @generated from field: uint64 created = 3;
   */
  created = protoInt64.zero;

  /**
   * model used for the completion
   *
   * @generated from field: string model = 4;
   */
  model = "";

  /**
   * list of generated completion choices for the input prompt
   *
   * @generated from field: repeated llm.v1.CompletionChoice choices = 5;
   */
  choices: CompletionChoice[] = [];

  /**
   * usage statistics for the completion request.
   *
   * @generated from field: llm.v1.Usage usage = 6;
   */
  usage?: Usage;

  /**
   * @generated from field: string system_fingerprint = 7;
   */
  systemFingerprint = "";

  constructor(data?: PartialMessage<ChatCompletionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ChatCompletionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "model", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "choices", kind: "message", T: CompletionChoice, repeated: true },
    { no: 6, name: "usage", kind: "message", T: Usage },
    { no: 7, name: "system_fingerprint", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCompletionResponse {
    return new ChatCompletionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCompletionResponse {
    return new ChatCompletionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCompletionResponse {
    return new ChatCompletionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCompletionResponse | PlainMessage<ChatCompletionResponse> | undefined, b: ChatCompletionResponse | PlainMessage<ChatCompletionResponse> | undefined): boolean {
    return proto3.util.equals(ChatCompletionResponse, a, b);
  }
}

/**
 * @generated from message llm.v1.ModelRequest
 */
export class ModelRequest extends Message<ModelRequest> {
  /**
   * @generated from field: string provider = 1;
   */
  provider = "";

  constructor(data?: PartialMessage<ModelRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ModelRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModelRequest {
    return new ModelRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModelRequest {
    return new ModelRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModelRequest {
    return new ModelRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ModelRequest | PlainMessage<ModelRequest> | undefined, b: ModelRequest | PlainMessage<ModelRequest> | undefined): boolean {
    return proto3.util.equals(ModelRequest, a, b);
  }
}

/**
 * @generated from message llm.v1.ModelResponse
 */
export class ModelResponse extends Message<ModelResponse> {
  /**
   * @generated from field: map<string, llm.v1.ProviderModels> models = 1;
   */
  models: { [key: string]: ProviderModels } = {};

  constructor(data?: PartialMessage<ModelResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ModelResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "models", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ProviderModels} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModelResponse {
    return new ModelResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModelResponse {
    return new ModelResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModelResponse {
    return new ModelResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ModelResponse | PlainMessage<ModelResponse> | undefined, b: ModelResponse | PlainMessage<ModelResponse> | undefined): boolean {
    return proto3.util.equals(ModelResponse, a, b);
  }
}

/**
 * @generated from message llm.v1.ProviderModels
 */
export class ProviderModels extends Message<ProviderModels> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: repeated llm.v1.Model models = 2;
   */
  models: Model[] = [];

  constructor(data?: PartialMessage<ProviderModels>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ProviderModels";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "models", kind: "message", T: Model, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderModels {
    return new ProviderModels().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderModels {
    return new ProviderModels().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderModels {
    return new ProviderModels().fromJsonString(jsonString, options);
  }

  static equals(a: ProviderModels | PlainMessage<ProviderModels> | undefined, b: ProviderModels | PlainMessage<ProviderModels> | undefined): boolean {
    return proto3.util.equals(ProviderModels, a, b);
  }
}

/**
 * @generated from message llm.v1.Model
 */
export class Model extends Message<Model> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string value = 2;
   */
  value = "";

  constructor(data?: PartialMessage<Model>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.Model";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Model {
    return new Model().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Model {
    return new Model().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Model {
    return new Model().fromJsonString(jsonString, options);
  }

  static equals(a: Model | PlainMessage<Model> | undefined, b: Model | PlainMessage<Model> | undefined): boolean {
    return proto3.util.equals(Model, a, b);
  }
}

/**
 * @generated from message llm.v1.LogResponse
 */
export class LogResponse extends Message<LogResponse> {
  /**
   * @generated from field: repeated google.protobuf.Struct logs = 1;
   */
  logs: Struct[] = [];

  constructor(data?: PartialMessage<LogResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.LogResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "logs", kind: "message", T: Struct, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogResponse {
    return new LogResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogResponse {
    return new LogResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogResponse {
    return new LogResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LogResponse | PlainMessage<LogResponse> | undefined, b: LogResponse | PlainMessage<LogResponse> | undefined): boolean {
    return proto3.util.equals(LogResponse, a, b);
  }
}

/**
 * @generated from message llm.v1.Provider
 */
export class Provider extends Message<Provider> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: string description = 4;
   */
  description = "";

  /**
   * @generated from field: google.protobuf.Struct config = 5;
   */
  config?: Struct;

  constructor(data?: PartialMessage<Provider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.Provider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "config", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Provider {
    return new Provider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Provider {
    return new Provider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Provider {
    return new Provider().fromJsonString(jsonString, options);
  }

  static equals(a: Provider | PlainMessage<Provider> | undefined, b: Provider | PlainMessage<Provider> | undefined): boolean {
    return proto3.util.equals(Provider, a, b);
  }
}

/**
 * @generated from message llm.v1.ProvidersResponse
 */
export class ProvidersResponse extends Message<ProvidersResponse> {
  /**
   * @generated from field: repeated llm.v1.Provider providers = 1;
   */
  providers: Provider[] = [];

  constructor(data?: PartialMessage<ProvidersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.ProvidersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "providers", kind: "message", T: Provider, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProvidersResponse {
    return new ProvidersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProvidersResponse {
    return new ProvidersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProvidersResponse {
    return new ProvidersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProvidersResponse | PlainMessage<ProvidersResponse> | undefined, b: ProvidersResponse | PlainMessage<ProvidersResponse> | undefined): boolean {
    return proto3.util.equals(ProvidersResponse, a, b);
  }
}

/**
 * @generated from message llm.v1.GetProviderRequest
 */
export class GetProviderRequest extends Message<GetProviderRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetProviderRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.GetProviderRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProviderRequest {
    return new GetProviderRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProviderRequest {
    return new GetProviderRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProviderRequest {
    return new GetProviderRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetProviderRequest | PlainMessage<GetProviderRequest> | undefined, b: GetProviderRequest | PlainMessage<GetProviderRequest> | undefined): boolean {
    return proto3.util.equals(GetProviderRequest, a, b);
  }
}

/**
 * @generated from message llm.v1.GetProviderResponse
 */
export class GetProviderResponse extends Message<GetProviderResponse> {
  /**
   * @generated from field: llm.v1.Provider provider = 1;
   */
  provider?: Provider;

  constructor(data?: PartialMessage<GetProviderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.GetProviderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "provider", kind: "message", T: Provider },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProviderResponse {
    return new GetProviderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProviderResponse {
    return new GetProviderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProviderResponse {
    return new GetProviderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetProviderResponse | PlainMessage<GetProviderResponse> | undefined, b: GetProviderResponse | PlainMessage<GetProviderResponse> | undefined): boolean {
    return proto3.util.equals(GetProviderResponse, a, b);
  }
}

/**
 * @generated from message llm.v1.UpdateProviderRequest
 */
export class UpdateProviderRequest extends Message<UpdateProviderRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: google.protobuf.Struct config = 2;
   */
  config?: Struct;

  constructor(data?: PartialMessage<UpdateProviderRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.UpdateProviderRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProviderRequest {
    return new UpdateProviderRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProviderRequest {
    return new UpdateProviderRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProviderRequest {
    return new UpdateProviderRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateProviderRequest | PlainMessage<UpdateProviderRequest> | undefined, b: UpdateProviderRequest | PlainMessage<UpdateProviderRequest> | undefined): boolean {
    return proto3.util.equals(UpdateProviderRequest, a, b);
  }
}

/**
 * @generated from message llm.v1.UpdateProviderResponse
 */
export class UpdateProviderResponse extends Message<UpdateProviderResponse> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Struct config = 2;
   */
  config?: Struct;

  constructor(data?: PartialMessage<UpdateProviderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.UpdateProviderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProviderResponse {
    return new UpdateProviderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProviderResponse {
    return new UpdateProviderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProviderResponse {
    return new UpdateProviderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateProviderResponse | PlainMessage<UpdateProviderResponse> | undefined, b: UpdateProviderResponse | PlainMessage<UpdateProviderResponse> | undefined): boolean {
    return proto3.util.equals(UpdateProviderResponse, a, b);
  }
}

/**
 * @generated from message llm.v1.GetProviderConfigRequest
 */
export class GetProviderConfigRequest extends Message<GetProviderConfigRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetProviderConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.GetProviderConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProviderConfigRequest {
    return new GetProviderConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProviderConfigRequest {
    return new GetProviderConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProviderConfigRequest {
    return new GetProviderConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetProviderConfigRequest | PlainMessage<GetProviderConfigRequest> | undefined, b: GetProviderConfigRequest | PlainMessage<GetProviderConfigRequest> | undefined): boolean {
    return proto3.util.equals(GetProviderConfigRequest, a, b);
  }
}

/**
 * @generated from message llm.v1.GetProviderConfigResponse
 */
export class GetProviderConfigResponse extends Message<GetProviderConfigResponse> {
  /**
   * @generated from field: google.protobuf.Struct config = 1;
   */
  config?: Struct;

  constructor(data?: PartialMessage<GetProviderConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "llm.v1.GetProviderConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProviderConfigResponse {
    return new GetProviderConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProviderConfigResponse {
    return new GetProviderConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProviderConfigResponse {
    return new GetProviderConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetProviderConfigResponse | PlainMessage<GetProviderConfigResponse> | undefined, b: GetProviderConfigResponse | PlainMessage<GetProviderConfigResponse> | undefined): boolean {
    return proto3.util.equals(GetProviderConfigResponse, a, b);
  }
}

