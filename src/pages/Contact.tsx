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
    telegram: 'Telegram Official Channel',
    telegram_url: 'https://t.me/elynova_official',
    youtube: 'YouTube Official Channel',
    youtube_url: 'https://www.youtube.com/@Elynova_official',
    email_support: 'Support Email',
    email_addr: 'jokalou51@gmail.com',
    spam_note: 'This form uses basic anti-spam protection. Please do not share private keys, seed phrases, or sensitive credentials.',
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
    telegram: 'Canal Telegram Officiel',
    telegram_url: 'https://t.me/elynova_official',
    youtube: 'Chaîne YouTube Officielle',
    youtube_url: 'https://www.youtube.com/@Elynova_official',
    email_support: 'Email de Support',
    email_addr: 'jokalou51@gmail.com',
    spam_note: 'Ce formulaire utilise une protection anti-spam basique. Ne partagez pas vos clés privées, phrases semences ou identifiants sensibles.',
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
            <div className="space-y-5">
              <a href={t.telegram_url} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-500/10 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Send className="w-5 h-5 text-[#24A1DE]" />
                </div>
                <span className="font-medium text-[#172033] text-sm">{t.telegram}</span>
              </a>

              <a href={t.youtube_url} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-red-500/10 hover:text-red-600 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Youtube className="w-5 h-5 text-[#FF0000]" />
                </div>
                <span className="font-medium text-[#172033] text-sm">{t.youtube}</span>
              </a>

              <a href={`mailto:${t.email_addr}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-pink-500/10 hover:text-[#D12B9A] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#1746D2]" />
                </div>
                <div>
                  <span className="block font-medium text-[#172033] text-sm">{t.email_support}</span>
                  <span className="text-xs text-[#1746D2]">{t.email_addr}</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#EFF4FF]/50 rounded-2xl p-6">
            <p className="text-sm text-[#475467]">
              {isEn
                ? 'For urgent matters, join our Telegram channel or write directly to jokalou51@gmail.com.'
                : 'Pour les urgences, rejoignez notre canal Telegram ou écrivez directement à jokalou51@gmail.com.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
