import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getServiceConnectionTools = () => [
  // Service Connection Operations
  {
    name: "list_service_connections",
    description: "[服务连接] 列出组织中的服务连接并支持过滤选项",
    inputSchema: zodToJsonSchema(types.ListServiceConnectionsSchema),
  },
];