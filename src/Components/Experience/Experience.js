import React, { useEffect, useState } from "react";
import autria from '../../Assets/austria.png'
import germany from '../../Assets/germany.png'
import bgGermany from '../../Assets/bg-germany.png'
import bgfrance from '../../Assets/bg-france.png'
import bgchina from '../../Assets/bg-china.png'
import bgrussia from '../../Assets/bg-russia.png'
import compass from '../../Assets/compass.png'
import arrow from '../../Assets/arrow.png'
import croatia from '../../Assets/croatia.png'
import france from '../../Assets/france.png'
import russia from '../../Assets/russia.png'
import china from '../../Assets/china.png'
import Footer from "../Footer/Footer";
import Layout from "../../Layout";
import { useTranslation } from 'react-i18next';





const ExperiencePage = () => {
  const { t } = useTranslation();
   const contentByStep = [
    [
      {
            flag: autria, title: 'Porsche Holding / Porsche Austria – Salzburg, Austria',
            desc: 'Head of Audi Marketing Austria | Jun 2002 – Sep 2011',
            exp: 'Led 360° marketing strategy and execution across Austria and CEE, including product launches, sales promotions, dealer events, and sponsorships (e.g., Audi FIS Ski World Cup, Salzburg Festival). Pioneered digital tools like Audi TV, mobile campaigns, and the 3D Car Configurator.'
            , award: 'Awarded by the Austrian Ministry for the quattro® brand campaign (Audi FIS Skiweltcup).'
          },
          {
            flag: germany, title: 'Audi AG – Ingolstadt, Germany',
            desc: 'Head of Brand Communication & Experiential Marketing | Oct 2015 – Jul 2019',
            exp: 'Lead global brand experiences and campaigns with a €65M budget and 280K-unit sales volume. Delivered award-winning marketing strategies across live events, sports partnerships, and VIP activations. Strengthened product loyalty and brand recognition through emotional storytelling, digital engagement, and close collaboration with sales and product teams.'
          }
        ],
      
        {
          flag1: croatia, flag2: france, title: 'BUGATTI RIMAC d.o.o.– Zagreb & Molsheim',
          desc: 'Head of Marketing & Product Marketing | Jul 2022 – Dec 2024',
          exp: "Reported directly to CEO Mate Rimac, leading global marketing strategy, team building, and campaign execution for both brands. Delivered brand growth through targeted marketing, CRM for UHNW/HNW clients, and strategic partnerships. Oversaw product marketing, KPIs, and long-term business planning to align with revenue and growth goals."
        }
        ,
      
        {
          flag: china, title: 'FAW-Volkswagen Audi Sales Division China – Beijing',
          desc: 'Vice President PR & Marketing / Product Marketing | Aug 2019 – Apr 2022',
          exp: "Lead brand and marketing strategy for Audi China, aligning with AUDI AG. Managed a €300M budget and a high-performing marketing team. Oversaw brand positioning, campaigns, CRM, and digital transformation - including the national “e-tron Offensive” and a multi-city marketing restructure. Delivered double-digit revenue and EBIT growth in FY2022, elevating Audi to #2 in brand image across China."
        }
        ,
      
        {
          flag: russia, title: 'Volkswagen Group RUS / Audi Manufacturing Division – Russia',
          desc: 'Marketing & Communications Director | Oct 2011 – Sep 2015',
          exp: "Lead integrated marketing strategy across digital, events, and sponsorship - including „Sochi 2014“. Created the award-winning “Russia, Land of quattro” campaign, adopted by 47 Audi markets worldwide. Focused on regional brand positioning for AWD/4WD SUV vehicles"
          , award: 'Global Effie Gold Award 2012/13 – NY American Marketing Association'
        }
        ,
  ];

  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
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
  return (
    <div>
      <Layout />


      <div
        id="experience"
        style={{
          display: "flex", padding: "40px",
          fontFamily: "Arial, sans-serif",
          position: "relative", minHeight: "100vh",
          overflow: "hidden",
          padding: '2rem 5rem',
          alignItems: 'start',
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "2rem" : "0rem",
          //  backgroundImage: `url(${world})`,
          //  backgroundSize: "cover", 
        }}>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `${currentStep === 0 ? `url(${bgGermany})` :
                currentStep === 1 ? `url(${bgfrance})` :
                  currentStep === 2 ? `url(${bgchina})` :
                    currentStep === 3 ? `url(${bgrussia})` : 'none'
              }`,
            transition: 'all 0.3s ease-in-out',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2, // adjust this value for transparency
            zIndex: 0,
          }}
        />

        {/* Left Text Column */}
        <div style={{
          width: "60%", paddingRight: "40px", position: "relative",
          zIndex: 1,
        }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#222", marginTop: '2rem' }}>
           {t("globalExperienceDeclaration")} 
          </h1>
          <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}>
            {t("strategicMarketSynopsis")}
          </p>
          <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: '2rem' }}>
            {t("crossMarketAdvantageNote")}
          </p>

          {/*  Holdings  ===============================================*/}
           <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {/* Flags */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: currentStep === 1 ? "row" : "column",
                        alignItems: "flex-start",
                        gap: currentStep === 1 ? "0.4rem" : 0,
                      }}
                    >
                      <img
                        src={
                          currentStep === 0
                            ? contentByStep[0][0].flag
                            : currentStep === 1
                            ? contentByStep[1].flag1
                            : contentByStep[currentStep].flag
                        }
                        alt="flag"
                        style={{ width: "40px", height: "30px" }}
                      />
                      {currentStep === 1 && (
                        <img
                          src={contentByStep[1].flag2}
                          alt="flag2"
                          style={{ width: "40px", height: "30px" }}
                        />
                      )}
                    </div>
          
                    {/* Title / Desc / Exp */}
                    <strong style={{ fontSize: "16px" }}>
                      {contentByStep[currentStep][0]?.title || contentByStep[currentStep]?.title}
                    </strong>
                    <a href="#" style={{ fontSize: "14px", color: "#2980b9", textDecoration: "none" }}>
                      {contentByStep[currentStep][0]?.desc || contentByStep[currentStep]?.desc}
                    </a>
                    <p style={{ fontSize: "14px", color: "#444", lineHeight: "23.8px", marginTop: "5px" }}>
                      {contentByStep[currentStep][0]?.exp || contentByStep[currentStep]?.exp}
                    </p>
          
                    {/* Award */}
                    {(contentByStep[currentStep][0]?.award || contentByStep[currentStep]?.award) && (
                      <p style={{ fontSize: "14px", color: "#444", fontWeight: 400, display: "flex", alignItems: "center" }}>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ marginRight: "6px" }}>
                          <path
                            fill="#DFC620"
                            d="M17.8104 5.49V6.23L14.2704 4.18C12.9304 3.41 11.0604 3.41 9.73043 4.18L6.19043 6.24V5.49C6.19043 3.24 7.42043 2 9.67043 2H14.3304C16.5804 2 17.8104 3.24 17.8104 5.49Z"
                          />
                          <path
                            fill="#DFC620"
                            d="M17.84 7.97L17.7 7.9L16.34 7.12L13.52 5.49C12.66 4.99 11.34 4.99 10.48 5.49L7.66 7.11L6.3 7.91L6.12 8C4.37 9.18 4.25 9.4 4.25 11.29V15.81C4.25 17.7 4.37 17.92 6.16 19.13L10.48 21.62C10.91 21.88 11.45 21.99 12 21.99C12.54 21.99 13.09 21.87 13.52 21.62L17.88 19.1C19.64 17.92 19.75 17.71 19.75 15.81V11.29C19.75 9.4 19.63 9.18 17.84 7.97Z"
                          />
                        </svg>
                        {contentByStep[currentStep][0]?.award || contentByStep[currentStep]?.award}
                      </p>
                    )}
                  </div>
          
                  {/* Additional German Experience */}
                  {currentStep === 0 && (
                    <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <img src={germany} alt="flag-germany" style={{ width: "40px", height: "30px" }} />
                        <strong style={{ fontSize: "16px" }}>{t("exp_germany_title")}</strong>
                      </div>
                      <a href="#" style={{ fontSize: "14px", color: "#2980b9", textDecoration: "none" }}>
                        {t("exp_germany_desc")}
                      </a>
                      <p style={{ fontSize: "14px", lineHeight: "23.8px", color: "#444", marginTop: "5px" }}>
                        {t("exp_germany_exp")}
                      </p>
                    </div>
                  )}
                </div>

        {/* Right Compass Image Placeholder =======================================*/}
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            marginBottom: isMobile ? "3rem" : "0",
            marginTop: '4rem'
          }}
        >
          <div
            style={{
              width: isMobile ? "70%" : "100%",
              height: "auto",
              // height: isMobile ? "auto" : "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "column",
              fontSize: '14px',
              padding: '2rem 2rem',
              // backgroundColor: 'rgb(250, 159, 159)',

            }}
          >

            <span
              style={{
                textAlign: 'center',
                position: 'absolute',
                top: '0%',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 0 ? "rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > Austria/<br />Germany</span>
            <span
              style={{
                textAlign: 'center',
                position: 'absolute',
                left: isMobile ? '8%' : '-0%',
                top: isMobile ? '48%' : 'auto',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 1 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > Croatia/<br />France</span>
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
            > China</span>
            <span
              style={{
                margin: 'auto',
                position: 'absolute',
                right: isMobile ? '10%' : '0%',
                top: isMobile ? '48%' : 'auto',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 3 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > Russia</span>

            <img
              src={compass} alt="compass"
              style={{
                width: "80%",
                height: "50%",
                backgroundImage: `url(${compass})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={() => stepTaker()} />

            <img src={arrow} alt="arrow"
              style={{
                position: 'absolute',
                bottom: `${currentStep === 0 ? '44%' :
                  currentStep === 1 ? '50%' :
                    currentStep === 2 ? '56%' :
                      currentStep === 3 ? '50%' : 'none'
                  }`,
                left: `${currentStep === 0 ? '42%' :
                  currentStep === 1 ? '50%' :
                    currentStep === 2 ? '42%' :
                      currentStep === 3 ? '35%' : 'none'
                  }`,
                width: '16%',
                cursor: 'pointer',
                transformOrigin: 'bottom center',
                rotate:
                  `${angle.toString() + 'deg'

                  }`,
                // rotate:
                //   `${
                //     dir === 'up' && currentStep === 0 ? '-360deg' :
                //     currentStep === 0  ? '0deg' :
                //     currentStep === 1 ? '-90deg' :
                //       currentStep === 2 ? '-180deg' :
                //         currentStep === 3 ? '-270deg' :
                //         currentStep >= 3 ? '-360deg' : 'none'

                //   }`,
                transition: 'all ease 0.7s'
              }}
              onClick={() => stepTaker()} />
          </div>
        </div>

      </div>
      <Footer />

    </div>
  );
};

export default ExperiencePage;

