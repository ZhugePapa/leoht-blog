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
    slug: "product",
    name: "产品系统",
    enName: "Product",
    question: "设计如何落地",
    description: "产品架构、数据分析、A/B 测试与 API 设计理解。",
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
    slug: "leadership",
    name: "设计管理",
    enName: "Leadership",
    question: "设计如何被组织采纳",
    description: "设计评审、跨职能协作、设计师成长与设计提案。",
    color: "var(--color-muted-gold)",
    soft: "rgb(176 141 87 / 12%)",
  },
  {
    slug: "visual",
    name: "视觉设计",
    enName: "Visual",
    question: "形式如何承载意义",
    description: "排版、色彩、层级、品牌系统与视觉表达。",
    color: "var(--color-vintage-red)",
    soft: "var(--vintage-red-soft)",
  },
  {
    slug: "case-study",
    name: "案例研究",
    enName: "Case Study",
    question: "别人是怎么做的",
    description: "产品拆解、行业趋势、设计复盘与失败案例。",
    color: "var(--color-charcoal)",
    soft: "rgb(26 26 26 / 8%)",
  },
];

export function getDomain(slug?: string): Domain | undefined {
  if (!slug) return undefined;
  return DOMAINS.find((d) => d.slug === slug);
}
