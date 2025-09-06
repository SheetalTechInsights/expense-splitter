const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-600 text-xs py-3 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Built with ❤️ by{" "}
          <span className="font-semibold text-gray-800">Sheetal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
