import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getProjectManagementTools = () => [
  // Project Operations
  {
    name: "get_project",
    description: "[项目管理] 获取云效项目信息",
    inputSchema: zodToJsonSchema(types.GetProjectSchema),
  },
  {
    name: "search_projects",
    description: "[项目管理] 搜索云效项目列表。项目是包含工作项和迭代的项目管理单元，与代码仓库（Repository）不同。\n\n使用场景：\n\n查询我参与的项目\n查询我创建的项目",
    inputSchema: zodToJsonSchema(types.SearchProjectsSchema),
  },

  // Sprint Operations
  {
    name: "get_sprint",
    description: "[迭代管理] 获取迭代信息",
    inputSchema: zodToJsonSchema(types.GetSprintSchema),
  },
  {
    name: "list_sprints",
    description: "[迭代管理] 列出项目中的迭代",
    inputSchema: zodToJsonSchema(types.ListSprintsSchema),
  },
  {
    name: "create_sprint",
    description: "[迭代管理] 创建新迭代",
    inputSchema: zodToJsonSchema(types.CreateSprintSchema),
  },
  {
    name: "update_sprint",
    description: "[迭代管理] 更新现有迭代",
    inputSchema: zodToJsonSchema(types.UpdateSprintSchema),
  },

  // Work Item Operations
  {
    name: "get_work_item",
    description: "[工作项管理] 获取工作项信息",
    inputSchema: zodToJsonSchema(types.GetWorkItemSchema),
  },
  {
    name: "create_work_item",
    description: "[工作项管理] 创建工作项",
    inputSchema: zodToJsonSchema(types.CreateWorkItemSchema),
  },
  {
    name: "search_workitems",
    description: "[工作项管理] 使用各种过滤条件搜索工作项",
    inputSchema: zodToJsonSchema(types.SearchWorkitemsSchema),
  },
  {
    name: "get_work_item_types",
    description: "[工作项管理] 获取项目的工作项类型列表",
    inputSchema: zodToJsonSchema(z.object({
      organizationId: z.string().describe("Organization ID"),
      id: z.string().describe("Project unique identifier"),
      category: z.string().describe("Work item type category, optional values: Req, Bug, Task, etc.")
    })),
  },
  {
    name: "update_work_item",
    description: "[工作项管理] 更新工作项",
    inputSchema: zodToJsonSchema(types.UpdateWorkItemSchema),
  },

  // Work Item Type Operations
  {
    name: "list_all_work_item_types",
    description: "[工作项管理] 列出组织中的所有工作项类型",
    inputSchema: zodToJsonSchema(types.ListAllWorkItemTypesSchema),
  },
  {
    name: "list_work_item_types",
    description: "[工作项管理] 列出项目空间中的工作项类型",
    inputSchema: zodToJsonSchema(types.ListWorkItemTypesSchema),
  },
  {
    name: "get_work_item_type",
    description: "[工作项管理] 获取特定工作项类型的详细信息",
    inputSchema: zodToJsonSchema(types.GetWorkItemTypeSchema),
  },
  {
    name: "list_work_item_relation_work_item_types",
    description: "[工作项管理] 列出可以关联到特定工作项的工作项类型",
    inputSchema: zodToJsonSchema(types.ListWorkItemRelationWorkItemTypesSchema),
  },
  {
    name: "get_work_item_type_field_config",
    description: "[工作项管理] 获取特定工作项类型的字段配置",
    inputSchema: zodToJsonSchema(types.GetWorkItemTypeFieldConfigSchema),
  },
  {
    name: "get_work_item_workflow",
    description: "[工作项管理] 获取特定工作项类型的工作流信息",
    inputSchema: zodToJsonSchema(types.GetWorkItemWorkflowSchema),
  },
  {
    name: "list_work_item_comments",
    description: "[工作项管理] 列出特定工作项的评论",
    inputSchema: zodToJsonSchema(types.ListWorkItemCommentsSchema),
  },
  {
    name: "create_work_item_comment",
    description: "[工作项管理] 为特定工作项创建评论",
    inputSchema: zodToJsonSchema(types.CreateWorkItemCommentSchema),
  }
];