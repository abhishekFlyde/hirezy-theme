"use client";
import { useState } from "react";
import "./CreateSiteForm.css";

export default function CreateSiteForm() {
  const [formData, setFormData] = useState({
    siteName: "",
    description: "",
    colors: "",
    logo: "",
    favicon: "",
    domainName: "",
    email: "",
    password: "",
  });

  const [jsonOutput, setJsonOutput] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0].name });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJsonOutput(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="form-wrapper">
      <h1>Create Your Website Config</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Site Name
          <input
            type="text"
            name="siteName"
            value={formData.siteName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Select Color Theme (4 Options)
          <select
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            required
          >
            <option value="">Choose one</option>
            <option value="blue">Blue Theme</option>
            <option value="green">Green Theme</option>
            <option value="purple">Purple Theme</option>
            <option value="orange">Orange Theme</option>
          </select>
        </label>

        <label>
          Upload Logo
          <input type="file" name="logo" onChange={handleChange} />
        </label>

        <label>
          Upload Favicon
          <input type="file" name="favicon" onChange={handleChange} />
        </label>

        <label>
          Domain Name
          <input
            type="text"
            name="domainName"
            value={formData.domainName}
            onChange={handleChange}
            placeholder="example.com"
            required
          />
        </label>

        <label>
          Email ID
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Generate JSON</button>
      </form>

      {jsonOutput && (
        <pre className="output">
          {jsonOutput}
        </pre>
      )}
    </div>
  );
}
