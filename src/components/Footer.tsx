const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-4 mt-10 text-center text-sm border-t">
      <p>© 2025 Plataforma Nôa Esperanza · Todos os direitos reservados</p>
      <p>
        Desenvolvido com ética, escuta e cuidado ·{' '}
        <a
          href="https://www.noaesperanza.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          www.noaesperanza.org
        </a>
      </p>
    </footer>
  );
};

export default Footer;
