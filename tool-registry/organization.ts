import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getOrganizationTools = () => [
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
    description: "[组织管理] 根据令牌获取当前用户信息",
    inputSchema: zodToJsonSchema(z.object({})),
  },
  {
    name: "list_organization_departments",
    description: "[组织管理] 获取组织中的部门列表",
    inputSchema: zodToJsonSchema(types.GetOrganizationDepartmentsSchema),
  },
  {
    name: "get_organization_department_info",
    description: "[组织管理] 获取组织中某个部门的信息",
    inputSchema: zodToJsonSchema(types.GetOrganizationDepartmentInfoSchema),
  },
  {
    name: "get_organization_department_ancestors",
    description: "[组织管理] 获取组织中部门的上级部门",
    inputSchema: zodToJsonSchema(types.GetOrganizationDepartmentAncestorsSchema),
  },
  {
    name: "list_organization_members",
    description: "[组织管理] 获取组织成员列表",
    inputSchema: zodToJsonSchema(types.GetOrganizationMembersSchema),
  },
  {
    name: "get_organization_member_info",
    description: "[组织管理] 获取组织成员信息",
    inputSchema: zodToJsonSchema(types.GetOrganizationMemberInfoSchema),
  },
  {
    name: "get_organization_member_info_by_user_id",
    description: "[组织管理] 通过用户ID获取组织成员信息",
    inputSchema: zodToJsonSchema(types.GetOrganizationMemberByUserIdInfoSchema),
  },
  {
    name: "search_organization_members",
    description: "[组织管理] 搜索组织成员",
    inputSchema: zodToJsonSchema(types.SearchOrganizationMembersSchema),
  },
  {
    name: "list_organization_roles",
    description: "[组织管理] 列出组织角色",
    inputSchema: zodToJsonSchema(types.ListOrganizationRolesSchema),
  },
  {
    name: "get_organization_role",
    description: "[组织管理] 获取组织角色信息",
    inputSchema: zodToJsonSchema(types.GetOrganizationRoleSchema),
  },
  {
    name: "list_users",
    description: "[组织管理] 查询用户列表",
    inputSchema: zodToJsonSchema(types.ListUsersSchema),
  },
];