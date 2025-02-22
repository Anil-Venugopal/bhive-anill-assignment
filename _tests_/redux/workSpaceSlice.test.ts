import workspaceReducer, { fetchWorkSpaces } from '../../src/redux/workSpaceSlice';
import {WorkSpace} from '../../src/types/WorkSpace';
// import { configureStore } from '@reduxjs/toolkit';

// Mock API Response
const mockWorkspaces: WorkSpace[] = [
  {
    id: '1',
    name: 'Test Workspace',
    address: '123 Test Street',
    latitude: 12.34,
    longitude: 56.78,
    google_maps_url: 'https://maps.example.com',
    city: 'Test City',
    state: 'Test State',
    country: 'Test Country',
    postal_code: '12345',
    description: 'A great place to work',
    rules: 'No smoking',
    amenities: ['WiFi', 'Parking'],
    images: ['test-image.jpg'],
    working_hours_start: '09:00',
    working_hours_end: '18:00',
    contact_person_name: 'John Doe',
    facilities: 'Meeting rooms',
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 100,
    day_pass_discounts_percentage: { 10: { value: 10, message: '10% off' } },
    manager_id: '123',
  },
];

describe('workspaceSlice', () => {
  it('should handle initial state', () => {
    expect(workspaceReducer(undefined, { type: undefined })).toEqual({
      data: [],
      loading: false,
      error: null,
    });
  });

  it('should handle fetchWorkSpaces.fulfilled', () => {
    const nextState = workspaceReducer(
      { data: [], loading: true, error: null },
      { type: fetchWorkSpaces.fulfilled.type, payload: mockWorkspaces }
    );
    expect(nextState.data).toEqual(mockWorkspaces);
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchWorkSpaces.pending', () => {
    const nextState = workspaceReducer(
      { data: [], loading: false, error: null },
      { type: fetchWorkSpaces.pending.type }
    );
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchWorkSpaces.rejected', () => {
    const nextState = workspaceReducer(
      { data: [], loading: true, error: null },
      { type: fetchWorkSpaces.rejected.type, error: { message: 'Failed to fetch' } }
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe('Failed to fetch workspaces');
  });
});
