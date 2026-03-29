import { TypewriterCanvas } from "@/components/typewriterscene";
import { NotesApp } from "@/components/ui/notes-app";
import { PowershellContact } from "@/components/ui/powershell-contact";

export default function ParticleDemoPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Particle text section */}
      <section className="relative h-[90vh] overflow-hidden">
        <TypewriterCanvas />
      </section>

      {/* Notes section */}
      <section className="px-6 pb-20 pt-4 md:px-16">
        <div className="mx-auto max-w-5xl">
          <NotesApp />
        </div>
      </section>

      {/* Contact section */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <PowershellContact />
        </div>
      </section>
    </main>
  );
}
