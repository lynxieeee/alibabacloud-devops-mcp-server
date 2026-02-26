import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  ListCommitsRequestSchema,
  GetCommitRequestSchema,
  CreateCommitCommentRequestSchema
} from '../common/types.js';

// Export all commit tools
export const getCommitTools = () => [
  {
    name: 'list_commits',
    description: '[提交历史] 查询提交记录列表',
    inputSchema: zodToJsonSchema(ListCommitsRequestSchema),
  },
  {
    name: 'get_commit',
    description: '[提交历史] 获取提交记录信息',
    inputSchema: zodToJsonSchema(GetCommitRequestSchema),
  },
  {
    name: 'create_commit_comment',
    description: '[提交历史] 创建提交评论',
    inputSchema: zodToJsonSchema(CreateCommitCommentRequestSchema),
  }
];