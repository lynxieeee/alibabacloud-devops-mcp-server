import { zodToJsonSchema } from 'zod-to-json-schema';
import { 
  GetMachineDeployLogRequestSchema,
  AddHostListToHostGroupRequestSchema,
  AddHostListToDeployGroupRequestSchema,
  GetDeployGroupRequestSchema,
  ListResourceInstancesRequestSchema,
  GetResourceInstanceRequestSchema,
  UpdateResourceInstanceRequestSchema
} from '../operations/appstack/deploymentResources.js';

// Export all appstack deployment resources tools
export const getAppStackDeploymentResourceTools = () => [
  {
    name: 'get_machine_deploy_log',
    description: '[部署资源] 获取机器部署日志',
    inputSchema: zodToJsonSchema(GetMachineDeployLogRequestSchema),
  },
  {
    name: 'add_host_list_to_host_group',
    description: '[部署资源] 添加主机列表到主机组',
    inputSchema: zodToJsonSchema(AddHostListToHostGroupRequestSchema),
  },
  {
    name: 'add_host_list_to_deploy_group',
    description: '[部署资源] 添加主机列表到部署组',
    inputSchema: zodToJsonSchema(AddHostListToDeployGroupRequestSchema),
  },
];