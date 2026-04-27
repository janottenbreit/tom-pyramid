import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Compass, Target, Shield, Users, Workflow, Database, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { LayerText, DepartmentText, Translation } from "@/i18n";

/* ── helpers ────────────────────────────────────── */

const BulletItem = ({ text, color = "#5D7186" }: { text: string; color?: string }) => (
  <div className="flex gap-2.5 items-start mb-2">
    <div
      className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]"
      style={{ backgroundColor: color }}
    />
    <span className="text-[13px] leading-[1.6]" style={{ color: "#B8C4D0" }}>
      {text}
    </span>
  </div>
);

const KPIBadge = ({ label }: { label: string }) => (
  <span
    className="inline-block px-2.5 py-[3px] rounded mr-1.5 mb-1.5 font-mono-brand"
    style={{
      fontSize: 10,
      letterSpacing: "0.02em",
      background: "#1E2A3680",
      border: "1px solid #2C3E50",
      color: "#64B5C6",
    }}
  >
    {label}
  </span>
);

/* ── types ──────────────────────────────────────── */

interface LayerStructure {
  id: number;
  color: string;
  Icon: LucideIcon;
}

type Layer = LayerStructure & LayerText;

/* ── structural data (language-agnostic) ───────── */

const layerStructure: LayerStructure[] = [
  { id: 0, color: "#64B5C6", Icon: Compass },
  { id: 1, color: "#4A9CAD", Icon: Target },
  { id: 2, color: "#4CAF7A", Icon: Shield },
  { id: 3, color: "#E5A84B", Icon: Users },
  { id: 4, color: "#5D7186", Icon: Workflow },
  { id: 5, color: "#3D4F5F", Icon: Database },
];

/* ── Pyramid Layer ──────────────────────────────── */

