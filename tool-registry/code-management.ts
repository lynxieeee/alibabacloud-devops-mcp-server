import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getCodeManagementTools = () => [
  // Branch Operations
  {
    name: "create_branch",
    description: "[分支管理] 创建分支",
    inputSchema: zodToJsonSchema(types.CreateBranchSchema),
  },
  {
    name: "get_branch",
    description: "[分支管理] 获取分支信息",
    inputSchema: zodToJsonSchema(types.GetBranchSchema),
  },
  {
    name: "delete_branch",
    description: "[分支管理] 删除分支",
    inputSchema: zodToJsonSchema(types.DeleteBranchSchema),
  },
  {
    name: "list_branches",
    description: "[分支管理] 获取分支列表",
    inputSchema: zodToJsonSchema(types.ListBranchesSchema),
  },

  // File Operations
  {
    name: "get_file_blobs",
    description: "[文件操作] 获取文件内容",
    inputSchema: zodToJsonSchema(types.GetFileBlobsSchema),
  },
  {
    name: "create_file",
    description: "[文件操作] 创建文件",
    inputSchema: zodToJsonSchema(types.CreateFileSchema),
  },
  {
    name: "update_file",
    description: "[文件操作] 更新文件内容",
    inputSchema: zodToJsonSchema(types.UpdateFileSchema),
  },
  {
    name: "delete_file",
    description: "[文件操作] 删除文件",
    inputSchema: zodToJsonSchema(types.DeleteFileSchema),
  },
  {
    name: "list_files",
    description: "[文件操作] 查询文件树",
    inputSchema: zodToJsonSchema(types.ListFilesSchema),
  },
  {
    name: "compare",
    description: "[文件操作] 代码比较",
    inputSchema: zodToJsonSchema(types.GetCompareSchema),
  },

  // Repository Operations
  {
    name: "get_repository",
    description: "[代码仓库] 获取仓库详情",
    inputSchema: zodToJsonSchema(types.GetRepositorySchema),
  },
  {
    name: "list_repositories",
    description: "[代码仓库] 获取仓库列表",
    inputSchema: zodToJsonSchema(types.ListRepositoriesSchema),
  },

  // Change Request Operations
  {
    name: "get_change_request",
    description: "[合并请求] 查询合并请求",
    inputSchema: zodToJsonSchema(types.GetChangeRequestSchema),
  },
  {
    name: "list_change_requests",
    description: "[合并请求] 查询合并请求列表",
    inputSchema: zodToJsonSchema(types.ListChangeRequestsSchema),
  },
  {
    name: "create_change_request",
    description: "[合并请求] 创建合并请求",
    inputSchema: zodToJsonSchema(types.CreateChangeRequestSchema),
  },
  {
    name: "create_change_request_comment",
    description: "[合并请求] 创建合并请求评论",
    inputSchema: zodToJsonSchema(types.CreateChangeRequestCommentSchema),
  },
  {
    name: "list_change_request_comments",
    description: "[合并请求] 查询合并请求评论列表",
    inputSchema: zodToJsonSchema(types.ListChangeRequestCommentsSchema),
  },
  {
    name: "update_change_request_comment",
    description: "[合并请求] 更新合并请求评论",
    inputSchema: zodToJsonSchema(types.UpdateChangeRequestCommentSchema),
  },
  {
    name: "list_change_request_patch_sets",
    description: "[合并请求] 查询合并请求版本列表",
    inputSchema: zodToJsonSchema(types.ListChangeRequestPatchSetsSchema),
  },
];