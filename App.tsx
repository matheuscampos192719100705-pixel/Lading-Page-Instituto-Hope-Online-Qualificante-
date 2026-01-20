
'use client';

import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Quote, 
  Check 
} from 'lucide-react';
import { Logo } from './components/Logo.tsx';
import { CourseCategoryCard } from './components/CourseCard.tsx';
import { WhatsAppFloating } from './components/WhatsAppFloating.tsx';
import { COLORS, COURSE_CATEGORIES, BENEFITS, TESTIMONIALS, WHATSAPP_LINK } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <WhatsAppFloating />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="hover:opacity-80 transition-opacity active:scale-95">
            <Logo className="h-12 md:h-16" />
          </a>
          
          <div className="flex items-center">
            {/* Desktop WhatsApp Button Only */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: COLORS.whatsappGreen }}
              className="hidden lg:flex items-center gap-2 text-white px-6 py-3 rounded-full font-black hover:brightness-105 transition-all shadow-lg shadow-emerald-200 active:scale-95"
            >
              <MessageCircle size={18} fill="currentColor" />
              Chamar no WhatsApp
            </a>

            {/* Mobile WhatsApp Button */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden text-[#25D366] active:scale-90 transition-transform"
            >
              <MessageCircle size={32} fill="currentColor" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-12 translate-x-32 hidden lg:block"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-400/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                style={{ backgroundColor: `${COLORS.primaryGreen}10`, color: COLORS.primaryGreen }} 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-500/20 shadow-sm"
              >
                <Sparkles size={14} />
                Líder em Qualificação Profissional
              </div>
              <h1 style={{ color: COLORS.secondaryBlue }} className="text-5xl md:text-7xl font-[900] mb-8 leading-[1.1] tracking-tight">
                Transforme sua <span style={{ color: COLORS.primaryGreen }}>carreira</span> com quem entende do futuro.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
                Mais do que cursos, entregamos oportunidades reais. No Instituto Hope, você aprende com foco na prática e sai preparado para vencer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 active:scale-95"
                >
                  <MessageCircle size={26} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  GARANTIR MINHA VAGA
                </a>
                <div className="flex flex-col justify-center">
                  <div className="flex -space-x-3 mb-2">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/150?u=${i+20}`} alt="aluno" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">+5k</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-400">Junte-se a milhares de alunos formados.</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-[3rem] -rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://res.cloudinary.com/dkaksx0fi/image/upload/v1768931243/ChatGPT_Image_20_de_jan._de_2026_14_46_14_ugsjci.png" 
                alt="Alunos estudando Instituto Hope" 
                className="rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-[4/5] hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <div className="font-black text-slate-800">100% Seguro</div>
                  <div className="text-sm text-slate-400 font-medium">Matrícula Certificada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-12 border-y border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-black text-slate-400 tracking-tighter uppercase">Parceria Profissional</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter uppercase">Mercado Ativo</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter uppercase">Certificação Válida</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter uppercase">Empregabilidade</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-white relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 style={{ color: COLORS.secondaryBlue }} className="text-3xl md:text-5xl font-[900] mb-6">Por que escolher o Instituto Hope?</h2>
            <p className="text-slate-500 text-lg">Nosso compromisso é com o seu resultado real. Oferecemos o suporte necessário para você decolar.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                <div className="p-8">
                  <div 
                    style={{ color: COLORS.primaryGreen, backgroundColor: `${COLORS.primaryGreen}10` }} 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all"
                  >
                    {benefit.icon}
                  </div>
                  <h3 style={{ color: COLORS.secondaryBlue }} className="text-xl font-extrabold mb-3">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <span style={{ color: COLORS.primaryGreen }} className="text-sm font-black tracking-widest uppercase mb-4 block">Nossas Formações</span>
              <h2 style={{ color: COLORS.secondaryBlue }} className="text-4xl md:text-5xl font-[900] mb-4">
                Encontre o curso perfeito <br />para o seu próximo nível.
              </h2>
              <p className="text-slate-500">Mais de 100 cursos em diversas áreas estratégicas.</p>
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all active:scale-95"
            >
              Consultar lista completa <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSE_CATEGORIES.map((category) => (
              <CourseCategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Special Banner */}
          <div className="mt-20">
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden group shadow-3xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Início imediato. <br />
                    <span className="text-emerald-400">Sem burocracia.</span>
                  </h3>
                  <p className="text-slate-400 text-lg mb-10 max-w-md">
                    Matricule-se agora pelo WhatsApp e comece a estudar em menos de 24 horas. Preços especiais para este mês!
                  </p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
                  >
                    Falar com Consultor <MessageCircle size={22} fill="currentColor" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Suporte 24h", "Acesso Vitalício", "Certificado Válido", "Material Incluso"
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                      <div className="text-emerald-400 mb-2"><CheckCircle size={24} /></div>
                      <span className="text-white font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Professional Style */}
      <section id="como-funciona" className="py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 style={{ color: COLORS.secondaryBlue }} className="text-3xl md:text-5xl font-[900] mb-6">
              Sua jornada para o sucesso
            </h2>
            <p className="text-slate-500 italic">O caminho mais curto entre você e sua nova profissão.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="relative">
              <div className="text-[120px] font-black text-slate-50 absolute -top-24 -left-4 -z-10 select-none">01</div>
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 relative z-10 border border-slate-50">
                <h4 style={{ color: COLORS.secondaryBlue }} className="text-2xl font-black mb-4">Escolha o Curso</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Navegue em nosso catálogo e escolha a área que deseja dominar.</p>
              </div>
            </div>

            <div className="relative md:mt-16">
              <div className="text-[120px] font-black text-slate-50 absolute -top-24 -left-4 -z-10 select-none">02</div>
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 relative z-10 border border-slate-50">
                <h4 style={{ color: COLORS.secondaryBlue }} className="text-2xl font-black mb-4">Fale com Consultor</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Tire dúvidas sobre horários e valores diretamente com nossa equipe via WhatsApp.</p>
              </div>
            </div>

            <div className="relative md:mt-32">
              <div className="text-[120px] font-black text-slate-50 absolute -top-24 -left-4 -z-10 select-none">03</div>
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 relative z-10 border border-slate-50">
                <h4 style={{ color: COLORS.secondaryBlue }} className="text-2xl font-black mb-4">Matrícula e Aula</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Inicie seus estudos e receba todo o material didático necessário.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <Quote size={60} className="text-emerald-500/20 mb-8" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              O que dizem nossos alunos
            </h2>
            <p className="text-slate-400">Resultados reais de quem acreditou no Instituto Hope.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white/[0.03] backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 relative group hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/30" />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-lg">
                      <Check size={14} strokeWidth={4} />
                    </div>
                  </div>
                  <div>
                    <div className="font-black text-xl text-white">{t.name}</div>
                    <div className="text-emerald-400 text-sm font-bold uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-lg italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-[#00A884] rounded-[4rem] p-12 md:p-32 text-center text-white shadow-3xl shadow-emerald-200 overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">
                Dê o primeiro passo <br /> para o seu sucesso.
              </h2>
              <p className="text-xl md:text-2xl text-emerald-50 mb-14 leading-relaxed opacity-90">
                Nossos consultores estão online agora para ajudar você a escolher o melhor caminho. Clique abaixo!
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-5 bg-white text-[#00A884] px-12 py-7 rounded-[2rem] font-black text-2xl hover:bg-slate-50 transition-all hover:scale-105 shadow-2xl shadow-black/20 active:scale-95"
              >
                <MessageCircle size={32} fill="currentColor" />
                CONVERSAR NO WHATSAPP
              </a>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold opacity-75">
                <span className="flex items-center gap-2"><CheckCircle size={18} /> Resposta em minutos</span>
                <span className="flex items-center gap-2"><CheckCircle size={18} /> Vagas Limitadas</span>
                <span className="flex items-center gap-2"><CheckCircle size={18} /> Matrícula Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="inline-block hover:opacity-80 transition-opacity active:scale-95 mb-8">
                <Logo className="h-16" />
              </a>
              <p className="text-slate-500 leading-relaxed text-sm">
                Transformando o futuro através da educação profissional de excelência. Qualificando para o mercado, preparando para a vida.
              </p>
            </div>
            
            <div>
              <h5 style={{ color: COLORS.secondaryBlue }} className="text-lg font-black mb-8 uppercase tracking-widest">Navegação</h5>
              <ul className="space-y-4 font-semibold text-slate-500">
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Ver Cursos</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Área do Aluno</a></li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: COLORS.secondaryBlue }} className="text-lg font-black mb-8 uppercase tracking-widest">Contatos Oficiais</h5>
              <ul className="space-y-6 text-slate-500 font-medium">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600 shrink-0"><Phone size={20} /></div>
                  <span className="text-sm font-bold">+55 (91) 8561-7785</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600 shrink-0"><MessageCircle size={20} fill="currentColor" /></div>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-600 hover:underline">Atendimento WhatsApp</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: COLORS.secondaryBlue }} className="text-lg font-black mb-8 uppercase tracking-widest">Fale Conosco</h5>
              <div className="flex flex-col gap-4 mb-10">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold hover:brightness-105 transition-all shadow-md active:scale-95"
                >
                  <MessageCircle size={24} fill="currentColor" />
                  Iniciar Conversa
                </a>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  Segurança LGPD
                </div>
                <p className="text-[10px] text-slate-400 font-medium uppercase leading-relaxed">
                  Seus dados estão seguros conosco. Toda comunicação é criptografada via WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Instituto Hope - Qualificação Profissional
            </p>
            <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-slate-600">Termos de Uso</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-slate-600">Políticas de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
