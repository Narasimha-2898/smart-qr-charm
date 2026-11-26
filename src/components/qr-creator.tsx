import { useRef, useState } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function QrCreator({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [type, setType] = useState<"url" | "text">("url");
  const [value, setValue] = useState("");
  const [size, setSize] = useState(512);
  const [error, setError] = useState("");
  const [payload, setPayload] = useState("");
  const svgRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  function generate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = value.trim();
    if (!content) {
      setError(type === "url" ? "Enter a website address." : "Enter some text.");
      return;
    }
    if (type === "url") {
      try {
        const url = new URL(content);
        if (!["https:", "http:"].includes(url.protocol) || !url.hostname) throw new Error("Invalid URL");
      } catch {
        setError("Enter a complete website address starting with https:// or http://.");
        return;
      }
    }
    setError("");
    setPayload(content);
  }

  function download(format: "png" | "svg") {
    let blob: Blob;
    if (format === "svg") {
      const svg = svgRef.current?.querySelector("svg");
      if (!svg) return;
      blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml" });
      save(blob, format);
    } else {
      const canvas = canvasRef.current?.querySelector("canvas");
      canvas?.toBlob((result) => { if (result) save(result, format); }, "image/png");
    }
  }

  function save(blob: Blob, format: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `qrforge-code.${format}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle>Create your QR code</DialogTitle>
          <DialogDescription>QRForge · Static QR</DialogDescription>
        </DialogHeader>
        <form onSubmit={generate} className="grid gap-4">
          <div className="grid grid-cols-2 gap-2" role="group" aria-label="QR type">
            {(["url", "text"] as const).map((option) => (
              <Button key={option} type="button" variant={type === option ? "default" : "outline"} aria-pressed={type === option} onClick={() => { setType(option); setPayload(""); setError(""); }}>
                {option === "url" ? "Website" : "Text"}
              </Button>
            ))}
          </div>
          <label className="grid gap-2 text-sm font-medium">
            {type === "url" ? "Website address" : "Text"}
            <Input value={value} maxLength={1000} placeholder={type === "url" ? "https://example.com" : "Your text"} onChange={(event) => { setValue(event.target.value); setPayload(""); setError(""); }} aria-invalid={Boolean(error)} aria-describedby={error ? "qr-error" : undefined} />
          </label>
          {error && <p id="qr-error" role="alert" className="text-sm text-destructive">{error}</p>}
          <label className="grid gap-2 text-sm font-medium">
            PNG size
            <select value={size} onChange={(event) => setSize(Number(event.target.value))} className="h-9 rounded-md border border-input bg-background px-3 text-foreground">
              <option value={256}>256 × 256 px</option>
              <option value={512}>512 × 512 px</option>
              <option value={1024}>1024 × 1024 px</option>
            </select>
          </label>
          <Button type="submit">Generate QR code</Button>
        </form>
        {payload && (
          <div className="grid gap-4">
            <div ref={svgRef} className="qr-output mx-auto flex aspect-square w-full max-w-60 items-center justify-center rounded-lg" aria-label="Generated QR code">
              <QRCodeSVG value={payload} size={240} level="H" marginSize={4} className="h-auto w-full" />
            </div>
            <div ref={canvasRef} className="hidden"><QRCodeCanvas value={payload} size={size} level="H" marginSize={4} /></div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => download("png")}><Download /> PNG</Button>
              <Button variant="outline" onClick={() => download("svg")}><Download /> SVG</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}