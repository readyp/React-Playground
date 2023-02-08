function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-8 bg-slate-300 p-2">
      <p className="text-center">Copyright &copy; Recipes {currentYear}</p>
    </footer>
  );
}

export default Footer;
