function Footer() {
  return (
    <footer className="bg-blue-500 p-4 b-0">
      <div className="w-full text-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Tutorijal
        </p>
      </div>
    </footer>
  );
}

export default Footer;
