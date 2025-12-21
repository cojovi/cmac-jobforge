import { MainLayout, PageHeader } from "@/components/layout";
import { Ruler } from "lucide-react";
import { ComingSoonBadge } from "@/components/shared/ComingSoonBadge";

export default function Measurements() {
  return (
    <MainLayout>
      <div className="animate-fade-in">
        <PageHeader title="Measurements" />

        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Measurements</h2>
            <p className="text-muted-foreground max-w-md">
              Create and manage roof measurements using Cody's Badass satellite imagery and AI Technology
            </p>
            <ComingSoonBadge />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
