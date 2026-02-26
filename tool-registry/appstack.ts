import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  ListApplicationsRequestSchema,
  GetApplicationRequestSchema,
  CreateApplicationRequestSchema,
  UpdateApplicationRequestSchema
} from '../operations/appstack/applications.js';

// Export all appstack tools
export const getAppStackTools = () => [
  {
    name: 'list_applications',
    description: '[应用管理] 分页获取组织中的应用列表',
    inputSchema: zodToJsonSchema(ListApplicationsRequestSchema),
  },
  {
    name: 'get_application',
    description: '[应用管理] 根据应用名获取应用详情',
    inputSchema: zodToJsonSchema(GetApplicationRequestSchema),
  },
  {
    name: 'create_application',
    description: '[应用管理] 创建应用',
    inputSchema: zodToJsonSchema(CreateApplicationRequestSchema),
  },
  {
    name: 'update_application',
    description: '[应用管理] 更新应用',
    inputSchema: zodToJsonSchema(UpdateApplicationRequestSchema),
  }
];