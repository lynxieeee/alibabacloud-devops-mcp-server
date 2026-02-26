import { zodToJsonSchema } from 'zod-to-json-schema';
import {
  ListCurrentUserEffortRecordsSchema,
  ListEffortRecordsSchema,
  CreateEffortRecordSchema,
  ListEstimatedEffortsSchema,
  CreateEstimatedEffortSchema,
  UpdateEffortRecordSchema,
  UpdateEstimatedEffortSchema
} from "../common/types.js";

export const getEffortTools = () => [
  {
    name: "list_current_user_effort_records",
    description: "[工时管理] 获取用户的实际工时明细，结束时间和开始时间的间隔不能大于6个月",
    inputSchema: zodToJsonSchema(ListCurrentUserEffortRecordsSchema),
  },
  {
    name: "list_effort_records",
    description: "[工时管理] 获取实际工时明细",
    inputSchema: zodToJsonSchema(ListEffortRecordsSchema),
  },
  {
    name: "create_effort_record",
    description: "[工时管理] 登记实际工时",
    inputSchema: zodToJsonSchema(CreateEffortRecordSchema),
  },
  {
    name: "list_estimated_efforts",
    description: "[工时管理] 获取预计工时明细",
    inputSchema: zodToJsonSchema(ListEstimatedEffortsSchema),
  },
  {
    name: "create_estimated_effort",
    description: "[工时管理] 登记预计工时",
    inputSchema: zodToJsonSchema(CreateEstimatedEffortSchema),
  },
  {
    name: "update_effort_record",
    description: "[工时管理] 更新登记实际工时",
    inputSchema: zodToJsonSchema(UpdateEffortRecordSchema),
  },
  {
    name: "update_estimated_effort",
    description: "[工时管理] 更新登记预计工时",
    inputSchema: zodToJsonSchema(UpdateEstimatedEffortSchema),
  }
];