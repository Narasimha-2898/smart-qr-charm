import { createFileRoute, Link } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { ArrowRight, QrCode, Palette, BarChart3, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
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
          <a href="#" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">
            Sign In
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-primary-foreground transition hover:brightness-110"
          >
            Get Started <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-8 pb-24 lg:grid-cols-2 lg:gap-16 lg:pt-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono-caps text-[11px] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Unified QR Platform
          </div>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            One QR.<br />
            <span className="text-primary">Every Destination.</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Design, customize and manage QR codes for URLs, Wi-Fi, UPI payments,
            WhatsApp, business cards and more — all from a single, elegant dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono-caps text-xs font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Create Free Account <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-mono-caps text-xs font-semibold text-foreground transition hover:border-primary/50"
            >
              I already have an account
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono-caps text-[11px] text-muted-foreground">
            <span>· 8 QR Types</span>
            <span>· PNG + SVG Export</span>
            <span>· No Signup Fee</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono-caps text-[11px] text-muted-foreground">Preview</div>
              <div className="mt-1 text-lg font-semibold">Coffee Menu · QR-042</div>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono-caps text-[11px] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Live
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center rounded-xl bg-white p-8">
            <QRCodeSVG
              value="https://qrforge.app/coffee-menu"
              size={260}
              level="H"
              marginSize={0}
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: "Scans", v: "1,284" },
              { k: "Type", v: "URL" },
              { k: "Uptime", v: "99.9%" },
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
            { icon: QrCode, title: "Static + Dynamic", body: "Generate scannable QR codes for URLs, WiFi, UPI, WhatsApp, SMS and more." },
            { icon: Palette, title: "Custom Styling", body: "Adjust colors, size and error correction — keep it brand-perfect and scannable." },
            { icon: BarChart3, title: "Scan Analytics", body: "Track scan counts and monitor which QR codes are performing best." },
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
            <p className="mt-1 text-sm text-muted-foreground">Sign up in under 10 seconds — no credit card required.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono-caps text-xs font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Start Free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 font-mono-caps text-[11px] text-muted-foreground">
          <span>© QRForge</span>
          <span>Built with care</span>
        </div>
      </footer>
    </div>
  );
}
