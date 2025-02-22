import React from 'react';
import { render, screen } from '@testing-library/react';
import SpaceCard from '../../src/components/spaces/SpaceCard';
import { WorkSpace } from '../../src/types/WorkSpace';

// Define mock workspace data
const mockSpace: WorkSpace = {
  id: '1',
  name: 'Test Space',
  address: '123 Test Street',
  latitude: 12.34,
  longitude: 56.78,
  google_maps_url: 'https://bhive-maps.example.com',
  city: 'Test City',
  state: 'Test State',
  country: 'Test Country',
  postal_code: '12345',
  description: 'A great place to work',
  rules: 'No smoking',
  amenities: ['WiFi', 'Parking'],
  images: ['test-image.jpg', 'another-image.jpg'], // Multiple images
  working_hours_start: '09:00',
  working_hours_end: '18:00',
  contact_person_name: 'Anil Venugopal',
  facilities: 'Meeting rooms',
  is_active: true,
  is_day_pass_enabled: true,
  day_pass_price: 100,
  day_pass_discounts_percentage: { 10: { value: 10, message: '10% off' } },
  manager_id: '123',
};

describe('SpaceCard Component', () => {
  it('renders space name correctly', () => {
    render(<SpaceCard {...mockSpace} />);
    expect(screen.getByText('Test Space')).toBeInTheDocument();
  });

  it('renders workspace price', () => {
    render(<SpaceCard {...mockSpace} />);
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });
});

