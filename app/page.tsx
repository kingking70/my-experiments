import { DemoOne } from "@/components/demo";
import { NotesApp } from "@/components/ui/notes-app";
import { PowershellContact } from "@/components/ui/powershell-contact";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      {/* Particle text section */}
      <section className="relative h-[70vh] overflow-hidden">
        <DemoOne />
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

      {/* Theme hint */}
      <div className="px-6 pb-12 text-center text-xs text-muted-foreground md:px-18">
        click d to toggle between light and night mode
      </div>
    </main>
  );
}
