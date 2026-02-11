import { Tool } from "./toolsets.js";
import { Toolset, ToolsetConfig, ToolsetManager, DEFAULT_ENABLED_TOOLSETS } from "./toolsets.js";

// 导入所有工具集函数
import { getCodeManagementTools } from '../tool-registry/code-management.js';
import { getOrganizationTools } from '../tool-registry/organization.js';
import { getProjectManagementTools } from '../tool-registry/project-management.js';
import { getPipelineTools } from '../tool-registry/pipeline.js';
import { getPackageManagementTools } from '../tool-registry/packages.js';
import { getServiceConnectionTools } from '../tool-registry/service-connections.js';
import { getAppStackTools } from '../tool-registry/appstack.js';
import { getAppStackTagTools } from '../tool-registry/appstack-tags.js';
import { getAppStackTemplateTools } from '../tool-registry/appstack-templates.js';
import { getAppStackGlobalVarTools } from '../tool-registry/appstack-global-vars.js';
import { getAppStackVariableGroupTools } from '../tool-registry/appstack-variable-groups.js';
import { getAppStackOrchestrationTools } from '../tool-registry/appstack-orchestrations.js';
import { getAppStackChangeRequestTools } from '../tool-registry/appstack-change-requests.js';
import { getAppStackDeploymentResourceTools } from '../tool-registry/appstack-deployment-resources.js';
import { getAppStackChangeOrderTools } from '../tool-registry/appstack-change-orders.js';
import { getAppStackAppReleaseWorkflowTools } from '../tool-registry/appstack-app-release-workflows.js';
import { getEffortTools } from '../tool-registry/effort.js';
import { getResourceMemberTools } from '../tool-registry/resourceMember.js';
import { getVMDeployOrderTools } from '../tool-registry/vmDeployOrder.js';
import { getCommitTools } from '../tool-registry/commit.js';
import { getBaseTools } from '../tool-registry/base.js';
import { getTestManagementTools } from '../tool-registry/test-management.js';
import { getTagTools } from '../tool-registry/tag.js';

