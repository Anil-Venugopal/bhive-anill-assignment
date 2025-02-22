import { FeatureProps } from '../components/features/Feature';
import communityEventsIcon from '../assets/community-events-icon.svg';
import gymIcon from '../assets/gym-facilities-icon.svg';
import wifiIcon from '../assets/wifi-icon.svg';
import teaIcon from '../assets/tea-icon.svg';
import rupeeIcon from '../assets/rupee-icon.svg';
import clockIcon from '../assets/clock-icon.svg';
import sportsIcon from '../assets/sports-icon.svg';
import loungeIcon from '../assets/lounge-icon.svg';

export const features: FeatureProps[] = [
  { icon: communityEventsIcon, messageId: 'feature.communityEvents' },
  {
    icon: gymIcon,
    messageId: 'feature.gymFacilities',
  },
  { icon: wifiIcon, messageId: 'feature.highSpeedWifi' },
  { icon: teaIcon, messageId: 'feature.cafeAndTeaBar' },
  { icon: rupeeIcon, messageId: 'feature.affordable' },
  { icon: loungeIcon, messageId: 'feature.comfortLounges' },
  { icon: clockIcon, messageId: 'feature.quickBooking' },
  {
    icon: sportsIcon,
    messageId: 'feature.sportsArea',
  },
];
