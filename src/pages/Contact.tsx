import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Youtube } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

export default function ContactPage({ lang }: Props) {
  const isEn = lang === 'en';
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(isEn ? 'Please fill in all required fields.' : 'Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setSubmitted(true);
    setError('');
  };

  const t = isEn ? {
    title: 'Contact Us',
    subtitle: 'Have questions or proposals? Reach out through our official channels below.',
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_subject: 'Subject',
    form_message: 'Message',
    send_button: 'Send Message',
    success_title: 'Message Sent!',
    success_desc: 'Thank you for reaching out. We will respond within 24-48 business hours.',
    channels_title: 'Official Channels',
    telegram: 'Chat with us on Telegram',
    telegram_url: 'https://t.me/elynova_official',
    youtube: 'YouTube Official Channel',
    youtube_url: 'https://www.youtube.com/@Elynova_official',
    email_support: 'Support Email',
    email_addr: 'jokalou51@gmail.com',
    spam_note: 'This form uses basic anti-spam protection. Please do not share private keys, seed phrases, or sensitive credentials.',
    telegram_sub: 'Message us anytime · @elynova_official',
    youtube_sub: 'Watch our videos · @Elynova_official',
    email_sub: 'Direct support · Response within 24h',
    urgent_text: 'For urgent matters, message us directly on Telegram or write to jokalou51@gmail.com. Our team responds quickly.',
    urgent_highlight: '💬 You can also message us directly on Telegram — we respond fast!',
  } : {
    title: 'Nous Contacter',
    subtitle: 'Des questions ou propositions ? Contactez-nous via nos canaux officiels ci-dessous.',
    form_name: 'Nom Complet',
    form_email: 'Adresse Email',
    form_subject: 'Sujet',
    form_message: 'Message',
    send_button: 'Envoyer le Message',
    success_title: 'Message Envoyé !',
    success_desc: 'Merci de nous avoir contactés. Nous répondrons sous 24-48 heures ouvrables.',
    channels_title: 'Canaux Officiels',
    telegram: 'Discutez-nous sur Telegram',
    telegram_url: 'https://t.me/elynova_official',
    youtube: 'Chaîne YouTube Officielle',
    youtube_url: 'https://www.youtube.com/@Elynova_official',
    email_support: 'Email de Support',
    email_addr: 'jokalou51@gmail.com',
    spam_note: 'Ce formulaire utilise une protection anti-spam basique. Ne partagez pas vos clés privées, phrases semences ou identifiants sensibles.',
    telegram_sub: 'Messagez-nous à tout moment · @elynova_official',
    youtube_sub: 'Regardez nos vidéos · @Elynova_official',
    email_sub: 'Support direct · Réponse sous 24h',
    urgent_text: 'Pour les urgences, envoyez-nous un message directement sur Telegram ou écrivez à jokalou51@gmail.com. Notre équipe répond rapidement.',
    urgent_highlight: '💬 Vous pouvez aussi nous envoyer un message directement sur Telegram — nous répondons rapidement !',
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h1>
        <p className="text-lg text-[#475467]">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="card-white p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#172033] mb-2">{t.success_title}</h3>
              <p className="text-[#475467]">{t.success_desc}</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-6 text-[#1746D2] font-semibold hover:underline"
              >
                {isEn ? 'Send another message' : 'Envoyer un autre message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#172033] mb-2">{t.form_name} *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] focus:outline-none focus:border-[#1746D2] transition-colors"
                  placeholder={isEn ? 'John Doe' : 'Jean Dupont'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#172033] mb-2">{t.form_email} *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] focus:outline-none focus:border-[#1746D2] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#172033] mb-2">{t.form_subject}</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] focus:outline-none focus:border-[#1746D2] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#172033] mb-2">{t.form_message} *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] focus:outline-none focus:border-[#1746D2] transition-colors resize-none"
                  placeholder={isEn ? 'Your message...' : 'Votre message...'}
                />
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}
              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                {t.send_button}
              </button>
              <p className="text-xs text-slate-400 text-center">{t.spam_note}</p>
            </form>
          )}
        </div>

        {/* Contact Channels */}
        <div className="space-y-6">
          <div className="card-white p-6">
            <h3 className="font-bold text-[#172033] mb-6">{t.channels_title}</h3>
            <div className="space-y-4">
              {/* Telegram */}
              <a href={t.telegram_url} target="_blank" rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Send className="w-6 h-6 text-[#24A1DE]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-semibold text-[#172033]">{t.telegram}</span>
                  <span className="text-sm text-[#475467]">{t.telegram_sub}</span>
                </div>
                <span className="text-[#24A1DE] opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
              </a>

              {/* YouTube */}
              <a href={t.youtube_url} target="_blank" rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-red-200 bg-red-50 hover:bg-red-100 hover:border-red-300 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Youtube className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-semibold text-[#172033]">{t.youtube}</span>
                  <span className="text-sm text-[#475467]">{t.youtube_sub}</span>
                </div>
                <span className="text-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
              </a>

              {/* Email */}
              <a href={`mailto:${t.email_addr}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-pink-200 bg-pink-50 hover:bg-pink-100 hover:border-pink-300 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-6 h-6 text-[#D12B9A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-semibold text-[#172033]">{t.email_support}</span>
                  <span className="text-sm text-[#475467]">{t.email_sub}</span>
                  <span className="text-xs text-[#D12B9A] font-medium">{t.email_addr}</span>
                </div>
                <span className="text-[#D12B9A] opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
              </a>
            </div>
          </div>

          <div className="bg-[#EFF4FF]/50 rounded-2xl p-6">
            <p className="text-sm text-[#475467]">
              {t.urgent_text}
              <br />
              <span className="font-semibold text-[#24A1DE]">{t.urgent_highlight}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
