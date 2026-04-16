import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  GitCommit,
  Layers,
  Lock,
  Shield,
  TerminalSquare,
} from 'lucide-react'

const navItems = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Hybrid Safety', href: '#hybrid' },
  { label: 'Execution Contract', href: '#execution-contract' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Diagnostics', href: '#diagnostics' },
]

const philosophyCards = [
  {
    id: '01',
    eyebrow: 'The Naive Approach',
    tone: 'text-rose-400/80',
    title: 'Prompt-only safety',
    body:
      'Prompt policies can influence the model, but they do not create a real runtime boundary around files, shell effects, or network access.',
  },
  {
    id: '02',
    eyebrow: 'The Brute Force',
    tone: 'text-amber-400/80',
    title: 'Hard deny-all',
    body:
      'Blunt blocking reduces blast radius by destroying utility first. A runtime that stays safe only because it cannot do useful work is not operationally solved.',
  },
  {
    id: '03',
    eyebrow: 'The CapClaw Way',
    tone: 'text-blue-400',
    title: 'Governed capability',
    body:
      'CapClaw keeps OpenClaw capable while putting governance on the execution path: hard outer bounds, flexible inner judgment, scoped capabilities, and final enforcement.',
    featured: true,
  },
]

const hybridLanes = [
  {
    icon: TerminalSquare,
    title: 'Manual Rules (Hard Boundary)',
    body:
      'Evaluates structural validity, path restrictions, protected directories, obvious dangerous effects, and tool-specific red lines with deterministic logic.',
    accent: 'border-white/[0.1]',
    iconTone: 'text-[#8A8F98]',
  },
  {
    icon: Cpu,
    title: 'Safe Agent (Sandboxed Semantic Runtime)',
    body:
      'Runs inside sandboxed execution and interprets gray-zone intent inside deterministic boundaries. It can suggest, narrow, or gate, but it is not the supreme authority.',
    accent: 'border-blue-500/50',
    iconTone: 'text-blue-400',
  },
]

const safeAgentModes = [
  {
    title: 'Advisory mode',
    body:
      'Provides rewrite hints, narrower capability suggestions, and risk explanations when the request is still inside the allowed outer boundary.',
  },
  {
    title: 'Boundary mode',
    body:
      'Applies stricter semantic gating for sensitive tool classes while still remaining subordinate to manual rules, broker scoping, and PEP enforcement.',
  },
]

const executionCards = [
  {
    icon: Layers,
    title: 'Capability as boundary',
    body:
      'The broker turns approved intent into a runtime capability that can bind effect, path, URL, TTL, use count, and request context.',
    items: ['effect + path scope', 'TTL + max uses', 'request-bound execution'],
  },
  {
    icon: Lock,
    title: 'PEP as last gate',
    body:
      'The policy enforcement point checks the real tool invocation immediately before execution and rejects any widened scope.',
    items: ['preflight match check', 'runtime widening rejection', 'approval-to-effect consistency'],
  },
  {
    icon: Database,
    title: 'Shared safety layer',
    body:
      'A compact runtime state surface for OpenClaw and the safe agent. Lightweight, structured, bounded, and inspectable rather than freeform memory.',
    items: ['blocked domains + paths', 'incident snapshots', 'preferred execution modes'],
  },
]

