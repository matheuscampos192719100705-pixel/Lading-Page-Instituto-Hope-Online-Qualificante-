
import React from 'react';
import { 
  GraduationCap, 
  Monitor, 
  Settings, 
  Globe, 
  Briefcase,
  Award,
  Users,
  Lightbulb,
  PlusCircle
} from 'lucide-react';
import { CourseCategory, Benefit, Testimonial } from './types';

// Precise colors extracted from the provided logo
export const COLORS = {
  primaryGreen: '#00A884', // Vibrant Green from "Hope"
  secondaryBlue: '#003366', // Deep Blue from "Instituto"
  accentBlue: '#0056b3',
  whatsappGreen: '#25D366',
  bgLight: '#F8FAFC'
};

export const LOGO_URL = "https://res.cloudinary.com/dkaksx0fi/image/upload/v1768917535/logo_pcqq14.png";

// Updated WhatsApp number as requested: +55 91 8561-7785
export const WHATSAPP_NUMBER = "559185617785"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20do%20Instituto%20Hope!`;

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'prof',
    title: 'Profissionalizantes',
    description: 'Capacitação rápida e prática para inserção imediata em diversos setores do mercado.',
    icon: 'Briefcase',
    courses: [
      'Administração Mercado de Trabalho', 'Elaboração de Currículo', 'Atendente de Farmácia', 
      'Técnicas de Vendas', 'Contabilidade', 'Empreendedorismo', 'Departamento Pessoal', 
      'Marketing Digital', 'Cuidador de Idoso', 'Gestão em RH', 'Instagram para Vendas', 
      'Telemarketing', 'Mídias Sociais', 'Operador de Caixa', 'Agente de Portaria', 
      'Almoxarifado', 'Logística 4.0', 'Supervisão Pedagógica', 'Hotelaria e Turismo', 
      'Conhecimentos Bancários', 'Investimento no Mercado Financeiro', 'Matemática Financeira', 
      'Oratória', 'Jornalismo', 'Auxiliar Corretor de Imóveis', 'Estoque e Faturamento',
      'Auxiliar de Creche', 'Manicure e Pedicure', 'Frentista', 'Fiscal de Loja'
    ]
  },
  {
    id: 'tech',
    title: 'Técnicos e Normativos',
    description: 'Cursos técnicos especializados e treinamentos de normas regulamentadoras essenciais.',
    icon: 'Settings',
    courses: [
      'Operador de Empilhadeira', 'Eletricista', 'NR-10', 'NR-33, NR-34, NR-35', 
      'Solda MIG/MAG, TIG', 'Máquinas Pesadas (Pá Carregadeira, Retroescavadeira)', 
      'TBO – Treinamento Básico Operacional', 'Energia Solar', 'Ponte Rolante', 
      'Análises Clínicas', 'Auxiliar de Necrópsia', 'Socorrista APH', 
      'Atualização em Radiologia', 'Agente Comunitário de Saúde'
    ]
  },
  {
    id: 'it',
    title: 'Tecnologia e TI',
    description: 'Do pacote office básico às linguagens de programação e novas tecnologias.',
    icon: 'Monitor',
    courses: [
      'Cursos de Informática (Excel, Word, etc.)', 'Photoshop & Illustrator', 'Web Design (Wordpress)', 
      'Criação de Games', 'App Android e iOS', 'Blender 3D', 'Programação', 
      'Segurança na Internet', 'Linux', 'Bitcoin e Cripto'
    ]
  },
  {
    id: 'estetica',
    title: 'Estética e Beleza',
    description: 'Transforme seu talento em uma profissão lucrativa no setor de estética.',
    icon: 'PlusCircle',
    courses: [
      'Massagem Modeladora', 'Designer de Cílios & Sobrancelha', 'Maquiagem Profissional', 
      'Manicure e Pedicure', 'Barbeiro Profissional', 'Pacotes de Estética'
    ]
  },
  {
    id: 'languages',
    title: 'Idiomas',
    description: 'Comunicação global para ampliar suas fronteiras profissionais e pessoais.',
    icon: 'Globe',
    courses: [
      'Interactive English', 'Espanhol', 'Libras'
    ]
  },
  {
    id: 'eja',
    title: 'EJA e Complementares',
    description: 'Conclusão de estudos e cursos de suporte acadêmico e pedagógico.',
    icon: 'GraduationCap',
    courses: [
      'EJA (Português, Matemática, Ciências)', 'Disciplinas Preparatórias', 
      'Mediador Escolar', 'Teologia Histórica'
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Foco em Carreira',
    description: 'Conteúdo programático alinhado com o que as empresas buscam hoje.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: 'Certificação Oficial',
    description: 'Diplomas que abrem portas em todo o território nacional.',
    icon: <Award className="w-8 h-8" />
  },
  {
    title: 'Ambiente Moderno',
    description: 'Infraestrutura e suporte pensados para o seu melhor desempenho.',
    icon: <Monitor className="w-8 h-8" />
  },
  {
    title: 'Apoio Pedagógico',
    description: 'Professores experientes prontos para guiar sua jornada.',
    icon: <Lightbulb className="w-8 h-8" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Silva',
    role: 'Aluna de Marketing Digital',
    content: 'O Instituto Hope superou todas as minhas expectativas. O suporte via WhatsApp é sensacional e o curso me ajudou a conseguir meu primeiro emprego na área.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Carlos Oliveira',
    role: 'Técnico em Logística',
    content: 'Os cursos técnicos são muito objetivos e práticos. Já estou trabalhando como auxiliar de logística graças ao certificado do Hope.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];
