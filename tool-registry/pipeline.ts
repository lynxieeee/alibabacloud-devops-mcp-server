import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getPipelineTools = () => [
  {
    name: "get_pipeline",
    description: "[流水线管理] 获取流水线详情",
    inputSchema: zodToJsonSchema(types.GetPipelineSchema),
  },
  {
    name: "list_pipelines",
    description: "[流水线管理] 获取流水线列表",
    inputSchema: zodToJsonSchema(types.ListPipelinesSchema),
  },
  {
    name: "generate_pipeline_yaml",
    description: "[流水线管理] 生成流水线YAML配置（不创建流水线）\n\n" +
      "**📋 使用场景：**\n" +
      "- 在创建流水线前预览YAML\n" +
      "- 生成YAML用于手动部署\n" +
      "- 调试流水线配置\n\n" +
      "**📖 推荐工作流：**\n" +
      "1. 🎯 解析用户描述中的显式参数\n" +
      "2. 🔍 如果缺少上下文，优先使用IDE检测（终端 + 文件读取）而非API调用\n" +
      "3. 🚀 使用收集到的参数调用此工具\n\n" +
      "**💡 参数收集策略：**\n" +
      "- 快速创建流水线：使用IDE检测（git配置、文件读取）\n" +
      "- 精确参数选择：必要时考虑使用 list_repositories、list_service_connections\n" +
      "- 根据用户意图权衡效率与准确性\n\n" +
      "**⚡ 内置能力：** 内部处理默认服务连接，自动从仓库URL提取项目名称",
    inputSchema: zodToJsonSchema(types.CreatePipelineFromDescriptionSchema),
  },
  {
    name: "create_pipeline_from_description",
    description: "[流水线管理] 根据自然语言描述生成流水线 YAML 并创建流水线\n\n" +
      "**🔧 内置能力：**\n" +
      "- ✅ 未指定时自动获取默认服务连接ID\n" +
      "- ✅ 内部处理仓库和服务连接逻辑\n" +
      "- ✅ 自动从仓库URL提取项目名称（git@host:org/repo.git → repo）\n" +
      "- ✅ 支持IDE检测和显式参数指定\n\n" +
      "**📖 推荐工作流：**\n" +
      "1. 🎯 解析用户描述中的显式参数\n" +
      "2. 🔍 优先从IDE环境检测缺失信息：\n" +
      "   - 运行 `git config --get remote.origin.url` → repoUrl\n" +
      "   - 运行 `git branch --show-current` → branch\n" +
      "   - 从 repoUrl 自动提取 serviceName\n" +
      "   - 检查项目文件判断技术栈：\n" +
      "     * pom.xml → buildLanguage='java', buildTool='maven'\n" +
      "     * build.gradle → buildLanguage='java', buildTool='gradle'\n" +
      "     * package.json + package-lock.json → buildLanguage='nodejs', buildTool='npm'\n" +
      "     * package.json + yarn.lock → buildLanguage='nodejs', buildTool='yarn'\n" +
      "     * requirements.txt → buildLanguage='python', buildTool='pip'\n" +
      "     * go.mod → buildLanguage='go', buildTool='go'\n" +
      "     * *.csproj → buildLanguage='dotnet', buildTool='dotnet'\n" +
      "3. 🚀 使用收集到的参数调用此工具\n\n" +
      "**⚠️ 重要指南：**\n" +
      "- 除非用户明确要求从可用仓库中选择，否则不要调用 list_repositories\n" +
      "- 除非用户明确要求从可用连接中选择，否则不要调用 list_service_connections\n" +
      "- 始终优先尝试IDE检测，然后再进行任何API调用\n" +
      "- 如果IDE检测失败，再考虑使用API调用作为后备方案\n\n" +
      "**🎯 参数优先级：**\n" +
      "1. 👤 用户显式指定（最高）- buildLanguage、buildTool、版本、deployTarget\n" +
      "2. 🔍 IDE检测（首选）- repoUrl、branch、serviceName、技术栈\n" +
      "3. 🤖 工具默认值（自动）- serviceConnectionId、organizationId\n\n" +
      "**🔍 IDE检测规则（必须优先尝试）：**\n" +
      "- 📂 仓库：`git config --get remote.origin.url` → repoUrl\n" +
      "- 🌿 分支：`git branch --show-current` → branch\n" +
      "- 🏷️ 服务名称：从 repoUrl 自动提取（git@host:org/repo.git → repo）\n" +
      "- ☕ Java Maven：存在 pom.xml → buildLanguage='java', buildTool='maven'\n" +
      "- 🏗️ Java Gradle：存在 build.gradle → buildLanguage='java', buildTool='gradle'\n" +
      "- 🟢 Node npm：package.json + package-lock.json → buildLanguage='nodejs', buildTool='npm'\n" +
      "- 🧶 Node yarn：package.json + yarn.lock → buildLanguage='nodejs', buildTool='yarn'\n" +
      "- 🐍 Python：requirements.txt → buildLanguage='python', buildTool='pip'\n" +
      "- 🐹 Go：go.mod → buildLanguage='go', buildTool='go'\n" +
      "- 💙 .NET：*.csproj → buildLanguage='dotnet', buildTool='dotnet'\n\n" +
      "**📝 版本检测（从项目文件）：**\n" +
      "- ☕ JDK：读取 pom.xml <maven.compiler.source> → jdkVersion\n" +
      "- 🟢 Node：读取 package.json engines.node → nodeVersion\n" +
      "- 🐍 Python：读取 .python-version、pyproject.toml → pythonVersion\n" +
      "- 🐹 Go：读取 go.mod go 指令 → goVersion\n\n" +
      "**🎯 部署解析：**\n" +
      "- '部署到主机/VM/虚拟机' → deployTarget='vm'\n" +
      "- '部署到Kubernetes/K8s' → deployTarget='k8s'\n" +
      "- '只构建/构建制品' → deployTarget='none'\n\n" +
      "**🔗 服务连接策略（3种场景）：**\n" +
      "1. **用户显式指定ID**（例如 '使用服务连接ID abc123'）\n" +
      "   → ✅ 直接传递 serviceConnectionId=abc123，无需调用 list_service_connections\n" +
      "2. **用户未指定任何ID**（最常见情况）\n" +
      "   → ✅ 传递 serviceConnectionId=null，工具将内部自动获取默认ID\n" +
      "3. **用户想从可用选项中选择**（例如 '显示可用的服务连接让我选择'）\n" +
      "   → 🔍 先调用 list_service_connections，让用户选择，然后创建流水线\n\n" +
      "**🤔 何时使用其他工具：**\n" +
      "- 用户要求\"从可用仓库中选择\" → 先使用 list_repositories\n" +
      "- 用户想要\"从服务连接中选择\" → 先使用 list_service_connections\n" +
      "- 用户想在决定前查看选项 → 先收集信息，然后创建\n" +
      "- 快速使用当前仓库创建 → 直接使用IDE检测\n\n" +
      "**✅ 必需参数：** organizationId、name、buildLanguage、buildTool",
    inputSchema: zodToJsonSchema(types.CreatePipelineFromDescriptionSchema),
  },
  {
    name: "smart_list_pipelines",
    description: "[流水线管理] 智能查询流水线（支持自然语言时间，例如 '今天'、'这周'）",
    inputSchema: zodToJsonSchema(
      z.object({
        organizationId: z.string().describe("组织ID"),
        timeReference: z.string().optional().describe("自然语言时间引用，如 '今天'、'昨天'、'这周'、'上个月' 等"),
        pipelineName: z.string().optional().describe("流水线名称"),
        statusList: z.string().optional().describe("流水线状态列表，逗号分隔（SUCCESS,RUNNING,FAIL,CANCELED,WAITING）"),
        perPage: z.number().int().min(1).max(30).default(10).optional().describe("每页数量"),
        page: z.number().int().min(1).default(1).optional().describe("页码")
      })
    ),
  },
  {
    name: "create_pipeline_run",
    description: "[流水线管理] 运行流水线",
    inputSchema: zodToJsonSchema(types.CreatePipelineRunSchema),
  },
  {
    name: "get_latest_pipeline_run",
    description: "[流水线管理] 获取最新运行信息",
    inputSchema: zodToJsonSchema(types.GetLatestPipelineRunSchema),
  },
  {
    name: "get_pipeline_run",
    description: "[流水线管理] 获取特定流水线运行实例的详细信息",
    inputSchema: zodToJsonSchema(types.GetPipelineRunSchema),
  },
  {
    name: "list_pipeline_runs",
    description: "[流水线管理] 获取流水线运行实例列表",
    inputSchema: zodToJsonSchema(types.ListPipelineRunsSchema),
  },
  {
    name: "list_pipeline_jobs_by_category",
    description: "[流水线任务] 根据类别获取流水线执行任务。目前仅支持 DEPLOY 类别。",
    inputSchema: zodToJsonSchema(types.ListPipelineJobsByCategorySchema),
  },
  {
    name: "list_pipeline_job_historys",
    description: "[流水线任务] 获取流水线任务执行历史。检索特定任务在流水线中的所有执行记录。",
    inputSchema: zodToJsonSchema(types.ListPipelineJobHistorysSchema),
  },
  {
    name: "execute_pipeline_job_run",
    description: "[流水线任务] 手动运行流水线任务。启动流水线运行实例中的特定任务。",
    inputSchema: zodToJsonSchema(types.ExecutePipelineJobRunSchema),
  },
  {
    name: "get_pipeline_job_run_log",
    description: "[流水线任务] 获取流水线任务执行日志。检索特定任务在流水线运行中的执行日志。",
    inputSchema: zodToJsonSchema(types.GetPipelineJobRunLogSchema),
  },
  {
    name: "update_pipeline",
    description: "[流水线管理] 根据 pipelineId 更新流水线。使用此工具更新流水线 YAML、阶段、任务等。",
    inputSchema: zodToJsonSchema(types.UpdatePipelineSchema),
  },
];