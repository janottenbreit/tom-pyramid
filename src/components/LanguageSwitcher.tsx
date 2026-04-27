import { useLanguage } from "@/lib/LanguageContext";
import { SUPPORTED_LANGUAGES, type Language } from "@/i18n";

const LABELS: Record<Language, string> = {
  de: "DE",
  en: "EN",
};

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.languageLabel}
      className="flex items-center gap-1 px-2 py-1 rounded-full border border-transparent hover:border-border/50 transition-colors duration-200"
    >
      {SUPPORTED_LANGUAGES.map((code, i) => {
        const isActive = code === lang;
        return (
          <span key={code} className="flex items-center">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="mx-1 text-muted-foreground/40 font-mono-brand text-[11px]"
              >
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={isActive}
              aria-label={LABELS[code]}
              className={`font-mono-brand text-[11px] tracking-wide px-1.5 py-1 rounded transition-colors duration-200 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {LABELS[code]}
            </button>
          </span>
        );
      })}
    </div>
  );
}
