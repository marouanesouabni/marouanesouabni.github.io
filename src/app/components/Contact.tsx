import { useState } from "react";

const types = ["Freelance", "Internship", "Full-time", "Just say hi"];
const contactEmail = "sbnmarouan@gmail.com";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [type, setType] = useState("Internship");
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
    setStatus("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`${type} inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Looking for: ${type}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the message ready to send.");
  };

  return (
    <section id="contact" className="relative py-28 px-8 lg:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-6">
              <span>SECTION 06</span>
              <span className="h-px w-12 bg-bone/15" />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-bone mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.95, fontWeight: 400 }}>
              Let's <br />
              <span className="italic text-amber">work</span> <br />
              together.
            </h2>
            <p className="text-bone/55 max-w-md mb-10">
              Have a project in mind, an internship opportunity, or just want to nerd out about TypeScript? I read everything.
            </p>

            <div className="space-y-3 text-sm">
              <a href={`mailto:${contactEmail}`} className="flex items-center justify-between border border-bone/10 rounded-sm px-5 py-4 hover:border-amber group transition-colors">
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-bone/40 mb-1">EMAIL</div>
                  <div className="text-bone">{contactEmail}</div>
                </div>
                <span className="text-bone/40 group-hover:text-amber group-hover:rotate-45 transition-all">→</span>
              </a>
              <a href="./Marouane_Souabni_MERN_Internship_CV.pdf" className="flex items-center justify-between border border-bone/10 rounded-sm px-5 py-4 hover:border-amber group transition-colors">
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-bone/40 mb-1">VIEW CV</div>
                  <div className="text-bone">Download résumé (PDF)</div>
                </div>
                <span className="text-bone/40 group-hover:text-amber group-hover:rotate-45 transition-all">→</span>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-bone/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber"></span>
              </span>
              Available for internships &amp; projects
            </div>
          </div>

          <form className="lg:col-span-7 lg:pl-12 lg:border-l border-bone/10" onSubmit={handleSubmit}>
            <div className="mb-8">
              <div className="text-[10px] tracking-[0.25em] text-bone/40 mb-3">WHAT ARE YOU LOOKING FOR?</div>
              <div className="flex flex-wrap gap-2">
                {types.map(t => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all ${
                      type === t
                        ? "bg-amber text-[#0c0c0c] border-amber"
                        : "border-bone/15 text-bone/65 hover:border-bone/40 hover:text-bone"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <Field
                label="YOUR NAME"
                placeholder="Jane Doe"
                value={form.name}
                onChange={value => updateField("name", value)}
                required
              />
              <Field
                label="EMAIL"
                placeholder="jane@company.com"
                type="email"
                value={form.email}
                onChange={value => updateField("email", value)}
                required
              />
            </div>
            <Field
              label="MESSAGE"
              placeholder="Tell me about your project or opportunity…"
              value={form.message}
              onChange={value => updateField("message", value)}
              textarea
              required
            />

            <button type="submit" className="mt-8 group w-full inline-flex items-center justify-center gap-3 bg-amber hover:bg-bone text-[#0c0c0c] rounded-full py-4 transition-colors">
              <span>Send message</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <div className="mt-3 min-h-4 text-xs text-bone/40 text-center" aria-live="polite">
              {status || "Typical reply within 24 hours."}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

function Field({ label, placeholder, type = "text", textarea = false, value, onChange, required = false }: FieldProps) {
  return (
    <label className="block">
      <div className="text-[10px] tracking-[0.25em] text-bone/40 mb-2">{label}</div>
      {textarea ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={event => onChange(event.target.value)}
          required={required}
          className="w-full bg-transparent border border-bone/10 rounded-sm px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-amber transition-colors"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={event => onChange(event.target.value)}
          required={required}
          className="w-full bg-transparent border border-bone/10 rounded-sm px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-amber transition-colors"
        />
      )}
    </label>
  );
}