// 定义所有工具集配置
const ALL_TOOLSET_CONFIGS: Record<Toolset, ToolsetConfig> = {
  [Toolset.BASE]: {
    name: Toolset.BASE,
    description: "Base tools that are always loaded",
    tools: getBaseTools as () => Tool[]
  },
  
  // Specific Feature Toolsets

  // Code Management
  [Toolset.CODE_REPO]: {
    name: Toolset.CODE_REPO,
    description: "Code repository operations",
    tools: (() => {
      const allCodeTools = getCodeManagementTools();
      return allCodeTools.filter(tool => 
        ['get_repository', 'list_repositories'].includes(tool.name)
      );
    }) as () => Tool[]
  },
  [Toolset.CODE_BRANCH]: {
    name: Toolset.CODE_BRANCH,
    description: "Branch management",
    tools: (() => {
      const allCodeTools = getCodeManagementTools();
      return allCodeTools.filter(tool => 
        tool.name.includes('branch')
      );
    }) as () => Tool[]
  },
  [Toolset.CODE_FILE]: {
    name: Toolset.CODE_FILE,
    description: "File operations",
    tools: (() => {
      const allCodeTools = getCodeManagementTools();
      return allCodeTools.filter(tool => 
        ['get_file_blobs', 'create_file', 'update_file', 'delete_file', 'list_files', 'compare'].includes(tool.name)
      );
    }) as () => Tool[]
  },
  [Toolset.CODE_CHANGE_REQUEST]: {
    name: Toolset.CODE_CHANGE_REQUEST,
    description: "Change request and merge request operations",
    tools: (() => {
      const allCodeTools = getCodeManagementTools();
      return allCodeTools.filter(tool => 
        tool.name.includes('change_request')
      );
    }) as () => Tool[]
  },
  [Toolset.CODE_COMMIT]: {
    name: Toolset.CODE_COMMIT,
    description: "Commit history operations",
    tools: getCommitTools as () => Tool[]
  },
  
  // Organization Management
  [Toolset.ORGANIZATION]: {
    name: Toolset.ORGANIZATION,
    description: "Organization management tools",
    tools: (() => {
      const allOrgTools = getOrganizationTools();
      // Filter out base tools
      const filteredOrgTools = allOrgTools.filter(tool => 
        tool.name !== "get_current_organization_info" &&
        tool.name !== "get_user_organizations" &&
        tool.name !== "get_current_user"
      );
      return filteredOrgTools;
    }) as () => Tool[]
  },
  
  // Project Management
  [Toolset.PROJECT]: {
    name: Toolset.PROJECT,
    description: "Project management",
    tools: (() => {
      const allProjectTools = getProjectManagementTools();
      return allProjectTools.filter(tool => 
        tool.name.includes('project') || tool.name.includes('fieldgroup')
      );
    }) as () => Tool[]
  },
  [Toolset.WORKITEM]: {
    name: Toolset.WORKITEM,
    description: "Work item management",
    tools: (() => {
      const allProjectTools = getProjectManagementTools();
      return allProjectTools.filter(tool => 
        tool.name.includes('workitem') && !tool.name.includes('project')
      );
    }) as () => Tool[]
  },
  [Toolset.SPRINT]: {
    name: Toolset.SPRINT,
    description: "Sprint management",
    tools: (() => {
      const allProjectTools = getProjectManagementTools();
      return allProjectTools.filter(tool => 
        tool.name.includes('sprint')
      );
    }) as () => Tool[]
  },
  [Toolset.EFFORT]: {
    name: Toolset.EFFORT,
    description: "Effort and time tracking",
    tools: getEffortTools as () => Tool[]
  },
  
  // Pipeline Management
  [Toolset.PIPELINE]: {
    name: Toolset.PIPELINE,
    description: "Pipeline management",
    tools: getPipelineTools as () => Tool[]
  },
  [Toolset.PIPELINE_JOB]: {
    name: Toolset.PIPELINE_JOB,
    description: "Pipeline job operations",
    tools: (() => {
      const allPipelineTools = getPipelineTools();
      return allPipelineTools.filter(tool => 
        tool.name.includes('job') || tool.name.includes('run')
      );
    }) as () => Tool[]
  },
  [Toolset.SERVICE_CONNECTION]: {
    name: Toolset.SERVICE_CONNECTION,
    description: "Service connection management",
    tools: getServiceConnectionTools as () => Tool[]
  },
  [Toolset.VM_DEPLOY]: {
    name: Toolset.VM_DEPLOY,
    description: "Virtual machine deployment",
    tools: getVMDeployOrderTools as () => Tool[]
  },
  [Toolset.RESOURCE_MEMBER]: {
    name: Toolset.RESOURCE_MEMBER,
    description: "Resource member management",
    tools: getResourceMemberTools as () => Tool[]
  },
  [Toolset.TAG]: {
    name: Toolset.TAG,
    description: "Tag management",
    tools: getTagTools as () => Tool[]
  },
  
  // Package Management
  [Toolset.PACKAGE_REPO]: {
    name: Toolset.PACKAGE_REPO,
    description: "Package repository management",
    tools: (() => {
      const allPackageTools = getPackageManagementTools();
      return allPackageTools.filter(tool => 
        tool.name.includes('repository') || tool.name.includes('repo')
      );
    }) as () => Tool[]
  },
  [Toolset.PACKAGE_ARTIFACT]: {
    name: Toolset.PACKAGE_ARTIFACT,
    description: "Package artifact version management",
    tools: (() => {
      const allPackageTools = getPackageManagementTools();
      return allPackageTools.filter(tool => 
        !tool.name.includes('repository') && !tool.name.includes('repo')
      );
    }) as () => Tool[]
  },
  
  // Application Delivery
  [Toolset.APPSTACK_APP]: {
    name: Toolset.APPSTACK_APP,
    description: "Application management",
    tools: getAppStackTools as () => Tool[]
  },
  [Toolset.APPSTACK_TAG]: {
    name: Toolset.APPSTACK_TAG,
    description: "Application tags",
    tools: getAppStackTagTools as () => Tool[]
  },
  [Toolset.APPSTACK_TEMPLATE]: {
    name: Toolset.APPSTACK_TEMPLATE,
    description: "Application templates",
    tools: getAppStackTemplateTools as () => Tool[]
  },
  [Toolset.APPSTACK_VARIABLE]: {
    name: Toolset.APPSTACK_VARIABLE,
    description: "Variable management (global variables and variable groups)",
    tools: (() => [
      ...getAppStackGlobalVarTools(),
      ...getAppStackVariableGroupTools()
    ]) as () => Tool[]
  },
  [Toolset.APPSTACK_ORCHESTRATION]: {
    name: Toolset.APPSTACK_ORCHESTRATION,
    description: "Application orchestration",
    tools: getAppStackOrchestrationTools as () => Tool[]
  },
  [Toolset.APPSTACK_CHANGE_REQUEST]: {
    name: Toolset.APPSTACK_CHANGE_REQUEST,
    description: "Application change requests",
    tools: getAppStackChangeRequestTools as () => Tool[]
  },
  [Toolset.APPSTACK_DEPLOYMENT]: {
    name: Toolset.APPSTACK_DEPLOYMENT,
    description: "Deployment resources",
    tools: getAppStackDeploymentResourceTools as () => Tool[]
  },
  [Toolset.APPSTACK_CHANGE_ORDER]: {
    name: Toolset.APPSTACK_CHANGE_ORDER,
    description: "Application change orders",
    tools: getAppStackChangeOrderTools as () => Tool[]
  },
  [Toolset.APPSTACK_RELEASE_WORKFLOW]: {
    name: Toolset.APPSTACK_RELEASE_WORKFLOW,
    description: "Release workflows",
    tools: getAppStackAppReleaseWorkflowTools as () => Tool[]
  },
  
  // Test Management
  [Toolset.TESTCASE]: {
    name: Toolset.TESTCASE,
    description: "Test case management",
    tools: (() => {
      const allTestTools = getTestManagementTools();
      return allTestTools.filter(tool => 
        tool.name.includes('testcase')
      );
    }) as () => Tool[]
  },
  [Toolset.TESTPLAN]: {
    name: Toolset.TESTPLAN,
    description: "Test plan management",
    tools: (() => {
      const allTestTools = getTestManagementTools();
      return allTestTools.filter(tool => 
        tool.name.includes('test_plan')
      );
    }) as () => Tool[]
  },
  [Toolset.TESTRESULT]: {
    name: Toolset.TESTRESULT,
    description: "Test result management",
    tools: (() => {
      const allTestTools = getTestManagementTools();
      return allTestTools.filter(tool => 
        tool.name.includes('test_result')
      );
    }) as () => Tool[]
  },
  
  // Complete module toolsets for backward compatibility
  [Toolset.CODE_MANAGEMENT]: {
    name: Toolset.CODE_MANAGEMENT,
    description: "Code repository management tools (legacy, use specific feature toolsets instead)",
    tools: (() => [
      ...getCodeManagementTools(),
      ...getCommitTools()
    ]) as () => Tool[]
  },
  [Toolset.ORGANIZATION_MANAGEMENT]: {
    name: Toolset.ORGANIZATION_MANAGEMENT,
    description: "Organization management tools (legacy)",
    tools: (() => {
      const allOrgTools = getOrganizationTools();
      const filteredOrgTools = allOrgTools.filter(tool => 
        tool.name !== "get_current_organization_info" &&
        tool.name !== "get_user_organizations" &&
        tool.name !== "get_current_user"
      );
      return filteredOrgTools;
    }) as () => Tool[]
  },
  [Toolset.PROJECT_MANAGEMENT]: {
    name: Toolset.PROJECT_MANAGEMENT,
    description: "Project management tools (legacy, use specific feature toolsets instead)",
    tools: (() => [
      ...getProjectManagementTools(),
      ...getEffortTools()
    ]) as () => Tool[]
  },
  [Toolset.PIPELINE_MANAGEMENT]: {
    name: Toolset.PIPELINE_MANAGEMENT,
    description: "Pipeline management tools (legacy, use specific feature toolsets instead)",
    tools: (() => [
      ...getPipelineTools(),
      ...getServiceConnectionTools(),
      ...getResourceMemberTools(),
      ...getVMDeployOrderTools(),
      ...getTagTools() // TODO: Tag tools not available in private deployment
    ]) as () => Tool[]
  },
  [Toolset.PACKAGES_MANAGEMENT]: {
    name: Toolset.PACKAGES_MANAGEMENT,
    description: "Package repository management tools (legacy, use specific feature toolsets instead)",
    tools: getPackageManagementTools as () => Tool[]
  },
  [Toolset.APPLICATION_DELIVERY]: {
    name: Toolset.APPLICATION_DELIVERY,
    description: "Application delivery tools (legacy, use specific feature toolsets instead)",
    tools: (() => [
      ...getAppStackTools(),
      ...getAppStackTagTools(),
      ...getAppStackTemplateTools(),
      ...getAppStackGlobalVarTools(),
      ...getAppStackVariableGroupTools(),
      ...getAppStackOrchestrationTools(),
      ...getAppStackChangeRequestTools(),
      ...getAppStackDeploymentResourceTools(),
      ...getAppStackChangeOrderTools(),
      ...getAppStackAppReleaseWorkflowTools()
    ]) as () => Tool[]
  },
  [Toolset.TEST_MANAGEMENT]: {
    name: Toolset.TEST_MANAGEMENT,
    description: "Test management tools (legacy, use specific feature toolsets instead)",
    tools: getTestManagementTools as () => Tool[]
  }
};

