import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import sponsors from '../module/sponsors'
import { events } from '../module/events'
import { dateFormat } from '../module/util'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faBriefcase, faHome, faBook, faCheck  } from '@fortawesome/free-solid-svg-icons';
import '../css/col.css';
import '../css/about.css';

export default function about(props: any){
    return (
      <Layout>
        <div className="about-us-page">
      <header className="header">
        <h1 className="title">About Us</h1>
        <p className="slogan">Empowering Positive Change</p>
      </header>
      <section className="about-us-section alt">
        <div className="content">
          <h2>Our History</h2>
          <p>
            Founded in 2018, ION Bahamas has been committed to creating positive change through various projects and initiatives.
          </p>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to be of assistance to and enhance the lives of Bahamians and 
            those with a connection to the Bahamas either at home or abroad via education 
            and civic engagement.
          </p>
        </div>
      </section>
      <section className="about-us-section alt">
        <div className="content">
          <h2>The Message</h2>
          <p>
            ION Bahamas thrives through its members, including the Executive Board and Board of Directors. Elected directors shape policies and ambitions. The President leads board gatherings. Engagement blooms through committees: Membership, PR, Fundraising, and Social Committees. Our diverse workforce arises from varied backgrounds.
          </p>
          <p>
            But let's focus on you. If you're a local Bahamian, ION Bahamas is your haven. Join us for unparalleled connections among Bahamians and descendants. If you're a Bahamas enthusiast or friend, we invite you warmly.
          </p>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content">
          <h2>We Believe That</h2>
          <ul className="values-list">
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Unifying our efforts for positive community change
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Engaging members and communities for success
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Prioritizing transparency and accountability
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Built on respect, diligence, and commitment
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Nurturing success through education and support
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Guiding responsible citizenship with mentorship
            </li>
          </ul>
        </div>
      </section>
      <section className="about-us-section alt">
        <div className="content">
          <h2>Objectives</h2>
          <ul className="values-list">
            <li>
              <FontAwesomeIcon icon={faHandshake} className="icon" />
              Facilitating Meaningful Interaction and Networking Opportunities
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              Expanding Pathways to Meaningful Employment
            </li>
            <li>
              <FontAwesomeIcon icon={faHome} className="icon" />
              Enhancing the economic stability of our community
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} className="icon" />
              Enriching Through Educational Advantages
            </li>
          </ul>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content">
          <h2>Our Pledge to You</h2>
          <ul className="values-list">
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will consistently deliver top-tier programs.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will uphold values, fostering harmony, and integrity.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will honor contributors to organizational success
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will ensure transparency through budgets, records, and updates.
              </li>
            </ul>
        </div>
      </section>
      <section className="about-us-section alt">
        <div className="content">
          <h2 className="section-title">Our Sponsors</h2>
          <div className="sponsor-list">
            {sponsors.map((x,i) => 
              <a 
                href={x.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sponsor-link">
                <img src={x.img} alt="Sponsor 1" className="sponsor-logo" />
                <p style={{paddingTop: '10px'}}>{x.name}</p>
              </a>)
            }
          </div>
        </div>
      </section>
    </div>
      </Layout>
    );
};
