import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/destination/HeroSection';
import DestinationOverview from '@/components/destination/DestinationOverview';
import AttractionsGrid from '@/components/destination/AttractionsGrid';
import LocalCuisine from '@/components/destination/LocalCuisine';
import FestivalsGrid from '@/components/destination/FestivalsGrid';
import TravelTips from '@/components/destination/TravelTips';
import Accommodation from '@/components/destination/Accommodation';
import AppCTA from '@/components/destination/AppCTA';
import DestinationContent from '@/components/destination/DestinationContent';

export interface DestinationDetails {
  name: string;
  nickname: string;
  description: string;
  headerImage: string;
  attractions: Array<{
    name: string;
    description: string;
    image: string;
  }>;
  festivals?: Array<{
    name: string;
    month: string;
    description: string;
  }>;
  tips?: Array<string>;
  history?: string;
  bestTimeToVisit?: string;
  howToReach?: {
    byAir?: string;
    byRail?: string;
    byRoad?: string;
  };
  localCuisine?: Array<{
    name: string;
    description: string;
  }>;
  accommodation?: string;
  budget?: string;
}

interface DestinationTemplateProps {
  destination: DestinationDetails;
}

const DestinationTemplate: React.FC<DestinationTemplateProps> = ({ destination }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen bg-background dark:bg-yatrik-darkBg text-foreground dark:text-yatrik-darkText theme-transition"> 
        <HeroSection 
          name={destination.name} 
          nickname={destination.nickname} 
          headerImage={destination.headerImage} 
        />
        <DestinationContent destination={destination} />
      </div>
      <Footer />
    </>
  );
};

export default DestinationTemplate;
