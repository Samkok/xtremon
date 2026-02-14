import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "./constants";

export function createPageMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    ...overrides
  };
}
