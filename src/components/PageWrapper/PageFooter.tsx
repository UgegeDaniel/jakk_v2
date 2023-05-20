import React from 'react';
import { Card } from 'react-bootstrap';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';

const PageFooter: React.FC = () => (
  <Card.Footer className="text-muted d-flex justify-content-end">
    <span className="mb-0 font-weight-light font-italic">&copy; Copyright, 2023</span>
    <FiGithub className="display-6 fs-2 ml-3 text-primary" />
    <SlSocialTwitter className="display-6 fs-2 ml-3 text-primary" />
    <FaLinkedinIn className="display-6 fs-2 ml-3 text-primary" />
  </Card.Footer>
);

export default PageFooter;
