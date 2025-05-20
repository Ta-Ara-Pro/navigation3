import React from 'react';
import { useTranslation } from 'react-i18next';
import './Collaborative.css';

import missionIcon from '../../Assets/mission.png';
import visionIcon from '../../Assets/vision.png';
import valuesIcon from '../../Assets/values.png';
import backgroundImage from '../../Assets/group3.png';

const Collaborative = () => {
  const { t } = useTranslation('');

  const principles = [
    {
      icon: missionIcon,
      label: t('pillar_heading_one'),
      description: t('pillar_text_one')
    },
    {
      icon: visionIcon,
      label: t('pillar_heading_two'),
      description: t('pillar_text_two')
    },
    {
      icon: valuesIcon,
      label: t('pillar_heading_three'),
      description: t('pillar_text_three')
    }
  ];

  return (
    <>
      <div className="gradient-background" id="collaborative">
        <img
          src={backgroundImage}
          alt="background"
          className="decorative-bg"
          style={{
            width: '30%',
            height: '70%',
            position: 'absolute',
            top: '20%',
            right: '0px'
          }}
        />

        <section className="collaboration-section">
          <div className="collaboration-container">
            <div className="collaboration-text">
              <div className="collaboration-title">
                <h2>{t('leadership_main')}</h2>
              </div>

              <p className="intro">{t('leadership_description')}</p>

              <div className="collaboration-points">
                <div className="point">
                  <p><strong>{t('point_title_one')}</strong></p>
                </div>
                <div className="point">
                  <p>{t('point_body_one')}</p>
                </div>
                <div className="point">
                  <p><strong>{t('point_title_two')}</strong></p>
                </div>
                <div className="point">
                  <p>{t('point_body_two')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services2-section">
          <div className="services2-inner">
            <div className="services2-grid">
              {principles.map((item, index) => (
                <div className="service2-card" key={index}>
                  <img src={item.icon} alt="icon" className="service2-icon" />
                  <h4>{item.label}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Collaborative;
