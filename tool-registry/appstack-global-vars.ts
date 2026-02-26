import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  CreateGlobalVarRequestSchema,
  GetGlobalVarRequestSchema,
  UpdateGlobalVarRequestSchema,
  ListGlobalVarsRequestSchema
} from '../operations/appstack/globalVars.js';

// Export all appstack global variables tools
export const getAppStackGlobalVarTools = () => [
  {
    name: 'create_global_var',
    description: '[变量管理] 创建全局变量组',
    inputSchema: zodToJsonSchema(CreateGlobalVarRequestSchema),
  },
  {
    name: 'get_global_var',
    description: '[变量管理] 获取全局变量组',
    inputSchema: zodToJsonSchema(GetGlobalVarRequestSchema),
  },
  {
    name: 'update_global_var',
    description: '[变量管理] 更新全局变量组',
    inputSchema: zodToJsonSchema(UpdateGlobalVarRequestSchema),
  },
  {
    name: 'list_global_vars',
    description: '[变量管理] 列出全局变量组',
    inputSchema: zodToJsonSchema(ListGlobalVarsRequestSchema),
  }
];