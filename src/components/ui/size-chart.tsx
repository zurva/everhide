import { Ruler, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type SizeChartType = "biker" | "dressing";

interface SizeRow {
  size: string;
  inches: string;
  cm: string;
}

const BIKER_ROWS: SizeRow[] = [
  { size: "XS", inches: "6.5 – 7", cm: "16.5 – 18" },
  { size: "S", inches: "7 – 7.5", cm: "18 – 19" },
  { size: "M", inches: "7.5 – 8", cm: "19 – 20.5" },
  { size: "L", inches: "8 – 8.5", cm: "20.5 – 22" },
  { size: "XL", inches: "8.5 – 9", cm: "22 – 23" },
  { size: "2XL", inches: "9 – 9.5", cm: "23 – 24" },
  { size: "3XL", inches: "9.5 – 10", cm: "24 – 25.5" },
];

const DRESSING_ROWS: SizeRow[] = [
  { size: "XS", inches: "6.5 – 7", cm: "16.5 – 18" },
  { size: "S", inches: "7 – 7.75", cm: "18 – 19.5" },
  { size: "M", inches: "7.75 – 8.5", cm: "19.5 – 21.5" },
  { size: "L", inches: "8.5 – 9.25", cm: "21.5 – 23.5" },
  { size: "XL", inches: "9.25 – 10", cm: "23.5 – 25.5" },
  { size: "2XL", inches: "10 – 10.75", cm: "25.5 – 27.5" },
];

const CHART_CONFIG: Record<
  SizeChartType,
  {
    title: string;
    intro: string;
    rows: SizeRow[];
    note: string;
  }
> = {
  biker: {
    title: "Motorcycle Gloves Size Chart",
    intro:
      "Measure around your dominant hand at the widest part of the palm (excluding thumb). Keep the measuring tape snug but not tight.",
    rows: BIKER_ROWS,
    note: "Sizing may vary slightly depending on design and padding (±0.5 cm tolerance). For bulk orders or private label customization, contact EverHide Global.",
  },
  dressing: {
    title: "Unisex Dress Gloves Size Chart",
    intro:
      "Measure around your dominant hand at the widest part of the palm (excluding thumb). For slim-fit leather dress gloves, choose your exact size. If between sizes, consider sizing up for comfort.",
    rows: DRESSING_ROWS,
    note: "Natural leather may stretch slightly with use. Sizing tolerance ±0.5 cm. Private label customization available upon request.",
  },
};

interface SizeChartProps {
  type: SizeChartType;
  highlightSize?: string;
}

const normalize = (s: string) =>
  s.toUpperCase().replace("XXL", "2XL").replace(/\s/g, "");

export const SizeChartDialog = ({ type, highlightSize }: SizeChartProps) => {
  const config = CHART_CONFIG[type];
  const hl = highlightSize ? normalize(highlightSize) : undefined;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Ruler className="w-4 h-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <DialogTitle className="font-heading text-2xl flex items-center gap-2">
            <Ruler className="w-6 h-6 text-primary" />
            {config.title}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed pt-2">
            {config.intro}
          </DialogDescription>
        </DialogHeader>

        {/* Visual hand measurement guide */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Info className="w-5 h-5 text-primary" />
          </div>
          <div className="text-sm">
            <p className="font-semibold text-foreground mb-1">How to measure</p>
            <p className="text-muted-foreground">
              Wrap a soft tape around the widest part of your palm (knuckles),
              keeping the thumb out. Record the measurement in inches or cm and
              match it to the table below.
            </p>
          </div>
        </div>

        {/* Size table */}
        <div className="rounded-xl border overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary text-secondary-foreground text-xs sm:text-sm font-semibold uppercase tracking-wide">
            <div className="px-3 sm:px-4 py-3 text-center">Size</div>
            <div className="px-3 sm:px-4 py-3 text-center border-l border-border/40">
              Hand (Inches)
            </div>
            <div className="px-3 sm:px-4 py-3 text-center border-l border-border/40">
              Hand (CM)
            </div>
          </div>
          <div className="divide-y">
            {config.rows.map((row) => {
              const isActive = hl && normalize(row.size) === hl;
              return (
                <div
                  key={row.size}
                  className={`grid grid-cols-3 text-sm transition-colors ${
                    isActive
                      ? "bg-primary/10 ring-1 ring-inset ring-primary/40"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="px-3 sm:px-4 py-3 text-center font-bold flex items-center justify-center gap-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                    {row.size}
                  </div>
                  <div className="px-3 sm:px-4 py-3 text-center text-muted-foreground border-l">
                    {row.inches}
                  </div>
                  <div className="px-3 sm:px-4 py-3 text-center text-muted-foreground border-l">
                    {row.cm}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-xs italic text-muted-foreground leading-relaxed">
          {config.note}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SizeChartDialog;