const traceEntries = [
  {
    time: '14:02:11.01',
    actor: '[PDP]',
    tone: 'text-blue-400',
    text: 'Request evaluated. Manual rules passed. Safe-agent review required for gray-zone file write.',
  },
  {
    time: '14:02:11.29',
    actor: '[SafeAgent]',
    tone: 'text-amber-400',
    text: 'Boundary mode selected sandboxed review lane. Recommended narrower output path and shorter TTL.',
  },
  {
    time: '14:02:11.34',
    actor: '[Broker]',
    tone: 'text-emerald-400',
    text: 'Capability minted with effect fs.write, path /tmp/workspace/*, ttl 300s, max_uses 2.',
  },
  {
    time: '14:02:11.36',
    actor: '[PEP]',
    tone: 'text-rose-400',
    text: 'Execution allowed only inside minted scope. Rejected widened network egress. Audit trace persisted.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#030303] pb-24 text-[#EDEDED] selection:bg-blue-500/30 selection:text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-100"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.05] bg-[#030303]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono-ui flex items-center gap-2 font-medium tracking-tight text-white"
          >
            <Shield className="h-4 w-4 text-blue-500" />
            CapClaw
            <span className="ml-2 rounded border border-white/[0.05] bg-white/[0.03] px-1.5 py-0.5 text-xs font-normal text-[#8A8F98]">
              Runtime
            </span>
          </a>

          <div className="hidden items-center gap-8 text-xs font-medium tracking-wide text-[#8A8F98] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="top" className="relative z-10 pt-32">
        <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center md:py-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/[0.15] bg-blue-500/[0.05] px-3 py-1 font-mono-ui text-[11px] uppercase tracking-[0.22em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            Governed Execution Layer
          </div>

          <h1 className="font-display mb-8 text-5xl font-medium leading-[1.05] tracking-[-0.06em] text-transparent bg-gradient-to-b from-white to-[#8A8F98] bg-clip-text md:text-7xl lg:text-8xl">
            Real runtime safety
            <br />
            for OpenClaw.
          </h1>

          <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-[#8A8F98] md:text-xl">
            A hybrid safety runtime that adds real execution control, capability
            brokering, policy enforcement, auditability, and lightweight shared safety
            state without stripping OpenClaw of its native utility.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#architecture"
              className="flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#EDEDED]"
            >
              Explore Architecture
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#hybrid"
              className="rounded-md border border-white/[0.1] bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              Inspect the Safety Model
            </a>
            <a
              href="https://github.com/pique2233/CapClaw"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/[0.1] bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              View Code
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="philosophy" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12">
            <h2 className="font-display mb-3 text-2xl font-medium tracking-tight">
              The Illusion of Prompt Safety
            </h2>
            <p className="max-w-2xl text-sm text-[#8A8F98]">
              Alignment is not enforcement. CapClaw keeps original capability intact
              while adding real runtime governance instead of relying on prose or blunt
              denial.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {philosophyCards.map((card) => (
              <article
                key={card.id}
                className={`relative flex flex-col justify-between rounded-xl border p-8 ${
                  card.featured
                    ? 'overflow-hidden border-blue-500/20 bg-[#0a0a0a] shadow-[0_0_30px_rgba(59,130,246,0.05)]'
                    : 'border-white/[0.05] bg-white/[0.02]'
                }`}
              >
                {card.featured ? (
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                ) : null}
                <div className="relative z-10">
                  <div className={`font-mono-ui mb-4 text-xs ${card.tone}`}>
                    {card.id} / {card.eyebrow}
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8A8F98]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="hybrid"
          className="mx-auto max-w-7xl border-t border-white/[0.05] px-6 py-20"
        >
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display mb-6 text-3xl font-medium tracking-tight">
                Determinism meets semantics.
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#8A8F98]">
                CapClaw does not promote the safe agent into a highest-power arbiter,
                and it does not pretend manual rules can resolve every semantic gray
                zone. Deterministic boundaries handle the red lines. Sandboxed semantic
                review interprets what remains inside them.
              </p>

              <div className="space-y-6">
                {hybridLanes.map((lane) => {
                  const Icon = lane.icon
                  return (
                    <div key={lane.title} className={`border-l-2 pl-4 ${lane.accent}`}>
                      <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-white">
                        <Icon className={`h-4 w-4 ${lane.iconTone}`} />
                        {lane.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#8A8F98]">
                        {lane.body}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-relaxed text-[#8A8F98]">
                <span className="text-white">
                  Safe-agent review never bypasses capability issuance or PEP.
                </span>{' '}
                It can advise, narrow, and explain. The runtime boundary still becomes
                real only when the broker scopes it and PEP enforces it.
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {safeAgentModes.map((mode) => (
                  <article
                    key={mode.title}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                  >
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Cpu className="h-4 w-4 text-blue-400" />
                      {mode.title}
                    </div>
                    <p className="text-xs leading-relaxed text-[#8A8F98]">{mode.body}</p>
                  </article>
                ))}
              </div>

              <div className="rounded-xl border border-blue-500/[0.14] bg-blue-500/[0.03] p-5 text-xs leading-relaxed text-[#8A8F98]">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <Shield className="h-4 w-4 text-blue-400" />
                  Safe agent runs in sandbox
                </div>
                It evaluates gray-zone execution inside a bounded environment. It does
                not become an unrestricted supervisor, and it does not mint final
                authority by itself.
              </div>

              <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#050505] font-mono-ui text-[13px] shadow-2xl">
                <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="flex items-center gap-3 border-b border-white/[0.05] bg-white/[0.02] px-4 py-3 text-[#8A8F98]">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/[0.1]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/[0.1]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/[0.1]" />
                  </div>
                  <span>capclaw_policy.yaml</span>
                </div>

                <div className="space-y-3 p-6">
                  <div>
                    <span className="text-blue-400">manual_rules:</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <div>
                      <span className="text-[#8A8F98]">protect_paths:</span>{' '}
                      <span className="text-emerald-400">["/etc/*", "/var/run/*", "~/.ssh/*"]</span>
                    </div>
                    <div>
                      <span className="text-[#8A8F98]">deny_effects:</span>{' '}
                      <span className="text-emerald-400">["privilege_escalation", "raw_ip_egress"]</span>
                    </div>
                    <div>
                      <span className="text-[#8A8F98]">tool_specific_limits:</span>{' '}
                      <span className="text-amber-400">true</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-blue-400">safe_agent:</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <div>
                      <span className="text-[#8A8F98]">modes:</span>{' '}
                      <span className="text-emerald-400">["advisory", "boundary"]</span>
                    </div>
                    <div>
                      <span className="text-[#8A8F98]">runs_in:</span>{' '}
                      <span className="text-emerald-400">"sandbox"</span>
                    </div>
                    <div>
                      <span className="text-[#8A8F98]">override_manual_rules:</span>{' '}
                      <span className="text-amber-400">false</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-blue-400">capability:</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <div>
                      <span className="text-[#8A8F98]">bind:</span>{' '}
                      <span className="text-emerald-400">["effect", "path", "url", "ttl", "max_uses"]</span>
                    </div>
                    <div>
                      <span className="text-[#8A8F98]">request_bound:</span>{' '}
                      <span className="text-amber-400">true</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-blue-400">pep:</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <div>
                      <span className="text-[#8A8F98]">reject_runtime_widening:</span>{' '}
                      <span className="text-amber-400">true</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="execution-contract"
          className="mx-auto max-w-7xl border-t border-white/[0.05] px-6 py-20"
        >
          <div className="mb-12">
            <h2 className="font-display mb-3 text-2xl font-medium tracking-tight">
              Execution contract
            </h2>
            <p className="max-w-2xl text-sm text-[#8A8F98]">
              This is where CapClaw stops being a safety opinion layer and becomes an
              enforceable runtime.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {executionCards.map((card) => {
              const Icon = card.icon
              return (
                <article
                  key={card.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-7"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">{card.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-[#8A8F98]">{card.body}</p>
                  <div className="space-y-2">
                    {card.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-[#AEB4BD]"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-blue-400/70" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section
          id="architecture"
          className="relative overflow-hidden border-t border-white/[0.05] bg-[#020202] px-6 py-24"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="font-display mb-4 text-3xl font-medium tracking-tight">
                The governed safety runtime
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-[#8A8F98]">
                The full pipeline shows how CapClaw intersects the normal OpenClaw loop:
                decision, scoped capability, final enforcement, audit, and compact
                runtime state.
              </p>
            </div>

            <div className="relative flex w-full flex-col rounded-2xl border border-white/[0.08] bg-[#050505] p-6 font-mono-ui text-sm md:p-10">
              <div className="relative mb-8 rounded-xl border border-white/[0.05] bg-white/[0.01] p-6">
                <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs text-[#8A8F98]">
                  Agent Loop
                </div>
                <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white shadow-sm">
                      <Activity className="h-4 w-4 text-blue-400" />
                      Agent Request
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#8A8F98]" />
                  </div>

                  <div>
                    <div className="mb-3 text-xs text-[#8A8F98]">Tool Calls?</div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-center justify-between rounded-lg border border-blue-500/[0.12] bg-blue-500/[0.03] px-4 py-3">
                        <span className="text-xs text-white">Yes</span>
                        <ArrowRight className="h-3.5 w-3.5 text-blue-400/70" />
                        <span className="text-xs text-blue-300">Enter governed runtime</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3">
                        <span className="text-xs text-[#8A8F98]">No</span>
                        <ArrowRight className="h-3.5 w-3.5 text-white/[0.3]" />
                        <span className="text-xs text-[#C7CCD4]">LLM Final Text</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex flex-col gap-6 md:flex-row">
                <div className="flex-1 rounded-xl border border-blue-500/20 bg-blue-500/[0.02] p-6">
                  <div className="mb-4 flex items-center gap-1.5 text-xs text-blue-400">
                    <Shield className="h-3 w-3" />
                    Policy Decision Point (PDP)
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded border border-white/[0.05] bg-[#0a0a0a] p-3 text-[#8A8F98]">
                      <span className="mb-1 block text-white">Manual Protocol Rules</span>
                      Hard bounds, parsing, protected paths, obvious danger checks.
                    </div>
                    <div className="rounded border border-white/[0.05] bg-[#0a0a0a] p-3 text-[#8A8F98]">
                      <span className="mb-1 block text-white">Tool-Specific Rules</span>
                      Schema validity, TTL, effect limits, model/tool-specific red lines.
                    </div>
                    <div className="col-span-2 rounded border border-blue-500/[0.12] bg-[#08090b] p-4 text-[#8A8F98]">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <span className="mb-1 block text-white">Safe-Agent Runtime</span>
                          Sandboxed semantic review inside the deterministic boundary.
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500/50" />
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded border border-white/[0.05] bg-black/20 p-3">
                          <div className="mb-1 text-white">Advisory mode</div>
                          <div>
                            Rewrite hints, narrower scope proposals, risk explanation.
                          </div>
                        </div>
                        <div className="rounded border border-white/[0.05] bg-black/20 p-3">
                          <div className="mb-1 text-white">Boundary mode</div>
                          <div>
                            Higher-friction semantic gating for sensitive tool flows.
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 rounded border border-white/[0.05] bg-black/20 p-3 text-[11px] text-[#8A8F98]">
                        Runs in sandbox. Does not override manual rules. Does not replace
                        broker scoping or PEP.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden flex-col items-center justify-center px-2 md:flex">
                  <ArrowRight className="h-5 w-5 text-blue-500/50" />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="rounded border border-white/[0.05] bg-white/[0.05] p-2">
                      <GitCommit className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-white">Capability Broker</div>
                      <div className="text-xs text-[#8A8F98]">
                        Translates approved intent into explicit runtime tokens.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-5 text-xs text-[#8A8F98]">
                    <div className="mb-3 text-white">Capability scope</div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div>effect: fs.write</div>
                      <div>path: /tmp/workspace/*</div>
                      <div>ttl: 300s</div>
                      <div>max_uses: 2</div>
                      <div>url_scope: docs only</div>
                      <div>request_bound: true</div>
                      <div>exec_mode: sandboxed</div>
                      <div>broker: narrowed</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="h-4 w-4 text-white/[0.2]" />
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="rounded border border-rose-500/[0.2] bg-rose-500/[0.1] p-2">
                      <Lock className="h-5 w-5 text-rose-400" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-white">Policy Enforcement Point (PEP)</div>
                      <div className="text-xs text-[#8A8F98]">
                        Final execution gateway. Prevents runtime widening.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a]">
                <div className="flex items-center justify-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-6 py-3 font-medium text-white">
                  <Database className="h-4 w-4 text-blue-400" />
                  Audit & Shared Safety Layer
                </div>
                <div className="grid divide-y divide-white/[0.08] text-xs md:grid-cols-4 md:divide-x md:divide-y-0">
                  <div className="p-5">
                    <div className="mb-1 font-medium text-white">Manual Rules</div>
                    <div className="text-[#8A8F98]">Hard boundary decisions and logs</div>
                  </div>
                  <div className="p-5">
                    <div className="mb-1 flex items-center gap-1.5 font-medium text-white">
                      <Shield className="h-3 w-3 text-blue-400" />
                      Safe Agent
                    </div>
                    <div className="text-[#8A8F98]">
                      Advisory/boundary mode state, sandbox status, semantic hints.
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-1 flex items-center gap-1.5 font-medium text-white">
                      <Layers className="h-3 w-3 text-blue-400" />
                      Shared Safety Layer
                    </div>
                    <div className="text-[#8A8F98]">
                      Compact blocked domains, path prefixes, incidents, and exec mode.
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-1 font-medium text-white">Diagnostics</div>
                    <div className="text-[#8A8F98]">
                      Replayable, explainable state for operators and release work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="diagnostics"
          className="mx-auto max-w-4xl border-t border-white/[0.05] px-6 py-20"
        >
          <div className="mb-10 text-center">
            <h2 className="font-display mb-3 text-2xl font-medium tracking-tight">
              Engineered for release
            </h2>
            <p className="text-sm text-[#8A8F98]">
              Traceability built in. Know who blocked what, where the boundary narrowed,
              and why the final execution was accepted or denied.
            </p>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-relaxed text-[#8A8F98]">
              <div className="mb-2 flex items-center gap-2 text-white">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                Operational questions CapClaw can answer
              </div>
              <div className="space-y-2 text-xs">
                <div>Was the block caused by manual rules or semantic review?</div>
                <div>Did the broker narrow capability scope before issuance?</div>
                <div>Did PEP reject the live invocation due to widening?</div>
                <div>Are memory backends, sandboxing, or model providers unhealthy?</div>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-relaxed text-[#8A8F98]">
              <div className="mb-2 flex items-center gap-2 text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Release-minded engineering
              </div>
              <div className="space-y-2 text-xs">
                <div>Configuration should be inspectable before it reaches production.</div>
                <div>Rejected execution should produce a readable chain of custody.</div>
                <div>Diagnostics belong in the runtime contract, not in afterthought tooling.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 rounded-lg border border-white/[0.08] bg-[#050505] p-5 font-mono-ui text-[13px]">
            {traceEntries.map((entry) => (
              <div key={entry.time + entry.actor} className="flex items-start gap-4">
                <span className="shrink-0 text-[#4A4A4A]">{entry.time}</span>
                <span className={`shrink-0 ${entry.tone}`}>{entry.actor}</span>
                <span className="text-[#EDEDED]">{entry.text}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-white/[0.05] px-6 py-8 text-center font-mono-ui text-xs text-[#8A8F98]">
        <div className="mb-2 flex items-center justify-center gap-2 text-white/50">
          <Shield className="h-3 w-3" />
          CapClaw
        </div>
        Governed execution layer for OpenClaw. Built for production.
      </footer>
    </div>
  )
}

export default App
