import { Sparkles } from "lucide-react";

export function ComingSoonBadge() {
  return (
    <div className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/30 shadow-lg animate-pulse">
      <Sparkles className="w-6 h-6 text-primary" />
      <span className="text-xl font-bold text-primary tracking-wide">
        COMING SOON
      </span>
      <Sparkles className="w-6 h-6 text-primary" />
    </div>
  );
}