// 工具集管理器实现
export class DefaultToolsetManager implements ToolsetManager {
  getAllTools(): Tool[] {
    return Object.values(ALL_TOOLSET_CONFIGS).flatMap(config => config.tools()) as Tool[];
  }

  getToolsByToolset(toolsetName: Toolset): Tool[] {
    const config = ALL_TOOLSET_CONFIGS[toolsetName];
    if (!config) {
      throw new Error(`Unknown toolset: ${toolsetName}`);
    }
    return config.tools() as Tool[];
  }

  getEnabledTools(enabledToolsets: Toolset[]): Tool[] {
    // If no toolsets specified, use default configuration
    const toolsets = enabledToolsets.length > 0 ? enabledToolsets : DEFAULT_ENABLED_TOOLSETS;
    
    return toolsets.flatMap(toolsetName => {
      const config = ALL_TOOLSET_CONFIGS[toolsetName];
      if (!config) {
        console.warn(`Unknown toolset: ${toolsetName}, skipping...`);
        return [];
      }
      return config.tools() as Tool[];
    });
  }

  getReadOnlyTools(): Tool[] {
    const allTools = this.getAllTools();
    return this.filterReadOnlyTools(allTools);
  }

  filterReadOnlyTools(tools: Tool[]): Tool[] {
    return tools.filter(tool => {
      // Check if tool has readOnlyHint annotation
      if (tool.annotations?.readOnlyHint === true) {
        return true;
      }
      
      // Infer read-only based on tool name patterns
      const readOnlyPatterns = [
        /^get_/,
        /^list_/,
        /^search_/,
        /^query_/,
        /^find_/,
        /^fetch_/,
        /^check_/,
        /^view_/
      ];
      
      return readOnlyPatterns.some(pattern => pattern.test(tool.name));
    });
  }
}

// 创建默认工具集管理器实例
export const defaultToolsetManager = new DefaultToolsetManager();