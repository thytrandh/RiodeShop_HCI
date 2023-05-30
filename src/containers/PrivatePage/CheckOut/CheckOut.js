import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paypal, createOrder } from "../../../redux/slice/Cart/cartSlice";
const CheckOut = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [city, setCity] = useState(null);
  const country = Country.getCountryByCode("VN");
  const state = State.getStateByCodeAndCountry("31", "VN");
  const cities = City.getCitiesOfState("VN", "31");
  useEffect(() => {
    cities?.map((city) => {
      if (city?.latitude === "14.50535000") {
        setCity(city);
      }
    });
  }, [cities]);
  useEffect(() => {
    setSelectedCountry(country);
    setSelectedState(state);
    setSelectedCity(city);
  }, [country, state, city]);
  const dispatch = useDispatch();
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

  useEffect(() => {
    const address = {
      country_id: selectedCountry?.isoCode,
      country_name: selectedCountry?.name,
      state_id: selectedState?.isoCode,
      state_name: selectedState?.name,
      city_id: selectedCity?.latitude,
      city_name: selectedCity?.name,
      detailAddress: "6 Vo Van Ngan,Thu Duc",
    };
    const orderDetail = {
      account: user.id,
      receiverName: "Quoc Anh",
      receiverPhoneNumber: "0997888666",
      address: { ...address },
      deliveryChargers: 3,
      totalPrice: total,
      status: 3,
    };
    dispatch(createOrder(orderDetail));
  }, [
    dispatch,
    selectedCountry?.isoCode,
    selectedCountry?.name,
    selectedState?.isoCode,
    selectedState?.name,
    selectedCity?.latitude,
    selectedCity?.name,
    user.id,
    total,
  ]);

  const handlePayment = () => {
    const dataPaypal = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total,
          },
        },
      ],
    };
    dispatch(paypal(dataPaypal));
  };

  const validate = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    commune: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });
  return (
    <div className="mt-3 mx-auto bg-white rounded-lg drop-shadow-xl w-11/12 pb-5 mb-5">
      <div className="mx-auto grid grid-cols-2 w-10/12 pt-5">
        <div className=" border-r-[1px] pr-5">
          <div className="font-semibold mb-4">BILLING ADDRESS</div>
          <Formik
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              country: "",
              state: "",
              city: "",
              address: "",
              phoneNumber: user.phoneNumber,
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
                  <div className="grid grid-cols-2 gap-x-3 pb-3">
                    <span className="text-sm text-gray-600">Country</span>
                    <span className="text-sm text-gray-600">State</span>
                    <Select
                      name="country"
                      options={Country.getAllCountries()}
                      getOptionLabel={(options) => {
                        return options["name"];
                      }}
                      getOptionValue={(options) => {
                        return options["name"];
                      }}
                      value={selectedCountry}
                      onChange={(item) => {
                        setSelectedCountry(item);
                      }}
                    />
                    <Select
                      name="state"
                      options={State?.getStatesOfCountry(
                        selectedCountry?.isoCode
                      )}
                      getOptionLabel={(options) => {
                        return options["name"];
                      }}
                      getOptionValue={(options) => {
                        return options["name"];
                      }}
                      value={selectedState}
                      onChange={(item) => {
                        setSelectedState(item);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-3">
                    <span className="text-sm text-gray-600">City</span>
                    <span className="text-sm text-gray-600">Phone</span>
                    <Select
                      name="city"
                      options={City.getCitiesOfState(
                        selectedState?.countryCode,
                        selectedState?.isoCode
                      )}
                      getOptionLabel={(options) => {
                        return options["name"];
                      }}
                      getOptionValue={(options) => {
                        return options["name"];
                      }}
                      value={selectedCity}
                      onChange={(item) => {
                        setSelectedCity(item);
                      }}
                    />
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                    ></Input>
                  </div>
                  <Input
                    label="Address"
                    type="text"
                    name="address"
                    id="address"
                  ></Input>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="ml-5">
          <div className=" font-semibold">YOUR ORDER</div>
          <hr className="border-stone-700 my-4"></hr>
          <div className="mb-4 font-semibold">Product</div>
          {orderItems?.map((items) => (
            <div className="grid grid-cols-4 gap-4 text-sm items-center mb-4">
              {items.stock?.product?.productImage?.map(
                (item) =>
                  item.isDefault === 1 && (
                    <img
                      className="w-[85%] h-20 rounded-lg"
                      src={item.imageLink}
                      alt=""
                    />
                  )
              )}
              <div className="col-span-2">
                <div className="grid grid-rows-3 items-center gap-2 cursor-pointer">
                  <div className="max-h-9 truncate ">
                    {items.stock.product.productName}
                  </div>
                  <div className="max-h-6">
                    {items?.color}, {items?.size}
                  </div>
                  <div>x{items?.quantity}</div>
                </div>
              </div>
              <div className="font-medium text-[#ee4d2d]">
                ${items.totalPrice}
              </div>
            </div>
          ))}

          <hr className="border-stone-700"></hr>
          <div className="grid grid-cols-4 gap-x-5 gap-y-1">
            <div className="font-semibold col-span-2">Subtotal</div>
            <div className="font-medium col-start-4 text-[#ee4d2d] text-lg">
              ${total}
            </div>
            <div className="text-sm col-span-2">Shipping fee</div>
            <div className="text-sm col-start-4">$ 5.00</div>
          </div>
          <hr className="border-stone-700 my-4"></hr>
          <div className="font-semibold col-span-2">Payment Method</div>
          <button
            onClick={() => {
              handlePayment();
            }}
            className="bg-green-500 p-2 w-full h-11 text-md font-medium text-white rounded-sm my-3 hover:bg-green-600 transition-all"
          >
            Cash on delivery
          </button>
          <PayPalScriptProvider
            options={{
              "client-id":
                "AeWD3fwvHp7gJuRu6909KA4EljpDXDPjM24mLRhltHhEIjpOz3086I9XdZqpmSXCRX2uR-emlfUgj0ji",
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "99.99",
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                alert("Transaction completed by " + name);
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
