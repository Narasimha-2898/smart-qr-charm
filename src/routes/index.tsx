import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ArrowRight, QrCode, Download, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QrCreator } from "@/components/qr-creator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QRForge — Create and Export QR Codes" },
      { name: "description", content: "Create static QR codes for websites and text with QRForge. Download PNG and SVG files directly in your browser, with no account required." },
      { property: "og:title", content: "QRForge — Create and Export QR Codes" },
      { property: "og:description", content: "Create website and text QR codes and export them as PNG or SVG. No account required." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [creatorOpen, setCreatorOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <QrCode className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-primary">QR</span>Forge
          </span>
        </div>
        <nav className="flex items-center gap-3">
          <Button onClick={() => setCreatorOpen(true)} className="text-xs font-semibold uppercase">
            Get Started <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-8 pb-24 lg:grid-cols-2 lg:gap-16 lg:pt-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono-caps text-[11px] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Unified QR Platform
          </div>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-6xl lg:text-7xl">
            One QR.<br />
            <span className="text-primary">Every Destination.</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Create QR codes for websites and text, then download print-ready
            PNG and SVG files — all right in your browser.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => setCreatorOpen(true)} className="font-mono-caps text-xs font-semibold">
              Create QR Code <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono-caps text-[11px] text-muted-foreground">
            <span>· Website + Text</span>
            <span>· PNG + SVG Export</span>
            <span>· No Account Needed</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-mono-caps text-[11px] text-muted-foreground">Preview</div>
              <div className="mt-1 text-lg font-semibold">QRForge · Website QR</div>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono-caps text-[11px] text-primary">
              Sample
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center rounded-lg bg-qr-paper p-5">
            <QRCodeSVG
              value="https://smart-qr-charm.lovable.app"
              size={260}
              level="H"
              marginSize={4}
              className="h-auto w-full max-w-[260px]"
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: "Format", v: "SVG" },
              { k: "Type", v: "URL" },
              { k: "Mode", v: "Static" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
                <div className="font-mono-caps text-[10px] text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-semibold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="font-mono-caps text-xs text-primary">Capabilities</div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything a modern QR workflow demands
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: QrCode, title: "Website QR Codes", body: "Create a static QR code for a website address." },
            { icon: FileText, title: "Text QR Codes", body: "Turn a message or other text into a scannable QR code." },
            { icon: Download, title: "PNG + SVG Export", body: "Download your QR code in three PNG sizes or as a scalable SVG." },
            { icon: ShieldCheck, title: "Client-Side Secure", body: "Everything stays in your browser — no server round-trips, no leaks." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card/60 p-5 transition hover:border-primary/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <QrCode className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-2xl font-bold">Ready to forge your first QR?</h3>
            <p className="mt-1 text-sm text-muted-foreground">No account or credit card required.</p>
          </div>
          <Button size="lg" onClick={() => setCreatorOpen(true)} className="font-mono-caps text-xs font-semibold">
            Start Free <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 font-mono-caps text-[11px] text-muted-foreground">
          <span>© QRForge</span>
          <span>Built with care</span>
        </div>
      </footer>
      <QrCreator open={creatorOpen} onOpenChange={setCreatorOpen} />
    </div>
  );
}