const PyramidLayer = ({
  layer,
  index,
  total,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  layer: Layer;
  index: number;
  total: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) => {
  const progress = index / (total - 1);
  const widthPercent = 25 + 75 * progress;
  const isTop = index === 0;
  const IconComponent = layer.Icon;

  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="animate-tom-reveal relative cursor-pointer transition-all duration-200 ease-out flex items-center justify-center gap-3"
      style={{
        width: `${widthPercent}%`,
        height: 82,
        animationDelay: `${index * 0.07}s`,
        borderRadius:
          index === 0
            ? "10px 10px 4px 4px"
            : index === total - 1
            ? "4px 4px 10px 10px"
            : "4px",
        background: isTop
          ? `linear-gradient(135deg, ${layer.color}, #4A9CAD)`
          : `rgba(20, 30, 42, 0.55)`,
        backdropFilter: isTop ? undefined : "blur(12px)",
        WebkitBackdropFilter: isTop ? undefined : "blur(12px)",
        border: isHovered
          ? `1px solid ${layer.color}90`
          : isTop
          ? `1px solid ${layer.color}40`
          : "1px solid rgba(255,255,255,0.08)",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered
          ? `0 8px 32px ${layer.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`
          : "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-[20%] bottom-[20%] w-0.5 rounded-full transition-colors duration-200"
        style={{
          backgroundColor: isHovered ? layer.color : "transparent",
        }}
      />

      <IconComponent
        size={22}
        className="flex-shrink-0"
        style={{ color: isTop ? "#0A1017" : `${layer.color}90` }}
      />

      <div className="text-center min-w-0">
        <div
          className={`font-display font-semibold tracking-wide leading-tight ${isTop ? 'whitespace-normal text-center' : 'truncate'}`}
          style={{
            fontSize: widthPercent < 45 ? 14 : 16,
            color: isTop ? "#0A1017" : "hsl(195 40% 93%)",
          }}
        >
          {layer.label}
        </div>
        {widthPercent > 30 && (
          <div
            className="font-mono-brand text-[10px] tracking-[0.1em] mt-0.5"
            style={{
              color: isTop ? "#0A101780" : "hsl(210 13% 45% / 0.6)",
            }}
          >
            {layer.question}
          </div>
        )}
        <div
          className="font-mono-brand text-xs tracking-[0.08em] mt-0.5 font-medium"
          style={{
            color: isTop ? "#0A1017CC" : `${layer.color}E6`,
          }}
        >
          {layer.subtitle}
        </div>
      </div>

      {/* Hover subtitle tag */}
      {isHovered && widthPercent > 55 && (
        <div
          className="absolute -right-32 font-mono-brand text-[9px] tracking-wide opacity-80 whitespace-nowrap animate-tom-fade-in hidden lg:block"
          style={{ color: layer.color }}
        >
          → {layer.subtitle}
        </div>
      )}
    </div>
  );
};

/* ── Department Tab Content ─────────────────────── */

const DepartmentTab = ({
  data,
  labelText,
  labelColor,
  kpiHeading,
}: {
  data: DepartmentText;
  labelText: string;
  labelColor: string;
  kpiHeading: string;
}) => (
  <div className="mt-0">
    <p className="text-base leading-relaxed text-muted-foreground mb-4">{data.intro}</p>
    <div
      className="font-mono-brand tracking-[0.15em] mb-2.5"
      style={{ fontSize: 9, color: labelColor }}
    >
      {labelText}
    </div>
    {data.items.map((item, i) => (
      <BulletItem key={i} text={item} color={labelColor} />
    ))}
    <div className="mt-4 pt-3.5" style={{ borderTop: "1px solid #1E2A36" }}>
      <div
        className="font-mono-brand tracking-[0.12em] mb-2.5"
        style={{ fontSize: 9, color: "#5D7186" }}
      >
        {kpiHeading}
      </div>
      <div className="flex flex-wrap">
        {data.kpis.map((kpi, i) => (
          <KPIBadge key={i} label={kpi} />
        ))}
      </div>
    </div>
  </div>
);

/* ── Detail Modal ───────────────────────────────── */

const DetailModal = ({
  layer,
  open,
  onClose,
  t,
}: {
  layer: Layer | null;
  open: boolean;
  onClose: () => void;
  t: Translation;
}) => {
  if (!layer) return null;
  const IconComponent = layer.Icon;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="glass-card sm:max-w-[620px] p-0 gap-0 border-border/60 shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "88vh" }}
      >
        <Tabs defaultValue="overview" className="flex flex-col overflow-hidden">
          {/* Sticky header with tabs */}
          <div
            className="flex-shrink-0 border-b"
            style={{ background: "#151F28", borderColor: "#1E2A36" }}
          >
            <DialogHeader className="p-6 pb-0">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center border"
                  style={{
                    backgroundColor: `${layer.color}15`,
                    borderColor: `${layer.color}30`,
                    color: layer.color,
                  }}
                >
                  <IconComponent size={22} />
                </div>
                <div>
                  <DialogTitle className="font-display text-xl font-medium tracking-wide text-foreground">
                    {layer.label}
                  </DialogTitle>
                  <DialogDescription
                    className="font-mono-brand text-xs tracking-[0.12em] mt-1"
                    style={{ color: layer.color }}
                  >
                    {layer.question} — {layer.subtitle}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <TabsList className="bg-muted/50 border border-border/40 mx-6 mt-4 mb-4">
              <TabsTrigger
                value="overview"
                className="font-mono-brand text-sm tracking-wide data-[state=active]:text-primary"
              >
                {t.tabOverview}
              </TabsTrigger>
              <TabsTrigger
                value="finance"
                className="font-mono-brand text-sm tracking-wide data-[state=active]:text-[#4CAF7A]"
              >
                {t.tabFinance}
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="font-mono-brand text-sm tracking-wide data-[state=active]:text-[#E5A84B]"
              >
                {t.tabMarketing}
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto p-6 pt-4">
            <TabsContent value="overview" className="mt-0">
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                {layer.description}
              </p>
              <div
                className="font-mono-brand tracking-[0.12em] mb-2.5"
                style={{ fontSize: 9, color: "#5D7186" }}
              >
                {t.coreElements}
              </div>
              {layer.details.map((d, i) => (
                <BulletItem key={i} text={d} color={layer.color} />
              ))}
            </TabsContent>

            <TabsContent value="finance" className="mt-0">
              <DepartmentTab
                data={layer.finance}
                labelText={t.financeDetails}
                labelColor="#4CAF7A"
                kpiHeading={t.relevantKpis}
              />
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <DepartmentTab
                data={layer.marketing}
                labelText={t.marketingDetails}
                labelColor="#E5A84B"
                kpiHeading={t.relevantKpis}
              />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

/* ── Main Component ─────────────────────────────── */

export default function TOMPyramid() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const layers = useMemo<Layer[]>(
    () => layerStructure.map((s, i) => ({ ...s, ...t.layers[i] })),
    [t]
  );

  const active = activeId === null ? null : layers.find((l) => l.id === activeId) ?? null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-5 py-10 md:py-16">
      {/* Header */}
      <header className="text-center mb-12 max-w-xl">
        <h1 className="font-display text-2xl md:text-[34px] font-semibold text-foreground leading-tight tracking-tight mb-3">
          {t.pageTitle}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
          {t.pageSubtitle}
        </p>
      </header>

      {/* Pyramid Container */}
      <div className="relative w-full max-w-[820px] flex justify-center">
        {/* Left arrow – BOTTOM-UP / EXECUTION */}
        <div className="absolute left-0 top-8 bottom-8 w-14 hidden md:flex flex-col items-center justify-center">
          <span className="font-mono-brand text-[10px] tracking-[0.1em] text-muted-foreground mb-2">
            {t.bottomUp}
          </span>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-muted-foreground/30 relative">
            <div className="absolute -top-1 -left-[4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-border" />
          </div>
          <span
            className="font-mono-brand text-[11px] tracking-[0.15em] text-muted-foreground/80 mt-2"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {t.implementation}
          </span>
        </div>

        {/* Pyramid layers */}
        <div className="flex flex-col items-center gap-1.5 w-full max-w-[660px]">
          {layers.map((layer, i) => (
            <PyramidLayer
              key={layer.id}
              layer={layer}
              index={i}
              total={layers.length}
              isHovered={hovered === layer.id}
              onHover={() => setHovered(layer.id)}
              onLeave={() => setHovered(null)}
              onClick={() => setActiveId(layer.id)}
            />
          ))}
        </div>

        {/* Right arrow – TOP-DOWN / DESIGN */}
        <div className="absolute right-0 top-8 bottom-8 w-14 hidden md:flex flex-col items-center justify-center">
          <span className="font-mono-brand text-[10px] tracking-[0.1em] text-muted-foreground mb-2">
            {t.topDown}
          </span>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-muted-foreground/30 to-border relative">
            <div className="absolute -bottom-1 -left-[4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-border" />
          </div>
          <span
            className="font-mono-brand text-[11px] tracking-[0.15em] text-muted-foreground/80 mt-2"
            style={{ writingMode: "vertical-rl" }}
          >
            {t.design}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 flex gap-7 flex-wrap justify-center px-6 py-5 glass-card rounded-xl">
        <div className="text-center">
          <div className="font-mono-brand text-[8px] tracking-[0.12em] text-muted-foreground/50 mb-1.5">
            {t.legendDesignTitle}
          </div>
          <div className="text-xs text-muted-foreground">
            {t.legendDesignText}
          </div>
        </div>
        <div className="w-px h-8 bg-border hidden sm:block" />
        <div className="text-center">
          <div className="font-mono-brand text-[8px] tracking-[0.12em] text-muted-foreground/50 mb-1.5">
            {t.legendImplementationTitle}
          </div>
          <div className="text-xs text-muted-foreground">
            {t.legendImplementationText}
          </div>
        </div>
      </div>

      <DetailModal layer={active} open={!!active} onClose={() => setActiveId(null)} t={t} />
    </div>
  );
}
