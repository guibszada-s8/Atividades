import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Star, Zap, Download, Clock, ChevronDown, Check, Info, Lock } from "lucide-react";
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

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <CountdownTimer />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #1FAF5A 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #FFC72C 0%, transparent 70%)" }} />
          {/* Faint soccer ball pattern */}
          <svg className="absolute top-8 right-8 w-24 h-24 opacity-[0.06]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#1FAF5A" strokeWidth="2"/>
            <polygon points="50,20 62,38 80,38 68,52 74,70 50,58 26,70 32,52 20,38 38,38" fill="#1FAF5A"/>
          </svg>
          <svg className="absolute bottom-16 left-12 w-16 h-16 opacity-[0.05]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#FFC72C" strokeWidth="2"/>
            <polygon points="50,20 62,38 80,38 68,52 74,70 50,58 26,70 32,52 20,38 38,38" fill="#FFC72C"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Copy */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-7 border" style={{ background: "#F0FDF6", color: "#1FAF5A", borderColor: "#A7F3C8" }}>
                  ⚽ LANÇAMENTO EXCLUSIVO
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 font-display" style={{ color: "#111111" }}>
                  O material da{" "}
                  <span style={{ color: "#1FAF5A" }}>Copa</span> que as{" "}
                  <span style={{ color: "#1FAF5A" }}>crianças</span>{" "}
                  <span style={{ color: "#FFC72C", WebkitTextStroke: "1px #e6aa00" }}>NÃO</span>{" "}
                  querem largar
                </h1>

                <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: "#444444" }}>
                  Mais de <strong>250 atividades</strong> prontas para imprimir que unem{" "}
                  <span style={{ color: "#1FAF5A", fontWeight: 700 }}>diversão</span>,
                  criatividade e{" "}
                  <span style={{ color: "#1FAF5A", fontWeight: 700 }}>aprendizado</span>{" "}
                  durante a Copa do Mundo.
                </p>

                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block w-full md:w-auto"
                >
                  <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid="button-hero-cta"
                    className="w-full md:w-auto text-lg md:text-xl font-black px-10 py-5 rounded-2xl uppercase tracking-wide transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #1FAF5A 0%, #17913F 100%)",
                      color: "#ffffff",
                      boxShadow: "0 6px 24px rgba(31,175,90,0.35), 0 2px 8px rgba(31,175,90,0.2)",
                      border: "none"
                    }}
                  >
                    QUERO GARANTIR AGORA →
                  </button>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-8">
                  {[
                    { icon: CheckCircle2, label: "Acesso imediato" },
                    { icon: Download, label: "Arquivos em PDF" },
                    { icon: CheckCircle2, label: "Imprima à vontade" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#555555" }}>
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "#1FAF5A" }} />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Mockup Cards */}
            <div className="flex-1 w-full max-w-md lg:max-w-none relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                {/* Main card */}
                <div className="rounded-3xl p-6 shadow-2xl border border-gray-100 mb-4" style={{ background: "#FFFFFF" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg font-black" style={{ background: "linear-gradient(135deg, #1FAF5A, #17913F)" }}>⚽</div>
                    <div>
                      <p className="font-black text-sm" style={{ color: "#111" }}>Kit Copa dos Craques</p>
                      <p className="text-xs" style={{ color: "#888" }}>250+ atividades · PDF</p>
                    </div>
                    <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#F0FDF6", color: "#1FAF5A" }}>COMPLETO</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Atividades Infantis", emoji: "🎨", bg: "#EFF6FF", color: "#3B82F6" },
                      { label: "Álbum da Sala", emoji: "📒", bg: "#F0FDF6", color: "#1FAF5A" },
                      { label: "Mini Craque", emoji: "🏆", bg: "#FFFBEB", color: "#F59E0B" },
                      { label: "Para Colorir", emoji: "🖍️", bg: "#FDF2F8", color: "#EC4899" },
                      { label: "Figurinhas", emoji: "⭐", bg: "#F5F3FF", color: "#8B5CF6" },
                      { label: "Desafios", emoji: "🔥", bg: "#FFF7ED", color: "#F97316" },
                    ].map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        whileHover={{ y: -4, scale: 1.04 }}
                        className="rounded-2xl p-3 flex flex-col items-center justify-center text-center cursor-default transition-all"
                        style={{ background: card.bg, border: `1px solid ${card.color}22` }}
                      >
                        <span className="text-2xl mb-1">{card.emoji}</span>
                        <span className="text-xs font-bold leading-tight" style={{ color: card.color }}>{card.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-gray-100"
                  style={{ background: "#FFFFFF" }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#FFFBEB" }}>
                    <Star className="w-5 h-5" style={{ color: "#FFC72C" }} />
                  </div>
                  <div>
                    <p className="text-xs font-black" style={{ color: "#111" }}>+2.400 famílias</p>
                    <p className="text-xs" style={{ color: "#888" }}>já garantiram o kit</p>
                  </div>
                </motion.div>

                {/* Floating badge — top right */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 border border-gray-100"
                  style={{ background: "#FFFFFF" }}
                >
                  <Shield className="w-5 h-5" style={{ color: "#1FAF5A" }} />
                  <p className="text-xs font-black" style={{ color: "#111" }}>Garantia 7 dias</p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12"
            style={{ borderColor: "#F0F0F0" }}
          >
            {[
              { value: "250+", label: "Atividades prontas" },
              { value: "7 dias", label: "Garantia total" },
              { value: "PDF", label: "Acesso imediato" },
              { value: "∞", label: "Impressões ilimitadas" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black font-display" style={{ color: "#1FAF5A" }}>{value}</span>
                <span className="text-sm" style={{ color: "#777" }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. DOR SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-display">Você também passa por isso?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "As crianças só querem celular",
              "Falta criatividade nas atividades",
              "Os alunos perdem o interesse rápido",
              "Planejar atividades toma muito tempo",
              "Difícil encontrar algo educativo e divertido"
            ].map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4"
              >
                <div className="bg-destructive/10 p-3 rounded-full text-destructive shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <p className="font-semibold text-lg text-card-foreground leading-snug">{pain}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-accent text-accent-foreground p-8 rounded-3xl shadow-lg border border-accent/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display">Foi pensando nisso que criamos o Kit Copa dos Craques.</h3>
          </motion.div>
        </div>
      </section>

      {/* 3. O QUE VEM NO KIT */}
      <section className="py-20 px-4" style={{ background: "#FAFAFA" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "#F0FDF6", color: "#1FAF5A" }}>
              O QUE ESTÁ INCLUÍDO
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-3 font-display" style={{ color: "#111111" }}>
              📦 Veja tudo que você recebe
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>Um kit completo que vale muito mais do que custa</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                emoji: "🎯",
                title: "250+ Atividades da Copa",
                desc: "Prontas para imprimir e usar na hora — sem precisar criar nada do zero.",
                bg: "#F0FDF6", border: "#BBF7D0", accent: "#1FAF5A"
              },
              {
                emoji: "📒",
                title: "Álbum da Copa da Sala",
                desc: "Um álbum exclusivo para cada criança colar as figurinhas e torcer pelo seu time.",
                bg: "#FFFBEB", border: "#FDE68A", accent: "#D97706"
              },
              {
                emoji: "🏆",
                title: "Mini Craque Personalizável",
                desc: "Cada aluno vira um craque! Material personalizável com nome e foto.",
                bg: "#EFF6FF", border: "#BFDBFE", accent: "#3B82F6"
              },
              {
                emoji: "🎮",
                title: "Jogos Educativos e Desafios",
                desc: "Caça-palavras, cruzadinhas, quiz da Copa e muito mais para aprender brincando.",
                bg: "#FDF4FF", border: "#E9D5FF", accent: "#9333EA"
              },
              {
                emoji: "🎖️",
                title: "Certificados, Figurinhas e Bônus",
                desc: "Certificados de mini craque, figurinhas para colorir e materiais surpresa extras.",
                bg: "#FFF1F2", border: "#FECDD3", accent: "#E11D48"
              },
              {
                emoji: "⚡",
                title: "Acesso Imediato + Impressão Ilimitada",
                desc: "Baixe agora e imprima quantas vezes quiser. O arquivo é seu para sempre.",
                bg: "#F0FDF4", border: "#A7F3D0", accent: "#059669"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
                className="rounded-2xl p-6 border transition-all duration-200 cursor-default"
                style={{ background: item.bg, borderColor: item.border }}
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-black text-lg mb-2 font-display" style={{ color: "#111111" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" style={{ color: item.accent }} />
                  <span className="text-xs font-bold" style={{ color: item.accent }}>Incluído no kit</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="py-24 px-4 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">Escolha o seu Kit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card text-card-foreground p-8 rounded-3xl shadow-xl border border-border"
            >
              <h3 className="text-2xl font-bold font-display text-muted-foreground mb-2">⚽ KIT ESSENCIAL</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-xl font-bold">R$</span>
                <span className="text-5xl font-black font-display text-foreground">9,90</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["250+ atividades", "PDFs prontos para imprimir", "Atualizações gratuitas", "Impressão ilimitada"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline"
                className="w-full text-lg h-auto py-4 rounded-xl font-bold border-2"
                data-testid="button-buy-essential"
              >
                QUERO O ESSENCIAL
              </Button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card text-card-foreground p-10 rounded-3xl shadow-2xl border-4 border-primary relative transform md:-translate-y-4"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-black px-6 py-1.5 rounded-full text-sm uppercase tracking-wider whitespace-nowrap shadow-lg flex items-center gap-2">
                🔥 Mais Escolhido
              </div>
              <h3 className="text-2xl font-bold font-display text-accent mb-2">🏆 KIT COMPLETO COPA DOS CRAQUES</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-xl font-bold text-foreground">R$</span>
                <span className="text-6xl font-black font-display text-foreground">17,90</span>
              </div>
              <p className="font-bold text-sm text-secondary mb-4 uppercase">Tudo do Essencial + Extras Exclusivos:</p>
              <ul className="space-y-4 mb-8">
                {["Álbum da Copa da Sala", "Mini Craque Personalizável", "Modelo para figurinhas", "Certificado de mini craque", "Capas exclusivas", "Brindes extras surpresa"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full text-xl h-auto py-5 rounded-xl font-black bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 uppercase tracking-wide border-b-4 border-primary-foreground/20 animate-pulse"
                data-testid="button-buy-complete"
              >
                QUERO O KIT COMPLETO
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-display">Por que pais e professores estão amando?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Menos tempo no celular", i: Zap },
              { t: "Aprendizado divertido", i: Star },
              { t: "Crianças entretidas por horas", i: Clock },
              { t: "Fácil de imprimir", i: Download },
              { t: "Ideal para escolas e casa", i: CheckCircle2 },
              { t: "Desenvolvimento criativo", i: Star },
              { t: "Organização para professores", i: CheckCircle2 }
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <b.i className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg">{b.t}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
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
                text: "Meu filho passou horas longe do celular fazendo as atividades. Nunca pensei que algo tão simples fosse funcionar tão bem. Valeu cada centavo!",
                author: "Camila Ribeiro",
                role: "Mãe de 2 filhos",
                avatar: "https://i.pravatar.cc/150?img=47",
                highlight: "horas longe do celular"
              },
              {
                text: "Os alunos ficaram animados como nunca durante as aulas da Copa. A sala virou um estádio de entusiasmo! Vou usar todo ano.",
                author: "Juliana Ferreira",
                role: "Professora do 2º ano",
                avatar: "https://i.pravatar.cc/150?img=45",
                highlight: "animados como nunca"
              },
              {
                text: "Vale muito mais do que custa. O material é extremamente bem feito, organizado e as crianças amaram o álbum da sala.",
                author: "Patrícia Sousa",
                role: "Pedagoga",
                avatar: "https://i.pravatar.cc/150?img=44",
                highlight: "vale muito mais do que custa"
              },
              {
                text: "Nos dias de jogo foi a salvação! Imprimi na véspera e as crianças ficaram entretidas a tarde toda. Recomendo demais.",
                author: "Mariana Costa",
                role: "Mãe e coordenadora",
                avatar: "https://i.pravatar.cc/150?img=49",
                highlight: "a salvação nos dias de jogo"
              },
              {
                text: "Usei na minha turma de reforço e foi incrível. As crianças pediram para levar para casa. Material de altíssima qualidade.",
                author: "Fernanda Lima",
                role: "Professora particular",
                avatar: "https://i.pravatar.cc/150?img=43",
                highlight: "pediram para levar para casa"
              },
              {
                text: "Comprei o kit completo e não me arrependo. O mini craque personalizável foi o maior sucesso com os meus sobrinhos!",
                author: "Vanessa Almeida",
                role: "Tia e professora",
                avatar: "https://i.pravatar.cc/150?img=41",
                highlight: "maior sucesso"
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
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#FFC72C" }} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base leading-relaxed mb-6" style={{ color: "#333333" }}>
                  "{d.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F0F0F0" }}>
                  <img
                    src={d.avatar}
                    alt={d.author}
                    className="w-11 h-11 rounded-full object-cover border-2"
                    style={{ borderColor: "#E8E8E8" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-11 h-11 rounded-full items-center justify-center font-black text-white text-sm hidden"
                    style={{ background: "#1FAF5A" }}>
                    {d.author[0]}
                  </div>
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
                {["https://i.pravatar.cc/150?img=47","https://i.pravatar.cc/150?img=45","https://i.pravatar.cc/150?img=44"].map((src, i) => (
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
      <section className="py-24 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
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
      <section className="py-32 px-4 bg-accent text-accent-foreground text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-display">
            <span className="text-primary">⚽ Transforme a paixão</span> pela Copa em diversão e aprendizado
          </h2>
          <p className="text-2xl mb-12 text-white/90">Garanta agora o kit que as crianças NÃO querem largar.</p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl h-auto py-6 px-12 rounded-full font-black shadow-2xl shadow-primary/40 uppercase tracking-wide border-b-4 border-primary-foreground/20 animate-pulse w-full md:w-auto"
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
