import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getPackageManagementTools = () => [
  // Package Repository Operations
  {
    name: "list_package_repositories",
    description: "[制品仓库] 查看制品仓库信息",
    inputSchema: zodToJsonSchema(types.ListPackageRepositoriesSchema),
  },
  
  // Package Artifact Operations
  {
    name: "list_artifacts",
    description: "[制品] 查询制品信息",
    inputSchema: zodToJsonSchema(types.ListArtifactsSchema),
  },
  {
    name: "get_artifact",
    description: "[制品] 查看单个制品信息",
    inputSchema: zodToJsonSchema(types.GetArtifactSchema),
  },
];