"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui-kit/spacing";
import Input from "@/components/ui-kit/input";
import Label from "./lable";
import Typography from "@/components/ui-kit/typography";
import Button from "@/components/ui-kit/button";

import { toast } from "react-toastify";
import axios from "axios";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please accept the terms & policy");
      return;
    }

    try {
      setLoading(true); // ✅ start loading
      const res = await axios.post("https://hirezy-web.vercel.app/api/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (res.data.success) {
        toast.success("Signup successful!");
        alert("✅ Thank you! Your account has been created successfully.");
        setFormData({
          name: "",
          email: "",
          password: "",
          agree: false,
        });
      } else {
        toast.error(res.data.msg || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to signup");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <Container variant="auth"  className="auth-section">
      <div className="auth-wrapper">
        <div className="auth-form">
          <Typography variant="h2" className="auth-title">
            Get Started Now
          </Typography>

          <form className="auth-form-inner" onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="input-default"
                type="text"
                placeholder="Enter full name"
                required // ✅
              />

              <Input
                label="Email address"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="input-gray"
                type="email"
                placeholder="Enter email"
                required // ✅
              />

              <Input
                label="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="input-gray"
                type="password"
                placeholder="Enter password"
                required // ✅
              />
            </div>

            <div>
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required // ✅ required checkbox
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">
                  I agree to the terms & policy
                </span>
              </label>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="btn-login"
                disabled={loading} // ✅ disable when loading
              >
                {loading ? "Signing up..." : "Sign Up"} {/* ✅ */}
              </Button>
            </div>
          </form>

          <Typography variant="body-4" className="divider">
            Or
          </Typography>

          <div className="auth-social">
            <Button variant="black-outline" className="btn-social google">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="https://ik.imagekit.io/a9uxeuyhx/icons8-google%201.png?updatedAt=1762177170960"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <Typography variant="body-5">Sign in with Google</Typography>
              </div>
            </Button>

            <Button variant="black-outline" className="btn-social apple">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="https://ik.imagekit.io/a9uxeuyhx/icons8-apple-logo%201.png?updatedAt=1762177189569"
                  alt="Apple"
                  width={20}
                  height={20}
                />
                <Typography variant="body-5">Sign in with Apple</Typography>
              </div>
            </Button>
          </div>

          <Typography variant="body-5" className="auth-footer">
            Have an account? <a href="#">Sign in</a>
          </Typography>
        </div>

        <div className="auth-image"></div>
      </div>
    </Container>
  );
};
