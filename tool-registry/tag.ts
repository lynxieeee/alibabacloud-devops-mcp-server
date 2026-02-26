// TODO: Tag management tools are not available in private deployment Yunxiao
// These tools may need to be disabled or made conditional based on deployment type
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getTagTools = () => [
  {
    name: "create_tag",
    description: "[标签管理] 创建标签",
    inputSchema: zodToJsonSchema(types.CreateTagSchema),
  },
  {
    name: "create_tag_group",
    description: "[标签管理] 创建标签分组",
    inputSchema: zodToJsonSchema(types.CreateTagGroupSchema),
  },
  {
    name: "list_tag_groups",
    description: "[标签管理] 获取标签分组列表",
    inputSchema: zodToJsonSchema(types.BaseTagSchema),
  },
  {
    name: "delete_tag_group",
    description: "[标签管理] 删除标签分组",
    inputSchema: zodToJsonSchema(types.DeleteTagGroupSchema),
  },
  {
    name: "update_tag_group",
    description: "[标签管理] 更新标签分组",
    inputSchema: zodToJsonSchema(types.UpdateTagGroupSchema),
  },
  {
    name: "get_tag_group",
    description: "[标签管理] 获取标签分组",
    inputSchema: zodToJsonSchema(types.GetTagGroupSchema),
  },
  {
    name: "delete_tag",
    description: "[标签管理] 删除标签",
    inputSchema: zodToJsonSchema(types.DeleteTagSchema),
  },
  {
    name: "update_tag",
    description: "[标签管理] 更新标签",
    inputSchema: zodToJsonSchema(types.UpdateTagSchema),
  },
];