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
      <section className="relative pt-20 pb-32 px-4 overflow-hidden bg-secondary text-secondary-foreground text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee7a5342a5c?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 border border-primary/30">
              LANÇAMENTO EXCLUSIVO
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-display drop-shadow-md">
              <span className="text-primary">⚽ O material da Copa</span> que as crianças NÃO querem largar
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
              Mais de 250 atividades prontas para imprimir que unem diversão, criatividade e aprendizado durante a Copa do Mundo.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl h-auto py-5 px-10 rounded-full font-bold shadow-xl shadow-primary/30 w-full md:w-auto uppercase tracking-wide border-b-4 border-primary-foreground/20 animate-pulse"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-cta"
              >
                QUERO GARANTIR AGORA
              </Button>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 text-sm font-semibold text-white/80">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Acesso imediato</div>
              <div className="flex items-center gap-2"><Download className="w-5 h-5 text-primary" /> Arquivos em PDF</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Imprima quantas vezes quiser</div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: "Atividades Infantis", color: "bg-blue-500", icon: Star },
                { title: "Álbum da Sala", color: "bg-green-500", icon: CheckCircle2 },
                { title: "Mini Craque", color: "bg-yellow-500", icon: Zap },
                { title: "Páginas para Colorir", color: "bg-pink-500", icon: Star },
                { title: "Figurinhas", color: "bg-purple-500", icon: Zap },
                { title: "Desafios", color: "bg-orange-500", icon: CheckCircle2 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`${card.color} rounded-xl p-4 flex flex-col items-center justify-center text-white shadow-lg border border-white/20 aspect-square transform hover:-translate-y-2 transition-transform`}
                >
                  <card.icon className="w-8 h-8 mb-2 opacity-80" />
                  <span className="font-bold text-sm text-center leading-tight">{card.title}</span>
                </motion.div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "250+ atividades da Copa", "Atividades de alfabetização", "Matemática temática",
              "Pintura e coordenação", "Liga pontos", "Caça-palavras",
              "Cruzadinhas", "Atividades para colorir", "Desafios divertidos",
              "Quiz da Copa", "Jogos educativos", "Atividades de escrita",
              "Interpretação de texto", "Certificados infantis", "Cartazes decorativos",
              "Bandeiras para imprimir", "Atividades por idade", "Passatempos",
              "Figurinhas para colorir", "Atividades em PDF", "Acesso vitalício", "Atualizações gratuitas"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-display">O que dizem sobre o Kit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Meus alunos ficaram completamente envolvidos nas atividades. Nunca vi a sala tão concentrada!", author: "Juliana", role: "Professora" },
              { text: "As crianças passaram horas longe do celular. Imprimi em casa e foi sucesso absoluto.", author: "Camila", role: "Mãe" },
              { text: "Vale muito mais do que custa. O material é lindo e super educativo.", author: "Patrícia", role: "Pedagoga" },
              { text: "Foi a salvação para os dias de jogos! As crianças se divertiram muito aprendendo.", author: "Mariana", role: "Coordenadora" },
              { text: "Meu filho adorou o álbum da copa e o mini craque, muito capricho no material.", author: "Roberta", role: "Mãe" }
            ].map((d, i) => (
              <div key={i} className="bg-muted/30 p-8 rounded-3xl relative border border-border/50">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg italic text-foreground/80 mb-6">"{d.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {d.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold">{d.author}</h5>
                    <span className="text-sm text-muted-foreground">{d.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
