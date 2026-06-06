import { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Star, Zap, Download, Clock, ChevronDown, Check, Info, Lock, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-destructive text-destructive-foreground text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
      <Clock className="w-4 h-4" />
      Oferta promocional termina em: {formatTime(timeLeft)}
    </div>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
  };

  return (
    <div
      className="relative mx-auto mb-7 rounded-3xl overflow-hidden cursor-pointer select-none"
      style={{
        width: "min(100%, 280px)",
        aspectRatio: "9/16",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#000",
      }}
      onClick={toggleMute}
    >
      <video
        ref={videoRef}
        src="/vsl.mov"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      />

      {/* Audio toggle button — visible only when muted */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: muted ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-2 rounded-2xl pointer-events-auto"
          style={{
            width: 80,
            height: 80,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.16)",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Speaker icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          <span style={{ fontSize: 10, fontWeight: 800, color: "#111", letterSpacing: "0.04em", lineHeight: 1 }}>LIGAR SOM</span>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <CountdownTimer />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle bg decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #1FAF5A 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #FFC72C 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-2xl mx-auto px-5 pt-10 pb-8 md:pt-14 md:pb-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Headline — max 2 lines desktop */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-4 font-display" style={{ color: "#111111" }}>
              <span style={{ color: "#1FAF5A" }}>+200 Atividades</span> da{" "}
              <span style={{ color: "#FFC72C" }}>Copa</span> que as Crianças Não Querem Largar
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg mb-6 leading-relaxed max-w-lg mx-auto" style={{ color: "#555555" }}>
              Diversão, aprendizado e criatividade em um único kit — pronto para usar em casa ou na escola.
            </p>
          </motion.div>

          {/* VSL Video — 9:16 vertical */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <HeroVideo />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-cta"
              className="w-full sm:w-auto text-lg font-black px-10 py-3.5 rounded-2xl uppercase tracking-wide transition-all duration-200 mb-4"
              style={{
                background: "linear-gradient(135deg, #1FAF5A 0%, #17913F 100%)",
                color: "#ffffff",
                boxShadow: "0 6px 24px rgba(31,175,90,0.40), 0 2px 8px rgba(31,175,90,0.2)",
                border: "none",
                display: "inline-block"
              }}
            >
              QUERO GARANTIR AGORA →
            </motion.button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: CheckCircle2, label: "Acesso imediato" },
                { icon: Download, label: "PDF para imprimir" },
                { icon: Shield, label: "Garantia 7 dias" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#666" }}>
                  <Icon className="w-4 h-4 shrink-0" style={{ color: "#1FAF5A" }} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DOR SECTION */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-display">Você também passa por isso?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              "As crianças só querem celular",
              "Falta criatividade nas atividades",
              "Os alunos perdem o interesse rápido",
              "Planejar atividades toma muito tempo",
              "Difícil encontrar algo educativo e divertido",
              "Falta de materiais alinhados à BNCC e fáceis de aplicar",
            ].map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card p-3 rounded-xl shadow-sm border border-border flex items-start gap-2.5"
              >
                <div className="bg-destructive/10 p-1.5 rounded-full text-destructive shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <p className="font-semibold text-sm text-card-foreground leading-snug">{pain}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-accent text-accent-foreground p-5 rounded-2xl shadow-lg border border-accent/20"
          >
            <h3 className="text-xl md:text-2xl font-bold font-display">Por isso criamos o Kit Copa.</h3>
          </motion.div>
        </div>
      </section>

      {/* 3. O QUE VEM NO KIT */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-3 font-display">📦 Veja tudo que você recebe</h2>
            <p className="text-lg text-muted-foreground">Um material completo para entreter e ensinar</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "+200 atividades alinhadas à BNCC",
              "Álbum da Copa da Sala exclusivo",
              "Mini Craque personalizável infantil",
              "Jogos educativos e desafios divertidos",
              "Certificados, figurinhas e materiais bônus",
              "Acesso imediato + impressão ilimitada",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-muted/20 p-4 rounded-xl border border-border/50 hover:bg-muted/40 transition-colors"
              >
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-semibold text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="py-14 px-4 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">Escolha o seu Kit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
            {/* Card 1 — Essencial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border p-6"
              style={{ background: "#FFFFFF", borderColor: "#E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#9CA3AF" }}>⚽ KIT ESSENCIAL</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-base font-bold" style={{ color: "#111" }}>R$</span>
                <span className="text-4xl font-black font-display" style={{ color: "#111" }}>9,90</span>
              </div>
              <p className="text-xs mb-4" style={{ color: "#9CA3AF" }}>pagamento único</p>
              <ul className="space-y-2.5 mb-5">
                {[
                  "+100 atividades da Copa",
                  "PDFs prontos para imprimir",
                  "Atualizações gratuitas",
                  "Impressão ilimitada",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#1FAF5A" }} />
                    <span className="text-sm font-medium" style={{ color: "#374151" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-xl text-sm font-bold border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: "#D1D5DB", color: "#374151" }}
                data-testid="button-buy-essential"
                onClick={() => { window.location.href = "https://pay.wiapy.com/MZac0cQeTb"; }}
              >
                COMPRAR AGORA
              </button>
            </motion.div>

            {/* Card 2 — Completo (destaque com borda gradiente Brasil) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
              style={{
                borderRadius: 18,
                padding: 2,
                background: "linear-gradient(135deg, #1FAF5A 0%, #FFC72C 60%, #1FAF5A 100%)",
                boxShadow: "0 0 28px rgba(31,175,90,0.18), 0 0 16px rgba(255,199,44,0.12), 0 8px 32px rgba(0,0,0,0.10)",
              }}
            >
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap z-10"
                style={{
                  background: "linear-gradient(135deg, #FFC72C, #F59E0B)",
                  color: "#111111",
                  boxShadow: "0 2px 10px rgba(255,199,44,0.5)",
                  letterSpacing: "0.06em"
                }}>
                ⭐ Mais Escolhido
              </div>

              {/* Inner white card */}
              <div className="rounded-2xl p-6 relative" style={{ background: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 mt-1" style={{ color: "#1FAF5A" }}>🏆 KIT COMPLETO</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-base font-bold" style={{ color: "#111" }}>R$</span>
                  <span className="text-4xl font-black font-display" style={{ color: "#111" }}>17,90</span>
                </div>
                <p className="text-xs mb-4" style={{ color: "#9CA3AF" }}>pagamento único · acesso imediato</p>

                <p className="text-xs font-bold uppercase mb-3" style={{ color: "#1FAF5A" }}>+200 atividades + extras exclusivos:</p>
                <ul className="space-y-2.5 mb-5">
                  {[
                    "+200 atividades da Copa",
                    "Álbum da Copa da Sala",
                    "Mini Craque Personalizável",
                    "Certificados infantis",
                    "Figurinhas e bônus",
                    "Impressão ilimitada",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#1FAF5A" }} />
                      <span className="text-sm font-semibold" style={{ color: "#1F2937" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3.5 rounded-xl text-sm font-black uppercase tracking-wide transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #1FAF5A 0%, #17913F 100%)",
                    color: "#ffffff",
                    boxShadow: "0 4px 16px rgba(31,175,90,0.35)"
                  }}
                  data-testid="button-buy-complete"
                  onClick={() => { window.location.href = "https://pay.wiapy.com/KdYHw9onFS"; }}
                >
                  COMPRAR AGORA
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS */}
      <section className="py-14 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-display">Por que pais e professores estão amando?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { t: "Menos tempo no celular", i: Zap },
              { t: "Aprendizado divertido", i: Star },
              { t: "Crianças entretidas por horas", i: Clock },
              { t: "Fácil de imprimir", i: Download },
              { t: "Ideal para escolas e casa", i: CheckCircle2 },
              { t: "Desenvolvimento criativo", i: Star },
              { t: "Organização para professores", i: CheckCircle2 },
              { t: "Atividades alinhadas à BNCC", i: CheckCircle2 },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card p-3 rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-2 hover:border-primary/50 transition-colors"
              >
                <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                  <b.i className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm leading-snug">{b.t}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "#FFFBEB", color: "#D97706" }}>
              ⭐ AVALIAÇÕES REAIS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display" style={{ color: "#111111" }}>
              O que dizem sobre o Kit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Nos dias de jogo foi a salvação! Imprimi na véspera e as crianças ficaram entretidas a tarde toda. Recomendo demais.",
                author: "Mariana Costa",
                role: "Mãe e coordenadora",
                avatar: "https://i.pravatar.cc/150?img=49",
              },
              {
                text: "Imprimi rapidinho e meus alunos amaram kkk. A sala ficou em silêncio total fazendo as atividades. Milagre!",
                author: "Fernanda Alves",
                role: "Professora, 1º ano",
                avatar: "https://randomuser.me/api/portraits/women/79.jpg",
              },
              {
                text: "Meu filho ficou vidrado nas figurinhas 😂 Tive que imprimir mais duas vezes. Vale muito a pena!",
                author: "Aline Mendes",
                role: "Mãe",
                avatar: "https://i.pravatar.cc/150?img=9",
              },
              {
                text: "Usei na escolinha e foi sucesso total. Os pais ainda me perguntam onde consegui o material. Super indico!",
                author: "Bruna Tavares",
                role: "Pedagoga",
                avatar: "https://randomuser.me/api/portraits/women/53.jpg",
              },
              {
                text: "Pelo preço achei que seria simples, mas me surpreendeu MUITO. Material lindo, bem organizado e as crianças adoraram.",
                author: "Carla Rodrigues",
                role: "Mãe de 3 filhos",
                avatar: "https://i.pravatar.cc/150?img=32",
              },
              {
                text: "Os alunos ficaram animados como nunca durante as aulas da Copa. A sala virou um estádio de entusiasmo! Vou usar todo ano.",
                author: "Juliana Ferreira",
                role: "Professora do 2º ano",
                avatar: "https://randomuser.me/api/portraits/women/56.jpg",
              },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 border transition-all duration-200"
                style={{ background: "#FFFFFF", borderColor: "#EFEFEF", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#FFC72C" }} />
                  ))}
                </div>

                <p className="text-base leading-relaxed mb-6" style={{ color: "#333333" }}>
                  "{d.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F0F0F0" }}>
                  <img
                    src={d.avatar}
                    alt={d.author}
                    className="w-11 h-11 rounded-full object-cover border-2"
                    style={{ borderColor: "#E8E8E8" }}
                  />
                  <div>
                    <p className="font-black text-sm" style={{ color: "#111111" }}>{d.author}</p>
                    <p className="text-xs" style={{ color: "#888888" }}>{d.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#F0FDF6", color: "#1FAF5A" }}>
                      ✓ Verificado
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social proof summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border" style={{ background: "#FAFAFA", borderColor: "#E8E8E8" }}>
              <div className="flex -space-x-2">
                {["https://i.pravatar.cc/150?img=49","https://i.pravatar.cc/150?img=36","https://i.pravatar.cc/150?img=9"].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <p className="text-sm font-semibold" style={{ color: "#444444" }}>
                <span className="font-black" style={{ color: "#1FAF5A" }}>+2.400 famílias</span> já garantiram o kit
              </p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: "#FFC72C" }} />)}
              </div>
              <span className="text-sm font-black" style={{ color: "#111" }}>4.9</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. GARANTIA */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
          <Shield className="w-24 h-24 text-primary shrink-0" />
          <div>
            <h2 className="text-3xl font-black font-display mb-2 text-white">Garantia de 7 dias</h2>
            <p className="text-xl text-white/90">Se você não gostar do material por qualquer motivo, devolvemos 100% do seu dinheiro. Risco zero para você.</p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-display">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Como recebo o material?", a: "Você receberá o acesso imediatamente por e-mail logo após a confirmação do pagamento." },
              { q: "O material é físico?", a: "Não. É um material 100% digital em PDF para você baixar e imprimir quantas vezes quiser." },
              { q: "Posso imprimir quantas vezes quiser?", a: "Sim! Uma vez baixado, o arquivo é seu para sempre." },
              { q: "Funciona no celular?", a: "Sim, você pode baixar e visualizar no celular, mas para realizar as atividades é necessário imprimir." },
              { q: "Serve para qual idade?", a: "As atividades são ideais para crianças de 4 a 10 anos, com diferentes níveis de dificuldade." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-16 px-5 bg-accent text-accent-foreground text-center relative">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 font-display leading-tight break-words">
            <span className="text-primary">⚽ Transforme a paixão</span>{" "}
            <span className="block sm:inline">pela Copa em diversão e aprendizado</span>
          </h2>
          <p className="text-base sm:text-xl mb-8 text-white/90">Garanta agora o kit que as crianças NÃO querem largar.</p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-2xl h-auto py-4 sm:py-6 px-8 sm:px-12 rounded-full font-black shadow-2xl shadow-primary/40 uppercase tracking-wide border-b-4 border-primary-foreground/20 animate-pulse w-full sm:w-auto"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-final-cta"
          >
            QUERO ACESSO IMEDIATO
          </Button>
          <p className="mt-6 text-primary/80 font-bold">Oferta promocional termina hoje</p>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-12 px-4 bg-muted text-muted-foreground text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> Compra Segura</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Pagamento Protegido</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Acesso Imediato</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Kit Copa dos Craques. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LandingPage />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
