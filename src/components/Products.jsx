import { useState } from "react";
import { toast } from 'react-toastify';

const ProductsForm = ({ categories, setProducts, setIsShow }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: '',
    categoryId: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    if (productsFormData.title === '') {
      toast('لطفا عنوان را وارد کنید');
      return;
    }
    if (productsFormData.quantity === '') {
      toast('لطفا تعداد را وارد کنید');
      return;
    }
    if (productsFormData.categoryId === '') {
      toast('لطفا دسته بندی را انتخاب کنید');
      setIsShow(true);
      return;
    }
    const newProduct = {
      ...productsFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductsFormData({ title: "", quantity: "", categoryId: "" });
    toast.success("محصول جدید اضافه شد");
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">افزودن محصول جدید</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            عنوان
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            value={productsFormData.title}
            onChange={changeHandler}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            تعداد
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            type="number"
            name="quantity"
            id="product-quantity"
            value={productsFormData.quantity}
            onChange={changeHandler}
            placeholder="0"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            دسته بندی
          </label>
          <select
            name="categoryId"
            id="product-category"
            value={productsFormData.categoryId}
            onChange={changeHandler}
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              یک دسته بندی را انتخاب کنید
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProduct}
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            افزودن محصول جدید
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
