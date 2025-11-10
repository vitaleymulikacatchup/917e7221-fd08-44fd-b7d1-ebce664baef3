"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="grid"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g3137029bf179d180920b98ae9be9f0a13a11a2be4c4514ab16bfff39b6aef93d2b6cf3c77ed8b535f7b1c61c3c5f8390a4359c56bee491c0fe5e6b838bb76065_1280.jpg"
          brandName="ChargePro"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Power the Future with Smart Charging"
          description="Professional EV charging solutions for homes, businesses, and fleets. Fast, reliable, and future-ready charging infrastructure."
          tag="EV Charging Solutions"
          tagIcon={Zap}
          buttons={[
            {
              text: "Get Started",
              href: "contact"
            },
            {
              text: "View Products",
              href: "products"
            }
          ]}
          imageSrc="https://pixabay.com/get/gfd247aba53ddaa6d4c392e1ac5793c5cf975736af3eca6a63a51046369d8401e393ed130bc3d4c2af60c7cbb81616643b87c6d328eb9c75bca32cec8321bf470_1280.jpg"
          imageAlt="Modern electric vehicle charging station"
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Charging Solutions"
          description="Professional charging stations for every need - from home to commercial installations"
          tag="Products"
          products={[
            {
              id: "1",
              name: "Home Charger Pro",
              price: "$1,299",
              imageSrc: "https://pixabay.com/get/gde9c3137debd15b58bcd1ef86466df145eafb1b90b066f2aab915cef3a76f208c606a9ffe200c3b921b35f8cb562894828cc4175092aa15ec1300cb7ac3f035f_1280.jpg",
              imageAlt: "Home electric vehicle charger"
            },
            {
              id: "2",
              name: "Commercial Station",
              price: "$8,999",
              imageSrc: "https://pixabay.com/get/gbe235a7751eb444afee512a583bd26dd446676030e87ec7bf0cbdaf9384bc08aa982916fd3492fa50e9cb2996bddba0021f9023711dcd4ff4f51cf3d98715623_1280.jpg",
              imageAlt: "Commercial charging station"
            },
            {
              id: "3",
              name: "Fast Charge DC",
              price: "$24,999",
              imageSrc: "https://pixabay.com/get/g229a5e64947d319701febee7473bd0f9f7facc03821ca3a368eac83016eec08729cea66991df86860581f7bced40a4ef406ef9e93c1d0df55dd44fddd06240da_1280.jpg",
              imageAlt: "Fast DC charging station"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Advanced Features"
          description="Smart technology and professional service make our charging solutions the best choice"
          features={[
            {
              title: "Smart Charging Technology",
              description: "Advanced load management and scheduling ensures optimal charging efficiency",
              imageSrc: "https://pixabay.com/get/ge5f1094b4dfeb7a28d22c5f1c25c2785892eaa8792d0839078facca4dddd9a6ed07269d48f2c2a4c7b5f9aad45b09fc1e95d5a3f395f17aeb361f897c22903db_1280.jpg",
              imageAlt: "Smart charging technology interface"
            },
            {
              title: "Professional Installation",
              description: "Certified technicians handle complete installation and setup process",
              imageSrc: "https://pixabay.com/get/ge70a2c9c19277fade3f82cc194ceb90bd5f4eefb067da4dc0459436744b25c63ac4b7e3852696cc52521bf5619bcf25b249f4023056cdd58cbe4b13dbe7d276b_1280.jpg",
              imageAlt: "Professional charging station installation"
            },
            {
              title: "Remote Monitoring",
              description: "Real-time monitoring and analytics through our comprehensive dashboard",
              imageSrc: "https://pixabay.com/get/g6e2e3dcb35e3633b45dd0f8d337050cb8c3598bbfe63fed575fc9810e6ccf4f7dacdb92bd62d3134527b41dd3bff9192c28ea440b0d876be3415400d544aa025_1280.jpg",
              imageAlt: "Charging station monitoring dashboard"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="See how businesses trust ChargePro for their EV charging infrastructure"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Fleet Manager",
              company: "GreenFleet Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8bdf35f6de89aae7034ea5772b4bc1470f54915404904691cc9ac0ad41ea953fb5091cb8806b0a002a4796a8212ea2162bf6a41b3b76fd9b30febde7aa8cce73_1280.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Facility Director",
              company: "TechCorp Plaza",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd4364e834852ff72e4b1286e34f10695c9c7a2a75ab368bc2c41dddac503b95a2aa59ffddef0ae46cd864dd875c7f9304232dac1e9112f5da687e94fae13dbde_1280.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Operations Manager",
              company: "EcoRetail Chain",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g853d650f4515eb8e2ab9564034ccf95954d1e37f2a32685db77b751a7f806698decd931e96a6fb0c970c2e1b8ad227dc09d0a309ed96b13bfbb12a00fe4bc014_1280.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Property Manager",
              company: "Urban Living Communities",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g113a3c891dfee4a15e72d639aceb615719d103dfa8c1fae91de42bf316a8214c4f94faf2aedcb7d0a87231d3b6393ded9841708be6e9a2d16a8ee0de2e98a4dc_1280.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Automotive Brands"
          description="Major car manufacturers choose our charging solutions for their customers"
          logos={[
            "https://pixabay.com/get/g7b3cca26785e6fd3e155a785dd656ebba61283bb2bb87df9cdd612c1874ccb2379ea82351edb1c7832a12a1f004cbeeec5761c8c725763dbfbdba8cfdd63a21a_1280.jpg",
            "https://pixabay.com/get/ge3aa5a146b791f62bc8016ce6948a763735b4b8862066b6a1b2b918d74271f65c3483f1abb618c707fb99e3b437bd85d6530fa58093794a94d6a9f31e5998986_1280.jpg",
            "https://pixabay.com/get/g47ba8dc4dcaf114da4f9f7cd2f49b93ff52abb75defb27a0b773385343e3f06d6c4ea38197879f98097383c11ebb1dad0e102326a224908dcb2e863b323c7ba5_1280.png",
            "https://pixabay.com/get/gfc2991850a856497757888611c32e5f326b8e57e0b1ed899c923db6915c744fa2ce2223d5e01121c82d83e8a11fec2e2a5410da7e9f61a55f0cc8cdcd3265262_1280.jpg",
            "https://pixabay.com/get/g1153e17216be392e6cdd9ca7d8bbe5069bbfa372da3b6094b3ab34211be2287f92baac64ddf074bb51f09d2a4ea6e2bdbd6071472a1857a263f35e1c8805e8b0_1280.jpg",
            "https://pixabay.com/get/g771d942cdbf63004dd30cf03871f2d72114a5a61b99b5aa79791967c9009f3e338d734b7f85758e4d69f39cef19c885e087bd0cd24a3a241ff18f7d23f73fdd8_1280.jpg",
            "https://pixabay.com/get/gd43087d90f1eea72cab68f6f4aea3994d45ea9cc9e036f8152ca3cfd2421ea29ec87f165937d6eb1da266797b8073319c813f92c2f6c4422b315c41a9a827516_1280.jpg"
          ]}
          textboxLayout="default"
          speed={40}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Power Your Fleet?"
          description="Get a custom quote for your EV charging infrastructure needs. Our experts will design the perfect solution for your business."
          tagIcon={Zap}
          inputPlaceholder="Enter your business email"
          buttonText="Get Quote"
          termsText="By requesting a quote, you agree to be contacted by our sales team about charging solutions."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="ChargePro"
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Home Chargers",
                  href: "products"
                },
                {
                  label: "Commercial Stations",
                  href: "products"
                },
                {
                  label: "Fast Charging",
                  href: "products"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Installation",
                  href: "services"
                },
                {
                  label: "Maintenance",
                  href: "services"
                },
                {
                  label: "Support",
                  href: "support"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Twitter",
              href: "https://twitter.com/chargepro",
              ariaLabel: "Twitter"
            },
            {
              icon: "Linkedin",
              href: "https://linkedin.com/company/chargepro",
              ariaLabel: "LinkedIn"
            }
          ]}
          copyrightText="© 2025 ChargePro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}