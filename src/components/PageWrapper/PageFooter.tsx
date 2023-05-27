import React from 'react';
import { Card } from 'react-bootstrap';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';

const PageFooter: React.FC = () => (
  <Card.Footer className="text-muted d-flex justify-content-end fixed-bottom bg-dark">
    <span className="mb-0 font-weight-light font-italic">&copy; Copyright, 2023</span>
    <a href="https://github.com/UgegeDaniel">
      <FiGithub className="display-6 fs-2 ml-3 text-primary" />
    </a>
    <a href="https://twitter.com/ugege_daniel">
      <SlSocialTwitter className="display-6 fs-2 ml-3 text-primary" />
    </a>
    <a href="https://www.linkedin.com/in/daniel-ugege-50a499227/">
      <FaLinkedinIn className="display-6 fs-2 ml-3 text-primary" />
    </a>
  </Card.Footer>
);

export default PageFooter;
