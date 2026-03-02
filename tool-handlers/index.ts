import { handleCodeManagementTools } from './code-management.js';
import { handleOrganizationTools } from './organization.js';
import { handleProjectManagementTools } from './project-management.js';
import { handlePipelineTools } from './pipeline.js';
import { handlePackageManagementTools } from './packages.js';
import { handleServiceConnectionTools } from './service-connections.js';
import { handleAppStackTools } from './appstack.js';
import { handleAppStackTagTools } from './appstack-tags.js';
import { handleAppStackTemplateTools } from './appstack-templates.js';
import { handleAppStackGlobalVarTools } from './appstack-global-vars.js';
import { handleAppStackVariableGroupTools } from './appstack-variable-groups.js';
import { handleAppStackOrchestrationTools } from './appstack-orchestrations.js';
import { handleAppStackChangeRequestTools } from './appstack-change-requests.js';
import { handleAppStackDeploymentResourceTools } from './appstack-deployment-resources.js';
import { handleAppStackChangeOrderTools } from './appstack-change-orders.js';
import { handleAppStackAppReleaseWorkflowTools } from './appstack-app-release-workflows.js';
import { handleAppStackReleaseWorkflowTools } from './appstack-release-workflows.js';
import { handleEffortTools } from './effort.js';
import { handleResourceMemberTools } from './resourceMember.js';
import { handleVMDeployOrderTools } from './vmDeployOrder.js';
import { handleCommitTools } from './commit.js';
import { handleBaseTools } from './base.js';
import { handleTestManagementTools } from './test-management.js';
import { handleTagTools } from './tag.js';
import { Toolset } from '../common/toolsets.js';

// 定义处理函数映射
const HANDLER_MAP: Record<Toolset, (request: any) => Promise<any>> = {
  [Toolset.BASE]: handleBaseTools,
  
  // Code Management - granular toolsets
  [Toolset.CODE_REPO]: handleCodeManagementTools,
  [Toolset.CODE_BRANCH]: handleCodeManagementTools,
  [Toolset.CODE_FILE]: handleCodeManagementTools,
  [Toolset.CODE_CHANGE_REQUEST]: handleCodeManagementTools,
  [Toolset.CODE_COMMIT]: handleCommitTools,
  
  // Organization Management - granular toolsets
  [Toolset.ORGANIZATION]: handleOrganizationTools,
  
  // Project Management - granular toolsets
  [Toolset.PROJECT]: handleProjectManagementTools,
  [Toolset.WORKITEM]: handleProjectManagementTools,
  [Toolset.SPRINT]: handleProjectManagementTools,
  [Toolset.EFFORT]: handleEffortTools,
  
  // Pipeline Management - granular toolsets
  [Toolset.PIPELINE]: handlePipelineTools,
  [Toolset.PIPELINE_JOB]: handlePipelineTools,
  [Toolset.SERVICE_CONNECTION]: handleServiceConnectionTools,
  [Toolset.VM_DEPLOY]: handleVMDeployOrderTools,
  [Toolset.RESOURCE_MEMBER]: handleResourceMemberTools,
  [Toolset.TAG]: handleTagTools,
  
  // Package Management - granular toolsets
  [Toolset.PACKAGE_REPO]: handlePackageManagementTools,
  [Toolset.PACKAGE_ARTIFACT]: handlePackageManagementTools,
  
  // Application Delivery - granular toolsets
  [Toolset.APPSTACK_APP]: handleAppStackTools,
  [Toolset.APPSTACK_TAG]: handleAppStackTagTools,
  [Toolset.APPSTACK_TEMPLATE]: handleAppStackTemplateTools,
  [Toolset.APPSTACK_VARIABLE]: async (request: any) => {
    const result = await handleAppStackGlobalVarTools(request);
    if (result !== null) return result;
    return await handleAppStackVariableGroupTools(request);
  },
  [Toolset.APPSTACK_ORCHESTRATION]: handleAppStackOrchestrationTools,
  [Toolset.APPSTACK_CHANGE_REQUEST]: handleAppStackChangeRequestTools,
  [Toolset.APPSTACK_DEPLOYMENT]: handleAppStackDeploymentResourceTools,
  [Toolset.APPSTACK_CHANGE_ORDER]: handleAppStackChangeOrderTools,
  [Toolset.APPSTACK_RELEASE_WORKFLOW]: async (request: any) => {
    const result = await handleAppStackReleaseWorkflowTools(request);
    if (result !== null) return result;
    return await handleAppStackAppReleaseWorkflowTools(request);
  },
  
  // Test Management - granular toolsets
  [Toolset.TESTCASE]: handleTestManagementTools,
  [Toolset.TESTPLAN]: handleTestManagementTools,
  [Toolset.TESTRESULT]: handleTestManagementTools,
  
  // Legacy aggregated toolsets for backward compatibility
  [Toolset.CODE_MANAGEMENT]: async (request: any) => {
    const result = await handleCodeManagementTools(request);
    if (result !== null) return result;
    return await handleCommitTools(request);
  },
  [Toolset.ORGANIZATION_MANAGEMENT]: handleOrganizationTools,
  [Toolset.PROJECT_MANAGEMENT]: async (request: any) => {
    const result = await handleProjectManagementTools(request);
    if (result !== null) return result;
    return await handleEffortTools(request);
  },
  [Toolset.PIPELINE_MANAGEMENT]: async (request: any) => {
    const handlers = [
      handlePipelineTools,
      handleServiceConnectionTools,
      handleResourceMemberTools,
      handleVMDeployOrderTools,
      handleTagTools,
    ];
    for (const handler of handlers) {
      const result = await handler(request);
      if (result !== null) return result;
    }
    return null;
  },
  [Toolset.PACKAGES_MANAGEMENT]: handlePackageManagementTools,
  [Toolset.APPLICATION_DELIVERY]: async (request: any) => {
    const handlers = [
      handleAppStackTools,
      handleAppStackTagTools,
      handleAppStackTemplateTools,
      handleAppStackGlobalVarTools,
      handleAppStackVariableGroupTools,
      handleAppStackOrchestrationTools,
      handleAppStackChangeRequestTools,
      handleAppStackDeploymentResourceTools,
      handleAppStackChangeOrderTools,
      handleAppStackReleaseWorkflowTools,
      handleAppStackAppReleaseWorkflowTools,
    ];
    for (const handler of handlers) {
      const result = await handler(request);
      if (result !== null) return result;
    }
    return null;
  },
  [Toolset.TEST_MANAGEMENT]: handleTestManagementTools,
}

