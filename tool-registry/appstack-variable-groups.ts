import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  GetEnvVariableGroupsRequestSchema,
  CreateVariableGroupRequestSchema,
  DeleteVariableGroupRequestSchema,
  GetVariableGroupRequestSchema,
  UpdateVariableGroupRequestSchema,
  GetAppVariableGroupsRequestSchema,
  GetAppVariableGroupsRevisionRequestSchema
} from '../operations/appstack/variableGroups.js';

// Export all appstack variable groups tools
export const getAppStackVariableGroupTools = () => [
  {
    name: 'get_env_variable_groups',
    description: '[变量管理] 获取环境的变量组',
    inputSchema: zodToJsonSchema(GetEnvVariableGroupsRequestSchema),
  },
  {
    name: 'create_variable_group',
    description: '[变量管理] 创建变量组',
    inputSchema: zodToJsonSchema(CreateVariableGroupRequestSchema),
  },
  {
    name: 'delete_variable_group',
    description: '[变量管理] 删除变量组',
    inputSchema: zodToJsonSchema(DeleteVariableGroupRequestSchema),
  },
  {
    name: 'get_variable_group',
    description: '[变量管理] 获取变量组',
    inputSchema: zodToJsonSchema(GetVariableGroupRequestSchema),
  },
  {
    name: 'update_variable_group',
    description: '[变量管理] 更新变量组',
    inputSchema: zodToJsonSchema(UpdateVariableGroupRequestSchema),
  },
  {
    name: 'get_app_variable_groups',
    description: '[变量管理] 获取应用的变量组',
    inputSchema: zodToJsonSchema(GetAppVariableGroupsRequestSchema),
  },
  {
    name: 'get_app_variable_groups_revision',
    description: '[变量管理] 获取应用变量组的版本',
    inputSchema: zodToJsonSchema(GetAppVariableGroupsRevisionRequestSchema),
  }
];