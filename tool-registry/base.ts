import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const getBaseTools = () => [
  {
    name: "get_current_organization_info",
    description: "[组织管理] 获取当前用户所在组织信息",
    inputSchema: zodToJsonSchema(z.object({})),
  },
  {
    name: "get_user_organizations",
    description: "[组织管理] 获取当前用户加入的组织列表",
    inputSchema: zodToJsonSchema(z.object({})),
  },
  {
    name: "get_current_user",
    description: "[组织管理] 根据 token 获取当前用户信息",
    inputSchema: zodToJsonSchema(z.object({})),
  }
];