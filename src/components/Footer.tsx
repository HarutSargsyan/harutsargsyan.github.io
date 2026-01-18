type FooterProps = {
  name?: string;
};

const Footer = ({ name }: FooterProps) =>
  name ? (
    <footer className="pb-10 text-center text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
      © {new Date().getFullYear()} {name}
    </footer>
  ) : null;

export default Footer;
