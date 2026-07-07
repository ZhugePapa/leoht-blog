export interface Domain {
  slug: string;
  name: string;
  enName: string;
  question: string;
  description: string;
  color: string;
  soft: string;
  image?: string;
}

export const DOMAINS: Domain[] = [
  {
    slug: "behavior",
    name: "人与行为",
    enName: "Behavior",
    question: "用户为什么这样做",
    description: "行为经济学、决策理论、认知与情绪如何驱动人的行为。",
    color: "var(--color-charcoal)",
    soft: "rgb(26 26 26 / 8%)",
    image: "人与行为.jpg",
  },
  {
    slug: "ux",
    name: "体验设计",
    enName: "UX",
    question: "产品应该如何设计",
    description: "交互、信息架构、可用性、可访问性与内容设计。",
    color: "var(--color-ink-blue)",
    soft: "var(--ink-blue-soft)",
    image: "体验设计.jpg",
  },
  {
    slug: "growth",
    name: "产品增长",
    enName: "Growth",
    question: "设计如何影响业务",
    description: "激活、留存、转化与习惯养成,设计如何撬动增长。",
    color: "var(--color-vintage-red)",
    soft: "var(--vintage-red-soft)",
    image: "产品增长.jpg",
  },
  {
    slug: "design-system",
    name: "设计系统",
    enName: "Design System",
    question: "设计如何落地",
    description: "设计系统、组件规范、视觉层级与形式如何承载意义。",
    color: "var(--color-ink-blue)",
    soft: "var(--ink-blue-soft)",
    image: "设计系统.jpg",
  },
  {
    slug: "thinking",
    name: "方法论与思维",
    enName: "Thinking",
    question: "设计师如何思考",
    description: "设计思维、系统思考、第一性原理与结构化方法。",
    color: "var(--color-muted-gold)",
    soft: "rgb(176 141 87 / 12%)",
  },
  {
    slug: "ai-product",
    name: "AI 产品设计",
    enName: "AI Product",
    question: "AI 如何改变交互",
    description: "AI 交互模式、Agent 设计、LLM 能力边界与信任设计。",
    color: "var(--color-charcoal)",
    soft: "rgb(26 26 26 / 8%)",
  },
  {
    slug: "org",
    name: "组织与协作",
    enName: "Org",
    question: "设计如何被组织采纳",
    description: "设计评审、跨职能协作、设计师成长与设计提案。",
    color: "var(--color-muted-gold)",
    soft: "rgb(176 141 87 / 12%)",
  },
];

export function getDomain(slug?: string): Domain | undefined {
  if (!slug) return undefined;
  return DOMAINS.find((d) => d.slug === slug);
}