// 保持向后兼容的接口
export const handleToolRequest = async (request: any) => {
  // Try each handler in sequence until one returns a result
  const handlers = [
    handleBaseTools,
    handleCodeManagementTools,
    handleOrganizationTools,
    handleProjectManagementTools,
    handlePipelineTools,
    handlePackageManagementTools,
    handleServiceConnectionTools,
    handleAppStackTools,
    handleAppStackTagTools,
    handleAppStackTemplateTools,
    handleAppStackGlobalVarTools,
    handleAppStackVariableGroupTools,
    handleAppStackOrchestrationTools,
    handleAppStackChangeRequestTools,
    handleAppStackDeploymentResourceTools,
    handleAppStackChangeOrderTools,
    handleAppStackAppReleaseWorkflowTools,
    handleEffortTools,
    handleResourceMemberTools,
    handleVMDeployOrderTools,
    handleCommitTools,
    handleTestManagementTools
  ];

  for (const handler of handlers) {
    const result = await handler(request);
    if (result !== null) {
      return result;
    }
  }

  // If no handler matched, throw an error
  throw new Error(`Unknown tool: ${request.params.name}`);
};

// 新增按工具集处理工具请求的接口
export const handleToolRequestByToolset = async (request: any, toolsetName: Toolset) => {
  const handler = HANDLER_MAP[toolsetName];
  if (!handler) {
    throw new Error(`Unknown toolset: ${toolsetName}`);
  }
  return await handler(request);
};

// 新增处理启用工具集的接口
export const handleEnabledToolRequest = async (request: any, enabledToolsets: Toolset[]) => {
  // 总是先尝试处理基础工具集
  try {
    const baseResult = await handleToolRequestByToolset(request, Toolset.BASE);
    if (baseResult !== null) {
      return baseResult;
    }
  } catch (error) {
    // 如果工具不在基础工具集中，继续尝试其他工具集
    // 如果是其他错误，重新抛出
    if (!(error instanceof Error && error.message.includes("Unknown tool"))) {
      throw error;
    }
  }
  
  // 如果没有指定启用的工具集，则处理所有工具集（除了基础工具集，因为已经处理过了）
  const toolsets = enabledToolsets.length > 0 ? enabledToolsets : Object.values(Toolset).filter(t => t !== Toolset.BASE);
  
  // 按顺序尝试每个启用的工具集
  for (const toolset of toolsets) {
    // 跳过基础工具集，因为我们已经处理过了
    if (toolset === Toolset.BASE) {
      continue;
    }
    
    try {
      const result = await handleToolRequestByToolset(request, toolset);
      if (result !== null) {
        return result;
      }
    } catch (error) {
      // 如果工具不在当前工具集中，继续尝试下一个工具集
      // 如果是其他错误，重新抛出
      if (!(error instanceof Error && error.message.includes("Unknown tool"))) {
        throw error;
      }
    }
  }

  // 如果没有处理函数匹配，抛出错误
  throw new Error(`Unknown tool: ${request.params.name}`);
};