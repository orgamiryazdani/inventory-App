import { useState } from "react";
import { toast } from "react-toastify";

const CategoryForm = ({ setCategories, isShow, setIsShow }) => {


  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    if (categoryFormData.title === "") {
      toast('لطفا عنوان را وارد کنید');
      return;
    } else {
      const newCategory = {
        ...categoryFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      };
      setCategories((prevState) => [...prevState, newCategory]);
      setCategoryFormData({ title: "", description: "" });
      toast.success('دسته بندی جدید اضافه شد')
    }
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          اضافه کردن دسته بندی جدید
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              عنوان
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              value={categoryFormData.title}
              onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              توضیحات (اختیاری)
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type=" text"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
            >
              لغو
            </button>
            <button
              onClick={addNewCategoryHandler}
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              اضافه کردن دسته بندی
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => setIsShow((prevState) => !prevState)}
        id="toggle-add-category"
        className={`text-slate-600 text-lg mb-4 font-medium ${isShow && "hidden"
          }`}
      >
        اضافه کردن دسته بندی جدید ؟
      </button>
    </section>
  );
};

export default CategoryForm;
