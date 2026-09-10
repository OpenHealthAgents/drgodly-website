"use client";

import React, { useEffect } from "react";
import { analytics } from "@/lib/analytics";

interface ArticleTrackerProps {
  slug: string;
  category: string;
}

export const ArticleTracker: React.FC<ArticleTrackerProps> = ({ slug, category }) => {
  useEffect(() => {
    analytics.trackResourceOpened(slug, category);
  }, [slug, category]);

  return null;
};
