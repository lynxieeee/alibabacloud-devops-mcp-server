import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getResourceMemberTools = () => [
  {
    name: "delete_resource_member",
    description: "[资源成员] 删除资源成员",
    inputSchema: zodToJsonSchema(types.DeleteResourceMemberSchema),
  },
  {
    name: "list_resource_members",
    description: "[资源成员] 获取资源成员列表",
    inputSchema: zodToJsonSchema(types.ResourceMemberBaseSchema),
  },
  {
    name: "update_resource_member",
    description: "[资源成员] 更新资源成员",
    inputSchema: zodToJsonSchema(types.UpdateResourceMemberSchema),
  },
  {
    name: "create_resource_member",
    description: "[资源成员] 创建资源成员",
    inputSchema: zodToJsonSchema(types.CreateResourceMemberSchema),
  },
  {
    name: "update_resource_owner",
    description: "[资源成员] 转移资源所有者",
    inputSchema: zodToJsonSchema(types.UpdateResourceOwnerSchema),
  },
];