import { defaultToolsetManager } from '../common/toolsetManager.js';
import { Toolset } from '../common/toolsets.js';

export const getAllTools = () => defaultToolsetManager.getAllTools();

export const getToolsByToolset = (toolsetName: Toolset) => defaultToolsetManager.getToolsByToolset(toolsetName);

export const getEnabledTools = (enabledToolsets: Toolset[]) => defaultToolsetManager.getEnabledTools(enabledToolsets);

export const getReadOnlyTools = () => defaultToolsetManager.getReadOnlyTools();

export const filterReadOnlyTools = (tools: any[]) => defaultToolsetManager.filterReadOnlyTools(tools);