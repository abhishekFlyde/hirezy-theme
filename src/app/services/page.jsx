"use client";

import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import "./services.scss";

export default function ServicesPage() {
  return (
    <div className="servicesHeaderContainer">
      <Header variant="blackNave" />
      <Container variant="primary">
        <Typography variant="h1">Services</Typography>
      </Container>
    </div>
  );
}
