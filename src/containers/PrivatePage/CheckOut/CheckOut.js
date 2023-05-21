import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { orderItems, loading, error } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    orderItems.map((item) => {
      totalPrice += item.totalPrice * item.quantity;
      return totalPrice;
    });
    setTotal(totalPrice);
  }, [orderItems]);
  const validate = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });
  return (
    <div className="mt-3 mx-auto bg-white rounded-lg drop-shadow-xl w-11/12 pb-5 mb-5">
      <div className="mx-auto grid grid-cols-2 w-10/12 pt-5">
        <div className=" border-r-[1px] pr-5">
          <div className="font-semibold mb-4">BILLING ADDRESS</div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              country: "",
              address: "",
              city: "",
              phoneNumber: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => {
              console.log(formik.values);
              return (
                <Form>
                  <div className="grid grid-cols-2 gap-x-3">
                    <Input
                      label="First Name"
                      type="text"
                      name="firstName"
                      id="firstName"
                    ></Input>
                    <Input
                      label="Last Name"
                      type="text"
                      name="lastName"
                      id="lastName"
                    ></Input>
                  </div>
                  <Input
                    label="Country"
                    type="text"
                    name="country"
                    id="country"
                  ></Input>
                  <Input
                    label="Address"
                    type="text"
                    name="address"
                    id="address"
                  ></Input>
                  <div className="grid grid-cols-2 gap-x-3">
                    <Input
                      label="City"
                      type="text"
                      name="city"
                      id="city"
                    ></Input>
                    <Input
                      label="Phone"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                    ></Input>
                  </div>
                  <TextArea
                    label="Order note"
                    type="text"
                    name="orderNote"
                    id="orderNote"
                    placeholder="write your notes..."
                  ></TextArea>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="ml-5">
          <div className=" font-semibold">YOUR ORDER</div>
          <hr className="border-stone-700 my-4"></hr>
          <div className="mb-4 font-semibold">Product</div>
          <div className="grid grid-cols-4 gap-4 text-sm h-20 items-center mb-4">
            <img
              className="w-[85%] h-full rounded-lg"
              alt="product"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            ></img>
            <div className="col-span-2">Men's fashion sneaker x 2</div>
            <div className="font-medium">$ 588.00</div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm h-20 items-center mb-4">
            <img
              className="w-[85%] h-full rounded-lg"
              alt="product"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            ></img>
            <div className="col-span-2">Men's fashion sneaker x 2</div>
            <div className="font-medium">$ 588.00</div>
          </div>
          <hr className="border-stone-700 my-4"></hr>
          <div className="grid grid-cols-4 gap-x-5 gap-y-1">
            <div className="font-semibold col-span-2">Subtotal</div>
            <div className="font-medium col-start-4">$ 588.00</div>
            <div className="text-sm col-span-2">Shipping fee</div>
            <div className="text-sm col-start-4">$ 5.00</div>
          </div>
          <hr className="border-stone-700 my-4"></hr>
          <div className="font-semibold col-span-2">Payment Method</div>
          <button className="bg-green-500 p-2 text-sm font-medium text-white rounded-lg w-32 mt-4 hover:bg-green-600 transition-all">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
