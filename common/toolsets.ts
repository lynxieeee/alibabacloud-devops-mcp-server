export enum Toolset {
  BASE = "base",
  
  // Code Management
  CODE_REPO = "code-repo",
  CODE_BRANCH = "code-branch",
  CODE_FILE = "code-file",
  CODE_CHANGE_REQUEST = "code-change-request",
  CODE_COMMIT = "code-commit",
  
  // Organization Management
  ORGANIZATION = "organization",
  
  // Project Management
  PROJECT = "project",
  WORKITEM = "workitem",
  SPRINT = "sprint",
  EFFORT = "effort",
  
  // Pipeline Management
  PIPELINE = "pipeline",
  PIPELINE_JOB = "pipeline-job",
  SERVICE_CONNECTION = "service-connection",
  VM_DEPLOY = "vm-deploy",
  RESOURCE_MEMBER = "resource-member",
  TAG = "tag",
  
  // Package Management
  PACKAGE_REPO = "package-repo",
  PACKAGE_ARTIFACT = "package-artifact",
  
  // Application Delivery
  APPSTACK_APP = "appstack-app",
  APPSTACK_TAG = "appstack-tag",
  APPSTACK_TEMPLATE = "appstack-template",
  APPSTACK_VARIABLE = "appstack-variable",
  APPSTACK_ORCHESTRATION = "appstack-orchestration",
  APPSTACK_CHANGE_REQUEST = "appstack-change-request",
  APPSTACK_DEPLOYMENT = "appstack-deployment",
  APPSTACK_CHANGE_ORDER = "appstack-change-order",
  APPSTACK_RELEASE_WORKFLOW = "appstack-release-workflow",
  
  // Test Management
  TESTCASE = "testcase",
  TESTPLAN = "testplan",
  TESTRESULT = "testresult",
  
  // Legacy toolsets for backward compatibility
  CODE_MANAGEMENT = "code-management",
  ORGANIZATION_MANAGEMENT = "organization-management",
  PROJECT_MANAGEMENT = "project-management",
  PIPELINE_MANAGEMENT = "pipeline-management",
  PACKAGES_MANAGEMENT = "packages-management",
  APPLICATION_DELIVERY = "application-delivery",
  TEST_MANAGEMENT = "test-management"
}

// 定义工具接口（与MCP SDK中的Tool接口兼容，但更宽松以适应zodToJsonSchema的输出）
export interface Tool {
  name: string;
  description: string;
  inputSchema: {
    [key: string]: unknown;
    type: "object";
    properties?: { [key: string]: unknown };
    required?: string[];
  };
  title?: string;
  outputSchema?: {
    [key: string]: unknown;
    type: "object";
    properties?: { [key: string]: unknown };
    required?: string[];
  };
  annotations?: {
    [key: string]: unknown;
    title?: string;
    readOnlyHint?: boolean;
    destructiveHint?: boolean;
    idempotentHint?: boolean;
    openWorldHint?: boolean;
  };
  [key: string]: unknown;
}

// 定义工具集配置接口
export interface ToolsetConfig {
  name: Toolset;
  description: string;
  tools: () => Tool[];
}

// 定义工具集管理器接口
export interface ToolsetManager {
  getAllTools(): Tool[];
  getToolsByToolset(toolsetName: Toolset): Tool[];
  getEnabledTools(enabledToolsets: Toolset[]): Tool[];
  getReadOnlyTools(): Tool[];
  filterReadOnlyTools(tools: Tool[]): Tool[];
}

// 默认启用的工具集
export const DEFAULT_ENABLED_TOOLSETS: Toolset[] = [
  Toolset.BASE,
  Toolset.CODE_MANAGEMENT,
  Toolset.ORGANIZATION_MANAGEMENT,
  Toolset.PROJECT_MANAGEMENT,
  Toolset.PIPELINE_MANAGEMENT,
  Toolset.PACKAGES_MANAGEMENT,
  Toolset.APPLICATION_DELIVERY,
  Toolset.TEST_MANAGEMENT
];