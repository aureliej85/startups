import { Field, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import validator from "validator";

import { setUser } from "../../redux/auth/actions";

import LoadingButton from "../../components/loadingButton";
import api from "../../services/api";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  return (
    // Auth Wrapper
    <div className="authWrapper font-myfont">
      <div className="font-[Helvetica] text-center text-[32px] font-semibold	mb-[15px]">Account team</div>

      {user && <Redirect to="/" />}
      <Formik
        initialValues={{ name: "", password: "" }}
        onSubmit={async (values, actions) => {
          try {
            const { user, token } = await api.post(`/user/signin`, values);
            if (token) api.setToken(token);
            if (user) dispatch(setUser(user));
          } catch (e) {
            console.log("e", e);
            toast.error("Wrong login", e.code);
          }
          actions.setSubmitting(false);
        }}>
        {({ values, errors, isSubmitting, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="mb-[25px]">
                <div className="flex flex-col-reverse">
                  <Field
                    className="peer signInInputs "
                    validate={(v) => validator.isEmpty(v) && "This field is Required"}
                    name="name"
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <label className="peer-focus:text-[#116eee]" htmlFor="username">
                    Username
                  </label>
                </div>
                {/* Error */}
                <p className="text-[12px] text-[#FD3131]">{errors.name}</p>
              </div>
              <div className="mb-[25px]">
                <div className="flex flex-col-reverse">
                  <Field
                    className="peer signInInputs"
                    validate={(v) => validator.isEmpty(v) && "This field is Required"}
                    name="password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <label className="peer-focus:text-[#116eee]" htmlFor="password">
                    Password
                  </label>
                </div>
                {/* Error */}
                <p className="text-[12px] text-[#FD3131]">{errors.password}</p>
              </div>
              {/* SignIn Button */}
              <div className="flex gap-3">
                <LoadingButton
                  className="font-[Helvetica] w-[220px] bg-[#007bff] hover:bg-[#0069d9] text-[#fff] rounded-[30px] m-auto block text-[16px] p-[8px] min-h-[42px] "
                  loading={isSubmitting}
                  type="submit"
                  color="primary">
                  Signin
                </LoadingButton>
                <LoadingButton
                  className="font-[Helvetica] w-[220px] bg-[#009dff] hover:bg-[#0069d9] text-[#fff] rounded-[30px] m-auto block text-[16px] p-[8px] min-h-[42px] "
                  onClick={() => (window.location.href = "/auth/signup")}
                  color="primary">
                  Signup
                </LoadingButton>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
