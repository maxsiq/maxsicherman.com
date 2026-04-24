export default function Work() {
  return (
    <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
        Work
      </h1>
      <p className="mt-3 text-[var(--muted)]">
        I majored in EE, then pivoted to embedded software on Amazon's Echo
        Show. From there I moved into web dev at Cisco and Splunk, then was a
        SWE at a Series B startup called State Affairs. Starting soon as a
        founding engineer at Induction.ai.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-[var(--accent)] underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        Resume
      </a>
    </div>
  );
}
