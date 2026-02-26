import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getVMDeployOrderTools = () => [
  {
    name: "stop_vm_deploy_order",
    description: "[虚拟机部署] 终止机器部署",
    inputSchema: zodToJsonSchema(types.StopVMDeployOrderSchema),
  },
  {
    name: "skip_vm_deploy_machine",
    description: "[虚拟机部署] 跳过机器部署",
    inputSchema: zodToJsonSchema(types.SkipVMDeployMachineSchema),
  },
  {
    name: "retry_vm_deploy_machine",
    description: "[虚拟机部署] 重试机器部署",
    inputSchema: zodToJsonSchema(types.RetryVMDeployMachineSchema),
  },
  {
    name: "resume_vm_deploy_order",
    description: "[虚拟机部署] 继续机器部署",
    inputSchema: zodToJsonSchema(types.ResumeVMDeployOrderSchema),
  },
  {
    name: "get_vm_deploy_order",
    description: "[虚拟机部署] 获取虚拟机部署单详情",
    inputSchema: zodToJsonSchema(types.GetVMDeployOrderSchema),
  },
  {
    name: "get_vm_deploy_machine_log",
    description: "[虚拟机部署] 获取虚拟机部署机器日志",
    inputSchema: zodToJsonSchema(types.GetVMDeployMachineLogSchema),
  },
];