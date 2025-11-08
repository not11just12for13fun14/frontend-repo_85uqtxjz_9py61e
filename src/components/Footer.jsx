export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} SovoLink Technologies Pvt. Ltd. Made in India.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Security</a>
        </div>
      </div>
    </footer>
  );
}
