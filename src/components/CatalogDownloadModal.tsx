import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, FileDown } from "lucide-react";

interface CatalogOption {
  id: string;
  label: string;
  url: string;
  filename: string;
}

const CATALOGS: CatalogOption[] = [
  {
    id: "motorcycle",
    label: "Motorcycle Gloves Catalog",
    url: "/everhide-catalog.pdf",
    filename: "EverHide-Motorcycle-Gloves-Catalog.pdf",
  },
  {
    id: "boxing",
    label: "Boxing Gloves Catalog",
    url: "/assets/boxing-gloves-catalog.pdf",
    filename: "EverHide-Boxing-Gloves-Catalog.pdf",
  },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CatalogDownloadModal = ({ open, onOpenChange }: Props) => {
  const [selected, setSelected] = useState<Record<string, boolean>>({
    motorcycle: true,
    boxing: true,
  });
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  const toggle = (id: string) => {
    setSelected((s) => ({ ...s, [id]: !s[id] }));
    setError("");
  };

  const handleDownload = () => {
    const picks = CATALOGS.filter((c) => selected[c.id]);
    if (picks.length === 0) {
      setError("Please select at least one catalog");
      return;
    }
    setDownloading(true);
    picks.forEach((c, i) => {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = c.url;
        a.download = c.filename;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, i * 300);
    });
    setTimeout(() => {
      setDownloading(false);
      onOpenChange(false);
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        role="dialog"
        aria-modal="true"
        className="sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle>Select Catalogs to Download</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 py-2">
          {CATALOGS.map((c) => (
            <label
              key={c.id}
              htmlFor={`cat-${c.id}`}
              className="flex items-center gap-3 p-3 rounded-md border border-border hover:border-primary/50 hover:bg-accent/40 cursor-pointer transition-colors"
            >
              <Checkbox
                id={`cat-${c.id}`}
                checked={!!selected[c.id]}
                onCheckedChange={() => toggle(c.id)}
              />
              <FileDown className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{c.label}</span>
            </label>
          ))}
          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={downloading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDownload}
            disabled={downloading}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="mr-2 h-4 w-4" />
            {downloading ? "Downloading..." : "Download Selected"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CatalogDownloadModal;
