import { TypewriterCanvas } from "@/components/typewriterscene";
import { NotesApp } from "@/components/ui/notes-app";
import { PowershellContact } from "@/components/ui/powershell-contact";
import { PhotoCube } from "@/components/ui/photo-cube";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      {/* Particle text section */}
      <section className="relative h-[70vh] overflow-hidden">
        <TypewriterCanvas />
      </section>

      {/* Theme hint */}
      <div className="px-6 pb-12 text-center text-m text-muted-foreground md:px-18">
        click d to toggle between light and night mode
      </div>

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

       {/* extra */}
       <div className="px-6 pb-12 text-center text-m text-muted-foreground md:px-18">
        <i>i sometimes take photos too</i>
      </div>

      

      {/* Photo cube */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <PhotoCube />
        </div>
      </section>
    </main>
  );
}
