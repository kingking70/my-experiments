'use client';

import { useState } from 'react';
import { Search, PenLine, PanelLeft, Folder, FolderOpen, Pin } from 'lucide-react';
import { folders, allNotes } from './notes';
import type { Note } from './notes/types';

function FolderIcon({ selected }: { selected: boolean }) {
  const cls = `h-4 w-4 shrink-0 ${selected ? 'text-amber-500' : 'text-amber-400'}`;
  return selected ? <FolderOpen className={cls} /> : <Folder className={cls} />;
}

function NoteRow({
  note,
  selected,
  onSelect,
}: {
  note: Note;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full px-3 py-2.5 text-left transition-colors ${
        selected
          ? 'bg-amber-400/20 dark:bg-amber-400/15'
          : 'hover:bg-black/5 dark:hover:bg-white/5'
      }`}
    >
      <p className="truncate text-sm font-medium">{note.title}</p>
      <p className="truncate text-xs text-muted-foreground">{note.subtitle}</p>
    </button>
  );
}

export function NotesApp() {
  const [selectedFolder, setSelectedFolder] = useState('notes');
  const [selectedNote, setSelectedNote] = useState<Note | null>(allNotes[0] ?? null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const folderNotes = allNotes.filter((n) => n.folder === selectedFolder);
  const pinned = folderNotes.filter((n) => n.pinned);
  const unpinned = folderNotes.filter((n) => !n.pinned);
  const folderCount = (id: string) => allNotes.filter((n) => n.folder === id).length;

  return (
    <div className="flex h-[780px] overflow-hidden rounded-xl border border-border/60 shadow-2xl shadow-black/20">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="flex w-52 shrink-0 flex-col border-r border-border/60 bg-[#f0efe9] dark:bg-[#2c2c2e]">
          <div className="flex h-11 items-center gap-2 px-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-1.5 pb-3">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => {
                  setSelectedFolder(folder.id);
                  setSelectedNote(null);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm transition-colors ${
                  selectedFolder === folder.id
                    ? 'bg-amber-400/30 font-medium text-foreground dark:bg-amber-400/20'
                    : 'text-foreground/80 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FolderIcon selected={selectedFolder === folder.id} />
                  {folder.name}
                </span>
                <span className="text-xs text-muted-foreground">{folderCount(folder.id)}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Notes list */}
      <div className="flex w-64 shrink-0 flex-col border-r border-border/60 bg-[#f7f6f1] dark:bg-[#242426]">
        <div className="flex h-11 items-center justify-between border-b border-border/40 px-3">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="rounded p-1 text-muted-foreground transition-colors hover:bg-black/10 dark:hover:bg-white/10"
          >
            <PanelLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold">
            {folders.find((f) => f.id === selectedFolder)?.name}
          </span>
          <button className="rounded p-1 text-muted-foreground/40" disabled>
            <PenLine className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {folderNotes.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <p className="text-sm font-medium text-muted-foreground">No Notes</p>
              <p className="max-w-[160px] text-xs text-muted-foreground/60">
                Notes you create will appear here
              </p>
            </div>
          ) : (
            <>
              {pinned.length > 0 && (
                <div>
                  <p className="px-3 pb-1 pt-3 text-xs font-semibold text-muted-foreground">
                    Pinned
                  </p>
                  {pinned.map((note) => (
                    <NoteRow
                      key={note.id}
                      note={note}
                      selected={selectedNote?.id === note.id}
                      onSelect={() => setSelectedNote(note)}
                    />
                  ))}
                </div>
              )}
              {unpinned.length > 0 && (
                <div>
                  {pinned.length > 0 && (
                    <p className="px-3 pb-1 pt-3 text-xs font-semibold text-muted-foreground">
                      Notes
                    </p>
                  )}
                  {unpinned.map((note) => (
                    <NoteRow
                      key={note.id}
                      note={note}
                      selected={selectedNote?.id === note.id}
                      onSelect={() => setSelectedNote(note)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Note viewer */}
      <div className="flex flex-1 flex-col bg-[#faf9f5] dark:bg-[#1c1c1e]">
        <div className="flex h-11 items-center justify-end border-b border-border/40 px-4">
          <div className="flex items-center gap-1 rounded-lg bg-black/5 px-2.5 py-1 dark:bg-white/5">
            <Search className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Search</span>
          </div>
        </div>

        {selectedNote ? (
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">{selectedNote.title}</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{selectedNote.subtitle}</p>
              </div>
              {selectedNote.pinned && (
                <Pin className="mt-1 h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
              )}
            </div>
            {selectedNote.body && (
              <div className="mt-6 text-sm leading-relaxed">
                {selectedNote.body.startsWith('http') ? (
                  <a
                    href={selectedNote.body}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline underline-offset-2 hover:text-blue-400"
                  >
                    {selectedNote.body}
                  </a>
                ) : (
                  <p className="whitespace-pre-line">{selectedNote.body}</p>
                )}
                {selectedNote.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={selectedNote.image} alt="" className="mt-4 w-full rounded-xl" />
                )}
              </div>
            )}
            {selectedNote.images && selectedNote.images.length > 0 && (
              <div className="mt-6 flex flex-col gap-4">
                {selectedNote.images.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="" className="w-full rounded-xl" />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-sm text-muted-foreground/40">Select a note to view it</p>
          </div>
        )}
      </div>
    </div>
  );
}
