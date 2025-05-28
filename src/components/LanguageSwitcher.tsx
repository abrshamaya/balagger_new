import { useTranslation } from 'react-i18next';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const nextLang = currentLang === 'en' ? 'he' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="language-mode"
        checked={i18n.language === 'he'}
        onCheckedChange={toggleLanguage}
      />
      <Label htmlFor="language-mode" className="text-green-600">
        {i18n.language === 'en' ? 'EN' : 'עב'}
      </Label>
    </div>
  );
} 