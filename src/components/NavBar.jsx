const NavBar = ({products}) => {
  return (
      <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
        <h1 className="md:text-xl text-sm font-bold text-slate-300">
          انبار داری
        </h1>
        <span className="flex items-center justify-center p-2 w-auto h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300 font-bold">
          {products.length}
        </span>
      </div>
  );
};

export default NavBar;
