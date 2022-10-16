
const Filter = ({
  onSort,
  onSelectCategory,
  onSearch,
  selectedCategory,
  sort,
  searchValue,
  categories
}) => {

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          جستجو
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          value={searchValue}
          onChange={onSearch}
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          مرتب سازی
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            یک دسته بندی را انتخاب کنید
          </option>
          <option
            className="bg-slate-500 text-slate-300"
            value="latest"
          >
            آخرین
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            اولین
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          دسته بندی
        </label>
        <select
          name="products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={selectedCategory}
          onChange={onSelectCategory}>
          <option className="bg-slate-500 text-slate-300" value=""
          >
            همه
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
