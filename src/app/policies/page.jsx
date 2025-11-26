"use client";

import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import { Container } from "@/components/ui-kit/spacing";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import { BlogsTextContent } from "@/components/ui-kit/blogsTextContent";
import "./policies.scss";
import { TextInfoCard } from "@/components/ui-kit/textInfoCard";
import EmailNotification from "@/components/ui-kit/EmailNotification";

export default function PoliciesPage() {
  return (
    <div>
      <Header />
      <Container variant="primary">
        <SectionHeader
          label="Legal & Policies"
          title="Privacy & Terms"
          subtitle="Our commitment to protecting your data and ensuring transparent operations."
        />
      </Container>
      {/* Privacy Policy */}
      <div className="policies-container">
        <Container variant="heroSpacing">
          <SectionHeader
            title="Privacy Policy"
            subtitle="Last Updated: November 15, 2025"
            align="left"
          />
          <div className="policies-content">
            <BlogsTextContent
              heading="1. Information We Collect"
              description={
                <div>
                  We collect information you provide directly to us, such as
                  when you create an account, post job listings, submit
                  applications, or communicate with us. This includes your name,
                  email address, phone number, company information, and any
                  other information you choose to provide.
                  <br />
                  <br />
                  We also automatically collect certain information about your
                  device and how you interact with our services, including IP
                  address, browser type, operating system, and usage data. This
                  helps us improve our services and provide a better user
                  experience.
                </div>
              }
            />
            <BlogsTextContent
              heading="2. How We Use Your Information"
              description={
                <div>
                  We use the information we collect to provide, maintain, and
                  improve our services, including to process transactions, send
                  you technical notices and support messages, and communicate
                  with you about products, services, and events.
                  <br />
                  <br />
                  We may also use your information to personalize your
                  experience, develop new features, protect against fraud and
                  abuse, and comply with legal obligations. We never sell your
                  personal information to third parties.
                </div>
              }
            />
            <BlogsTextContent
              heading="3. Information Sharing and Disclosure"
              description={
                <div>
                  We share information with service providers who perform
                  services on our behalf, such as hosting, data analysis,
                  customer service, and email delivery. These providers are
                  contractually obligated to protect your information and use it
                  only for the purposes we specify.
                  <br />
                  <br />
                  We may also disclose information if required by law, to
                  protect our rights or the rights of others, or in connection
                  with a business transaction such as a merger or acquisition.
                  We will notify you if your information will be subject to a
                  different privacy policy.
                </div>
              }
            />

            <BlogsTextContent
              heading="4. Data Security"
              description={
                <div>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. This includes
                  encryption, access controls, and regular security assessments.
                  <br />
                  <br />
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure. While we strive to protect
                  your information, we cannot guarantee its absolute security.
                  You are responsible for maintaining the confidentiality of
                  your account credentials.
                </div>
              }
            />

            <BlogsTextContent
              heading="5. Your Rights and Choices"
              description={
                <div>
                  You have the right to access, update, or delete your personal
                  information at any time through your account settings. You may
                  also request a copy of your data or ask us to transfer it to
                  another service.
                  <br />
                  <br />
                  You can opt out of receiving promotional communications by
                  following the unsubscribe instructions in those messages.
                  However, we may still send you transactional or relationship
                  messages related to your account or ongoing business
                  relations.
                </div>
              }
            />
          </div>
        </Container>
      </div>

      <div className="horizontal-line"></div>

      {/* Terms of Use */}
      <div className="terms-container">
        <Container variant="primary">
          <SectionHeader
            title="Privacy Policy"
            subtitle="Last Updated: November 15, 2025"
            align="left"
          />
          <div className="terms-content">
            <BlogsTextContent
              heading="1. Information We Collect"
              description={
                <div>
                  We collect information you provide directly to us, such as
                  when you create an account, post job listings, submit
                  applications, or communicate with us. This includes your name,
                  email address, phone number, company information, and any
                  other information you choose to provide.
                  <br />
                  <br />
                  We also automatically collect certain information about your
                  device and how you interact with our services, including IP
                  address, browser type, operating system, and usage data. This
                  helps us improve our services and provide a better user
                  experience.
                </div>
              }
            />
            <BlogsTextContent
              heading="2. How We Use Your Information"
              description={
                <div>
                  We use the information we collect to provide, maintain, and
                  improve our services, including to process transactions, send
                  you technical notices and support messages, and communicate
                  with you about products, services, and events.
                  <br />
                  <br />
                  We may also use your information to personalize your
                  experience, develop new features, protect against fraud and
                  abuse, and comply with legal obligations. We never sell your
                  personal information to third parties.
                </div>
              }
            />
            <BlogsTextContent
              heading="3. Intellectual Property"
              description={
                <div>
                  All content, features, and functionality of our services,
                  including but not limited to text, graphics, logos, and
                  software, are owned by Hirezy or our licensors and are
                  protected by copyright, trademark, and other intellectual
                  property laws.
                  <br />
                  <br />
                  You are granted a limited, non-exclusive, non-transferable
                  license to access and use our services for internal business
                  purposes. You may not copy, modify, distribute, or create
                  derivative works based on our services without express written
                  permission.
                </div>
              }
            />

            <BlogsTextContent
              heading="4. Payment Terms"
              description={
                <div>
                  Subscription fees are billed in advance monthly or annually
                  and are non-refundable except as required by law. You
                  authorize us to charge your payment method for all fees
                  incurred.
                  <br />
                  <br />
                  If payment is not successfully processed, we may suspend or
                  terminate your paid feature access. You are responsible for
                  providing accurate billing information.
                </div>
              }
            />

            <BlogsTextContent
              heading="5. Limitation of Liability"
              description={
                <div>
                  Our services are provided "as is" without warranties of any
                  kind. We do not guarantee that services will be uninterrupted,
                  error-free, or secure.
                  <br />
                  <br />
                  To the maximum extent permitted by law, Hirezy shall not be
                  liable for any indirect, incidental, special, or consequential
                  damages, or loss of profits, data, goodwill, or intangible
                  losses.
                </div>
              }
            />

            <BlogsTextContent
              heading="6. Termination"
              description={
                <div>
                  You may terminate your account anytime through your account
                  settings or by contacting us. We may suspend or terminate your
                  access to services if you violate these terms.
                  <br />
                  <br />
                  Upon termination, your right to use the services ceases
                  immediately. We may retain certain information as required by
                  law or for legitimate business purposes.
                </div>
              }
            />
          </div>
          <TextInfoCard
            heading="Questions About Our Policies?"
            description="If you have any questions about our Privacy Policy or Terms of Service, please contact us at legal@hirezy.com or visit our Contact page."
          />
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
