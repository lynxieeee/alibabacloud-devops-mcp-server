import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  GetLatestOrchestrationRequestSchema,
  ListAppOrchestrationRequestSchema,
  CreateAppOrchestrationRequestSchema,
  DeleteAppOrchestrationRequestSchema,
  GetAppOrchestrationRequestSchema,
  UpdateAppOrchestrationRequestSchema
} from '../operations/appstack/appOrchestrations.js';

// Export all appstack application orchestrations tools
export const getAppStackOrchestrationTools = () => [
  {
    name: 'get_latest_orchestration',
    description: '[应用编排] 获取环境的最新编排',
    inputSchema: zodToJsonSchema(GetLatestOrchestrationRequestSchema),
  },
  {
    name: 'list_app_orchestration',
    description: '[应用编排] 列出应用编排',
    inputSchema: zodToJsonSchema(ListAppOrchestrationRequestSchema),
  },
  {
    name: 'create_app_orchestration',
    description: '[应用编排] 创建应用编排',
    inputSchema: zodToJsonSchema(CreateAppOrchestrationRequestSchema),
  },
  {
    name: 'delete_app_orchestration',
    description: '[应用编排] 删除应用编排',
    inputSchema: zodToJsonSchema(DeleteAppOrchestrationRequestSchema),
  },
  {
    name: 'get_app_orchestration',
    description: '[应用编排] 获取应用编排',
    inputSchema: zodToJsonSchema(GetAppOrchestrationRequestSchema),
  },
  {
    name: 'update_app_orchestration',
    description: '[应用编排] 更新应用编排',
    inputSchema: zodToJsonSchema(UpdateAppOrchestrationRequestSchema),
  }
];