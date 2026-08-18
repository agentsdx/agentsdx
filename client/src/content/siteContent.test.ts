import { describe, expect, it } from "vitest";
import { articles, faqGroups, getArticle } from "./siteContent";

describe("Agents DX marketing content", () => {
  it("provides a stable unique resource route for each article", () => {
    const slugs = articles.map(article => article.slug);

    expect(slugs).toHaveLength(3);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(getArticle("build-a-stronger-first-response")?.title).toContain("first response");
  });

  it("returns no article for an unknown detail route", () => {
    expect(getArticle("unknown-resource")).toBeUndefined();
  });

  it("keeps FAQ content grouped for category-led accordion rendering", () => {
    expect(faqGroups.map(group => group.title)).toEqual(["Platform", "Getting started", "Security & trust"]);
    expect(faqGroups.every(group => group.questions.length > 0)).toBe(true);
    expect(faqGroups.flatMap(group => group.questions).every(item => item.question.length > 0 && item.answer.length > 0)).toBe(true);
  });

  it("does not manufacture testimonial or review content in the marketing data model", () => {
    const content = JSON.stringify({ articles, faqGroups }).toLowerCase();

    expect(content).not.toContain("testimonial");
    expect(content).not.toContain("five-star");
  });
});
