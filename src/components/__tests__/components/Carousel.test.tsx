import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '../../Carousel/Carousel';
import MockProviders from '../../_mocks/Providers';

describe('Carousel component', () => {
  it('renders carousel items correctly', () => {
    const mockHomePageTxt = ['Text 1', 'Text 2', 'Text 3'];
    jest.mock('../../../utils/txtUtils', () => ({
      homePageTxt: mockHomePageTxt,
    }));

    const { getAllByRole } = render(<MockProviders><Carousel /></MockProviders>);

    const carouselItems = getAllByRole('figure');
    expect(carouselItems).toHaveLength(mockHomePageTxt.length);
  });
});
