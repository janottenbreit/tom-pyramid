import { de } from "./de";
import { en } from "./en";

export const translations = { de, en } as const;

export type Language = keyof typeof translations;

export const SUPPORTED_LANGUAGES: readonly Language[] = ["de", "en"] as const;

export const DEFAULT_LANGUAGE: Language = "de";

export type { Translation, LayerText, DepartmentText } from "./types";
