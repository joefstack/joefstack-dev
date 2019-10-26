import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/hero.jpg';
import portfolio from '../assets/images/temp-portfolio.jpg';
// import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
// import { Link } from 'gatsby';

// const img_set_1 = [
//   {
//     src: require('../assets/images/gallery/fulls/01.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/01.jpg'),
//     title: 'Great Sky',
//     desc: 'Be one with the Universe',
//     full: true,
//   },
//   {
//     src: require('../assets/images/gallery/fulls/02.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/02.jpg'),
//     title: 'High Mountains',
//     desc: 'Be one with the mountains',
//   },
//   {
//     src: require('../assets/images/gallery/fulls/03.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/03.jpg'),
//     title: 'Any time ',
//     desc: 'Be one with the time',
//   },
//   {
//     src: require('../assets/images/gallery/fulls/04.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/04.jpg'),
//     title: 'Any source of light',
//     desc: 'Be one with the light',
//     full: true,
//   },
// ];
// const img_set_2 = [
//   {
//     src: require('../assets/images/gallery/fulls/05.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/05.jpg'),
//     title: 'Any Curiosity',
//     desc: 'Be one with the curiosity',
//     full: true,
//   },
//   {
//     src: require('../assets/images/gallery/fulls/06.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/06.jpg'),
//     title: 'Any source of enlightenment',
//     desc: 'Be one with the soul',
//   },
//   {
//     src: require('../assets/images/gallery/fulls/07.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/07.jpg'),
//     title: 'Be in present',
//     desc: 'Be one with the present',
//   },
// ];
// const img_set_3 = [
//   {
//     src: require('../assets/images/gallery/fulls/08.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/08.jpg'),
//     title: 'Give away',
//     desc: 'Be one with the empathy',
//   },
//   {
//     src: require('../assets/images/gallery/fulls/09.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/09.jpg'),
//     title: 'Moment',
//     desc: 'Be one with the moment',
//   },
//   {
//     src: require('../assets/images/gallery/fulls/10.jpg'),
//     thumbnail: require('../assets/images/gallery/thumbs/10.jpg'),
//     title: 'Serenity',
//     desc: 'Be one with the purity',
//     full: true,
//   },
// ];
const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img
              src={heroImage}
              alt="Frogs have it made, they get to eat what bugs them."
            />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Let's keep things simple</h2>
        </header>
        <div className="content">
          <p>
            <strong>What I do.</strong> Experienced cloud and software architect
            focused on the proper utilization of technology to solve business
            problems. Applying proper cost benefit analysis to every project to
            find the optimal technological solution. With proven leadership
            skills and strong mentoring capabilities, I can not only find the
            best fit solution, I can also communicate It effectively to clients,
            prospective clients (pre-sales), management and the development
            team.
          </p>
          <span className="image main">
            <img src={portfolio} alt="Temporary portfolio" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Getting a bit deeper</h2>
        </header>
        <div className="content">
          <p>
            <strong>My tech stack.</strong> Deploy applications on Kubernetes
            Cluster. Manage the Kubernetes pod schedule within the Kubernetes
            cluster (Microservices). Create and Manage AWS resources like EC2,
            VPC, S3 bucket, Security Groups, Elastic Load Balancer.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-laptop">Docker</li>
            <li className="icon fa-bolt">Kubernetes</li>
            <li className="icon fa-signal">Kafka</li>
            <li className="icon fa-code">Logstash</li>
            <li className="icon fa-gear">OpenCV</li>
            <li className="icon fa-map-marker">TensorFlow/Keras</li>
          </ul>
          <p>
            I can help. I’m currently available for freelance work. If you have
            a project that you want to get started, think you need my help with
            something or just fancy saying hey, then get in touch.
          </p>
        </div>
      </section>
      {/*
      <section>
        <header>
          <h2>Ultrices erat magna sed condimentum</h2>
        </header>
        <div className="content">
          <p>
            <strong>Integer mollis egestas</strong> nam maximus erat id euismod
            egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <header>
              <h3>Erat aliquam</h3>
              <p>
                Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
                etiam consequat, et lorem adipiscing sed dolor sit amet,
                consectetur amet do eiusmod tempor incididunt ipsum suspendisse
                ultrices gravida.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Nisl consequat</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>
        </div>
      </section>
*/}
      <section>
        <header>
          <h2>What else I do</h2>
        </header>
        <div className="content">
          <p>
            <strong>Photos.</strong> Check out a small photo journal I have been
            compiling.
          </p>
          <ul className="actions">
            <li>
              <a
                href="https://josephchow.photos"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary large"
              >
                Let's go!
              </a>
            </li>
            {/* <li>
              <a href="/#" className="button large">
                Learn More
              </a>
            </li> */}
          </ul>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
