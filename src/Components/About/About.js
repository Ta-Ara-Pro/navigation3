import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import compass from '../../Assets/compass.png';
import arrow from '../../Assets/arrow.png';
import tick from '../../Assets/tick-circle.png'; // Tick icon
import Interim from "../Interim/Interim";
import TargetGroups from "../TargetGroups/TargetGroups";
import BrandsSection from "../BrandsSection/BrandsSection";
import Refrences from "../Refrences/Refrences";
import ContactSection from "../ContactSection/ContactSection";
import Collaborative from "../Collaborative/Collaborative";
import Footer from "../Footer/Footer";
import Layout from "../../Layout";

const About = () => {
  const { t } = useTranslation();
  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    

    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    



  const stepTaker = () => {
    setTimeout(() => {
      setCurrentStep((prev) => {
        const next = prev >= 3 ? 0 : prev + 1;
        return next;
      })

      setAngle((prevAngle) => {
        return prevAngle - 90
      })

    }, 500)
  }

  useEffect(() => {
    const sectionIds = ["marketing", "reference", "target", "collaborative"];
    const targetId = sectionIds[currentStep];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1);
    }
  }, [currentStep]);
  return (
    <div>
      <img
          src="/hero.svg"
          alt="hero"
          style={{
            position: "absolute",
            bottom: "-20%",
            width: "100%",
            zIndex: 0,
          }}
        />
    <Layout />
      <div
        id="experience"
        style={{
          display: "flex",
          alignItems:'center',
          flexDirection: isMobile ? "column" : "row",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          width: '100%',
        }}
      >
        {/* Background */}
        {/* <img
          src="/hero.svg"
          alt="hero"
          style={{
            position: "absolute",
            bottom: '-20%',
          }}
        /> */}

        {/* Left Column */}
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            padding: isMobile ? "3rem 2rem" : "10rem 5rem",
            zIndex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
           <h1 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: "bold", color: "#222" }}>
            {t("about_title")}
          </h1>
          <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}>
              {t("about_intro_1")}
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            {t("about_intro_2")}
          </p>

          <strong style={{ fontSize: "16px" }}>{t("about_deliver")}</strong>

          {t("about_items", { returnObjects: true }).map((item, index) => (
            <p
              key={index}
              style={{ fontSize: "14px", color: "#444", display: "flex", alignItems: "center", paddingTop: "1rem" }}
            >
              <img
                src={tick}
                alt="tick"
                style={{ width: "18px", height: "18px", marginRight: "8px" }}
              />
              {item}
            </p>
          ))}

          <p
            style={{
              fontSize: "14px",
              color: "#444",
              marginTop: "1rem",
            }}
          >
           {t("about_impact")}
          </p>
        </div>

        {/* Right Column */}
        <div
          style={{
            width: isMobile ? "100%" : "65%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            marginBottom: isMobile ? "3rem" : "0",
          }}
          
        >
          <div
            style={{
              width: isMobile ? "70%" : "70%",
              height:"auto" ,
              // height: isMobile ? "auto" : "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "column",
              fontSize:'14px',
              padding:'2rem 2rem',
              // backgroundColor: 'rgb(250, 159, 159)',
              
            }}
          >

          <span
            style={{
              textAlign:'center',
              position: 'absolute',
                top: '0%',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 0 ? "rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
            }}
          >{t("step_marketing")} <br/>{t("step_marketing2")}</span>
          <span
            style={{
              textAlign:'center',
              position: 'absolute',
                left: isMobile ? '8%' : '-5%',
                top: isMobile ? '48%' : 'auto',
                transition: 'all ease 0.5s',
                zIndex: 3,
                color: `${currentStep === 1 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",

            }}
          > Refrences / <br/> Brands </span>
          <span
            style={{
              position: 'absolute',
                bottom: isMobile ? '5%' : '0%',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 2 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
            }}
          >{t("step_target")}</span>
          <span
            style={{
              margin:'auto',
              position: 'absolute',
              right: isMobile ? '10%' : '0%',
              top: isMobile ? '48%' : 'auto',
              transition: 'all ease 0.5s',
              zIndex: 2,
              color: `${currentStep === 3 ? " rgb(0, 139, 252)" : 'black'}`,
              fontWeight: '600',
              fontSize: isMobile ? "10px" : "inherit",
            }}
          >Vision<br/>Mission<br/>Values</span>

          <img
            src={compass} alt="compass"
            style={{
              width: isMobile ? "40vw" : "27vw",
              maxWidth: "400px",
              height: "auto",
              backgroundImage: `url(${compass})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: 'relative',
              cursor: 'pointer',
              zIndex: 2
            }}
            onClick={() => stepTaker()} />

          <img src={arrow} alt="arrow"
            style={{
              zIndex: 2,
              position: 'absolute',
              bottom: `${currentStep === 0 ? '44%' :
                currentStep === 1 ? '50%' :
                  currentStep === 2 ? '56%' :
                    currentStep === 3 ? '50%' : '45%'
                }`,
              left: `${currentStep === 0 ? '44%' :
                currentStep === 1 ? '50%' :
                  currentStep === 2 ? '44%' :
                    currentStep === 3 ? '40%' : 'none'
                }`,
                width: isMobile ? '11%' : '14%',
              cursor: 'pointer',
              transformOrigin: 'bottom center',
              rotate:
                `${angle.toString() + 'deg'

                }`,
              transition: 'all ease 0.7s'
            }}
            onClick={() => stepTaker()} />

          <img src={'/interimFullRings.svg'} alt='rings'
            style={{
              width: isMobile ? '55vw' : '90%',
              position: 'absolute',
              right: isMobile ? '15%' : '0%',
              top: isMobile ? '2%' : '0%',
              zIndex: 1,
            }} />

        </div>
        </div>
      </div>
      <Interim />
      <TargetGroups />
      <Collaborative />
      <Refrences />
      <ContactSection />
      <Footer />
      </div>
  );
};

export default About;