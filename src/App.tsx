/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MapPin, Scale, Clock, Globe, Heart, Shield, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import React from "react";

const NAV_LINKS = [
  { name: "Αρχική", href: "#" },
  { name: "Υπηρεσίες", href: "#services" },
  { name: "Δίκαιο & Οικονομικά", href: "#advantage" },
  { name: "Κοινωνική Μέριμνα", href: "#values" },
  { name: "Επικοινωνία", href: "#contact" },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass h-20 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-slate-900">Ασημίνα Θ. Μπαρζού</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold leading-none mt-1">Δικήγορος Πάτρα | MSc ΠΑΠΕΙ</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="tel:6947885354" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            <Phone size={16} />
            6947885354
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider mx-auto md:mx-0">
              <Scale size={14} />
              Εξειδικευμένη Προστασία στην Πάτρα
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-slate-900 font-bold max-w-4xl">
              Νομική Προστασία με <span className="italic font-normal text-slate-600 underline decoration-slate-200 underline-offset-8">Σύγχρονη Οικονομική</span> Προσέγγιση.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Συνδυάζοντας την ακαδημαϊκή εξειδίκευση στο Δίκαιο και τα Οικονομικά με την ανθρώπινη προσέγγιση, προσφέρουμε λύσεις που καλύπτουν κάθε νομική ανάγκη στην Αχαΐα.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="tel:6947885354" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 flex items-center gap-3">
                <Phone size={20} />
                Άμεση Κλήση (24/7)
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Ανδρέα+Παπανδρέου+6,+Πάτρα" target="_blank" rel="noreferrer" className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3">
                <MapPin size={20} />
                Οδηγίες Γραφείου
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MSc & Advantage Section */}
      <section id="advantage" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl text-slate-900">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Το Πλεονέκτημα "Law & Economics"</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Ως απόφοιτη του MSc στο "Δίκαιο και Οικονομικά", η Ασημίνα Μπαρζού αναλύει τα νομικά ζητήματα μέσα από ένα σύγχρονο πρίσμα, εξασφαλίζοντας όχι μόνο τη νομική θωράκιση αλλά και την οικονομικά αποδοτική επίλυση των υποθέσεών σας.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Στρατηγική ανάλυση κόστους-οφέλους σε δικαστικές διαμάχες",
                  "Εξειδίκευση σε υποθέσεις με σύνθετο οικονομικό υπόβαθρο",
                  "Ολοκληρωμένη διαχείριση αστικών και εμπορικών διαφορών",
                  "Εστίαση στην αποτελεσματικότητα και την ταχύτητα"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-semibold p-4 bg-slate-50 rounded-xl border border-slate-100 transition-hover hover:border-slate-300">
                    <ChevronRight size={18} className="text-slate-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10 space-y-8">
                 <Shield size={48} className="text-slate-400" />
                 <h3 className="text-3xl lg:text-4xl font-serif italic font-medium leading-tight">
                   "Η επιστημονική εξειδίκευση συναντά την ανθρώπινη ενσυναίσθηση για μια δίκαιη νομική προστασία."
                 </h3>
                 <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                    <div>
                      <p className="text-xl font-bold">Ασημίνα Θ. Μπαρζού</p>
                      <p className="text-slate-400 font-medium">Δικηγόρος Πάτρα | MSc ΠΑΠΕΙ</p>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                      <Scale size={20} />
                    </div>
                 </div>
               </div>
               {/* Decorative Gradient Overlay */}
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Υπηρεσίες & Εξιδίκευση</h2>
            <p className="text-slate-600 leading-relaxed text-lg lg:text-xl">
              Εστιασμένη στις ανάγκες της σύγχρονης κοινωνίας στην Αχαΐα, παρέχουμε νομικές υπηρεσίες με έμφαση στα αποτελέσματα.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe size={32} />}
              title="Δίκαιο Αλλοδαπών"
              description="Εξειδικευμένη διαχείριση αδειών διαμονής, Visa, και νομική υποστήριξη για την ασφαλή παραμονή και ένταξη στη χώρα."
              tags={["Άδειες Διαμονής", "Visa", "Ιθαγένεια"]}
              highlight="Δίκαιο Αλλοδαπών Πάτρα"
            />
            <ServiceCard 
              icon={<Scale size={32} />}
              title="Αστικό Δίκαιο"
              description="Ασφαλιστικά μέτρα, Δικαστική συμπαράσταση και εμπράγματο δίκαιο με έμφαση στην προστασία της περιουσίας και της οικογένειας."
              tags={["Ασφαλιστικά Μέτρα", "Δικαστική Συμπαράσταση"]}
            />
            <ServiceCard 
              icon={<Briefcase size={32} />}
              title="Ποινικό Δίκαιο"
              description="Υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας, με απόλυτη εχεμύθεια και στρατηγικό σχεδιασμό υπεράσπισης."
              tags={["Υπεράσπιση", "Παράσταση Πολιτικής Αγωγής"]}
            />
          </div>
        </div>
      </section>

      {/* Social Responsibility & 24/7 */}
      <section id="values" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Κοινωνική Μέριμνα
              </div>
              <h2 className="text-5xl font-serif font-bold leading-tight">Δίπλα σας, <br/><span className="text-slate-400 italic">24 Ώρες το 24ωρο.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Πιστεύουμε στη νομική προστασία χωρίς εμπόδια. Είμαστε διαθέσιμοι οποιαδήποτε στιγμή μας χρειαστείτε.
              </p>
              
              <div className="grid gap-10 pt-4">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">24/7 Διαθεσιμότητα</h4>
                    <p className="text-slate-400 leading-relaxed">Άμεση απόκριση σε επείγοντα περιστατικά στην περιοχή της Πάτρας, οποιαδήποτε ώρα.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Στήριξη Πολυτέκνων</h4>
                    <p className="text-slate-400 leading-relaxed">Ειδική τιμολογιακή πολιτική και προνόμια για πολύτεκνες οικογένειες, ως ένδειξη κοινωνικής ευθύνης.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative flex items-center justify-center py-20 md:py-0">
              <div className="w-full aspect-square border border-white/5 rounded-full absolute animate-[pulse_4s_infinite]" />
              <div className="w-4/5 aspect-square border border-white/10 rounded-full absolute" />
              <div className="text-center relative z-20 space-y-4">
                <div className="text-[10rem] md:text-[14rem] font-serif italic text-white/5 leading-none select-none">24h</div>
                <div className="text-sm tracking-[0.6em] uppercase font-bold text-slate-500">Προστασία & Εμπιστοσύνη</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto shadow-2xl rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 bg-slate-900 text-white space-y-12">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">Επικοινωνία</h3>
                  <p className="text-slate-400">Είμαστε εδώ για να σας βοηθήσουμε. Καλέστε μας ή επισκεφθείτε το γραφείο μας στην Πάτρα.</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Τηλέφωνο</p>
                      <a href="tel:6947885354" className="text-2xl font-bold hover:text-slate-300">694 788 5354</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Διεύθυνση</p>
                      <p className="text-xl font-bold leading-tight">Ανδρέα Παπανδρέου 6,<br/>Πάτρα (Ζαρουχλέικα)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12 bg-slate-50 flex flex-col justify-center text-center md:text-left">
                 <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8 underline decoration-slate-200 underline-offset-8">Τοπική Παρουσία</h4>
                 <div className="space-y-6 text-slate-600">
                    <p className="leading-relaxed font-medium">
                       Το γραφείο μας βρίσκεται σε κομβικό σημείο στα <strong>Ζαρουχλέικα</strong>, προσφέροντας εύκολη πρόσβαση στους κατοίκους της Αχαΐας.
                    </p>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                       <p className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 font-bold">
                         <span className="text-slate-400 text-[10px] uppercase tracking-widest">Διαθεσιμότητα</span>
                         <span className="text-slate-900">24 / 7 / 365</span>
                       </p>
                       <p className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 font-bold">
                         <span className="text-slate-400 text-[10px] uppercase tracking-widest">Περιοχή</span>
                         <span className="text-slate-900 text-right">Πάτρα & Αχαΐα</span>
                       </p>
                    </div>
                    <div className="pt-8 w-full">
                      <a href="tel:6947885354" className="block w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-center shadow-lg hover:shadow-slate-300 transition-all">
                        Άμεση Επικοινωνία
                      </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="font-serif text-2xl font-bold text-slate-900">Ασημίνα Θ. Μπαρζού</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Δικήγορος Πάτρα | MSc Δίκαιο & Οικονομικά</span>
             </div>
             
             <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
               <a href="#" className="hover:text-slate-900 transition-colors">Αρχική</a>
               <a href="#services" className="hover:text-slate-900 transition-colors">Υπηρεσίες</a>
               <a href="#advantage" className="hover:text-slate-900 transition-colors">Πλεονέκτημα</a>
               <a href="#contact" className="hover:text-slate-900 transition-colors">Επικοινωνία</a>
             </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Ασημίνα Μπαρζού | Δικηγορικό Γραφείο Πάτρα</p>
            <p className="mt-2 text-slate-300">Σχεδιασμός με έμφαση στον άνθρωπο και την επιστήμη.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, tags, highlight = "" }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
    >
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-8 font-medium">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-[9px] uppercase tracking-wider font-bold text-slate-500 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
      {highlight && (
        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-4">
           {highlight}
        </div>
      )}
      {/* Subtle background decoration */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-1000 -z-1" />
    </motion.div>
  );
}
