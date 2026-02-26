import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  CreateChangeRequestRequestSchema,
  GetChangeRequestAuditItemsRequestSchema,
  ListChangeRequestExecutionsRequestSchema,
  ListChangeRequestWorkItemsRequestSchema,
  CancelChangeRequestRequestSchema,
  CloseChangeRequestRequestSchema
} from '../operations/appstack/changeRequests.js';

// Export all appstack change requests tools
export const getAppStackChangeRequestTools = () => [
  {
    name: 'create_appstack_change_request',
    description: '[变更请求] 创建变更请求',
    inputSchema: zodToJsonSchema(CreateChangeRequestRequestSchema),
  },
  {
    name: 'get_appstack_change_request_audit_items',
    description: '[变更请求] 获取变更请求的审批项',
    inputSchema: zodToJsonSchema(GetChangeRequestAuditItemsRequestSchema),
  },
  {
    name: 'list_appstack_change_request_executions',
    description: '[变更请求] 列出变更请求的执行记录',
    inputSchema: zodToJsonSchema(ListChangeRequestExecutionsRequestSchema),
  },
  {
    name: 'list_appstack_change_request_work_items',
    description: '[变更请求] 列出变更请求的工作项',
    inputSchema: zodToJsonSchema(ListChangeRequestWorkItemsRequestSchema),
  },
  {
    name: 'cancel_appstack_change_request',
    description: '[变更请求] 取消变更请求',
    inputSchema: zodToJsonSchema(CancelChangeRequestRequestSchema),
  },
  {
    name: 'close_appstack_change_request',
    description: '[变更请求] 关闭变更请求',
    inputSchema: zodToJsonSchema(CloseChangeRequestRequestSchema),
  }
];