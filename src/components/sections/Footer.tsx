import { portfolio } from "@/data/portfolio";

export function Footer() {
  const { personal, footer } = portfolio;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {footer.copyrightYear} {personal.name}
        </p>
        <p>{footer.builtWith}</p>
      </div>
    </footer>
  );
}
