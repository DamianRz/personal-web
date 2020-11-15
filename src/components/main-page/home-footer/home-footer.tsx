import React from 'react';
import { Card } from '../../card';
import { ContainerPage } from '../../test/container-page/container-page';
import { Maps } from '../google_maps/google-maps';
import { Text } from '../../text';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './home-footer.scss';
import './home-footer-mobile.scss';

export const HomeFooter = (props: {
  title: string;
  subtitle: string;
}) => {

  return (
    <Card
      className="footer-card"
      title={props.title}
    >
    </Card>
  );
};
