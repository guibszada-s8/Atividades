import { useState, useEffect } from "react";
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
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 border" style={{ background: "#F0FDF6", color: "#1FAF5A", borderColor: "#A7F3C8" }}>
              ⚽ ATIVIDADES PRONTAS PARA IMPRIMIR
            </span>

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

          {/* Video placeholder — 9:16 vertical */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto mb-7"
            style={{ width: "min(100%, 280px)" }}
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "9/16",
                background: "linear-gradient(160deg, #0D2818 0%, #1FAF5A22 50%, #0D2818 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              {/* Phone notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full" style={{ background: "rgba(0,0,0,0.35)" }} />

              {/* Soccer ball watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                <svg viewBox="0 0 100 100" className="w-48 h-48" fill="none">
                  <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2"/>
                  <polygon points="50,20 62,38 80,38 68,52 74,70 50,58 26,70 32,52 20,38 38,38" fill="white"/>
                </svg>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #1FAF5A, #17913F)",
                    boxShadow: "0 8px 30px rgba(31,175,90,0.5)"
                  }}
                >
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </motion.div>
                <div className="text-center px-4">
                  <p className="text-white font-bold text-sm opacity-90">Vídeo demonstrativo</p>
                  <p className="text-white/50 text-xs mt-1">Veja o kit completo</p>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(31,175,90,0.25)", color: "#4ADE80", border: "1px solid rgba(31,175,90,0.3)" }}>
                  ⚽ Kit Copa dos Craques
                </span>
              </div>
            </div>
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
              className="w-full sm:w-auto text-lg font-black px-10 py-5 rounded-2xl uppercase tracking-wide transition-all duration-200 mb-5"
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
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-display">📦 Veja tudo que você recebe</h2>
            <p className="text-xl text-muted-foreground">Um material completo para entreter e ensinar</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "250+ atividades da Copa prontas para imprimir",
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
