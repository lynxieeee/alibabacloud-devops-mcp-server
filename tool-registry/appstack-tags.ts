import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  CreateAppTagRequestSchema,
  UpdateAppTagRequestSchema,
  SearchAppTagRequestSchema,
  UpdateAppTagBindRequestSchema
} from '../operations/appstack/appTags.js';

// Export all appstack tag tools
export const getAppStackTagTools = () => [
  {
    name: 'create_app_tag',
    description: '[应用标签] 创建应用标签',
    inputSchema: zodToJsonSchema(CreateAppTagRequestSchema),
  },
  {
    name: 'update_app_tag',
    description: '[应用标签] 更新应用标签',
    inputSchema: zodToJsonSchema(UpdateAppTagRequestSchema),
  },
  {
    name: 'search_app_tags',
    description: '[应用标签] 搜索应用标签',
    inputSchema: zodToJsonSchema(SearchAppTagRequestSchema),
  },
  {
    name: 'update_app_tag_bind',
    description: '[应用标签] 更新应用标签绑定',
    inputSchema: zodToJsonSchema(UpdateAppTagBindRequestSchema),
  }
];