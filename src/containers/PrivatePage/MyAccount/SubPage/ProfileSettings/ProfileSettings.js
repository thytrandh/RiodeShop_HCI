import { useForm } from "react-hook-form";
import { updateUser } from "../../../../../redux/slice/Account/accountSlice";
import { useDispatch } from "react-redux";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";
import Select from "react-select";

const ProfileSettings = ({ idUser, userName, firstName, lastName, email }) => {
  const initialValues = {
    userName: `${userName}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    email: `${email}`,
    //address: `${userData?.address}`,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, firstName, lastName } = data;

    const id = idUser;

    dispatch(
      updateUser({
        id,
        email,
        firstName,
        lastName,
      })
    );

    console.log(data);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [city, setCity] = useState(null);
  console.log(selectedCountry);
  console.log(selectedState);
  console.log(selectedCity);
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

  return (
    <div className="account-settings-content">
      <p className="title mb-0">Profile Setting</p>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="group-input form-floating">
            <textarea
              id="userNameInput"
              className="form-control"
              placeholder="Username"
              type="text"
              {...register("userName")}
            />
            <label for="userNameInput">Username</label>
          </div>

          <div className="d-flex">
            <div className="group-input form-floating">
              <textarea
                id="firstNameInput"
                className="form-control"
                placeholder="First Name"
                type="text"
                {...register("firstName")}
              />
              <label for="firstNameInput">First Name</label>
            </div>
            <div className="group-input form-floating">
              <textarea
                id="lastNameInput"
                className="form-control"
                placeholder="Last Name"
                type="text"
                {...register("lastName")}
              />
              <label for="lastNameInput">Last Name</label>
            </div>
          </div>

          <div className="group-input form-floating">
            <textarea
              id="addressInput"
              className="form-control"
              placeholder="Address"
              type="text"
              {...register("address")}
            />
            <label for="addressInput">Address</label>
          </div>

          <div className="group-input form-floating">
            <textarea
              id="emailInput"
              className="form-control"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
            <label for="addressInput">Email</label>
          </div>

          <div className="group-input form-floating">
            <textarea
              id="phoneNumberInput"
              className="form-control"
              placeholder="Phone Number"
              type="text"
              {...register("phoneNumber")}
            />
            <label for="phoneNumberInput">Phone Number</label>
          </div>

          <div className="group-input form-floating">
            <Select
              class="form-select"
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
          </div>
          <div className="group-input form-floating">
            <Select
              class="form-select"
              name="state"
              options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
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

          <div className="group-input form-floating">
            <Select
              class="form-select"
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
          </div>

          <div className="footer-btn pt-3">
            <button className="btn-save-change">
              <p className="mb-0">SAVE CHANGES</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
