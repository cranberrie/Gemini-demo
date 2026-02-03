import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Catalog } from './Catalog';

vi.mock('../data/sessions', () => ({
  SESSIONS: [
    {
      id: '1',
      title: 'React Keynote',
      description: 'Deep dive into React',
      speaker: 'Dr. Sarah Chen',
      category: 'Keynote',
      day: 'Day 1',
      time: '10:00 AM',
      location: 'Hall A',
      details: {
        fullDescription: 'Extended React info',
        takeaways: ['T1'],
        tracks: ['Web'],
        level: 'Advanced'
      }
    },
    {
      id: '2',
      title: 'Vue Workshop',
      description: 'Hands-on with Vue',
      speaker: 'Marcus Rodriguez',
      category: 'Learning Lab',
      day: 'Day 2',
      time: '2:00 PM',
      location: 'Room 200',
      details: {
        fullDescription: 'Extended Vue info',
        takeaways: ['T2'],
        tracks: ['Frontend'],
        level: 'Intermediate'
      }
    },
    {
      id: '3',
      title: 'AI in 2026',
      description: 'Future of AI',
      speaker: 'Emily Watson',
      category: 'Breakout',
      day: 'Day 1',
      time: '11:00 AM',
      location: 'Hall B',
      details: {
        fullDescription: 'Extended AI info',
        takeaways: ['T3'],
        tracks: ['AI/ML'],
        level: 'Beginner'
      }
    }
  ]
}));

const renderWithRouter = (initialEntries = ['/catalog']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Catalog Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all sessions initially', () => {
    renderWithRouter();
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
  });

  it('filters by search query', async () => {
    renderWithRouter();
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('filters by Day', async () => {
    renderWithRouter();
    const daySelect = screen.getByLabelText('Day');
    fireEvent.change(daySelect, { target: { value: 'Day 2' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Speaker', async () => {
    renderWithRouter();
    const speakerSelect = screen.getByLabelText('Speaker');
    fireEvent.change(speakerSelect, { target: { value: 'Marcus Rodriguez' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Level', async () => {
    renderWithRouter();
    const levelSelect = screen.getByLabelText('Level');
    fireEvent.change(levelSelect, { target: { value: 'Advanced' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('AI in 2026')).not.toBeInTheDocument();
    });
  });

  it('filters by Track', async () => {
    renderWithRouter();
    const trackSelect = screen.getByLabelText('Track');
    fireEvent.change(trackSelect, { target: { value: 'AI/ML' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('initializes filters from URL search params', () => {
    renderWithRouter(['/catalog?day=Day+2&level=Intermediate']);
    
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    
    const daySelect = screen.getByLabelText('Day') as HTMLSelectElement;
    const levelSelect = screen.getByLabelText('Level') as HTMLSelectElement;
    
    expect(daySelect.value).toBe('Day 2');
    expect(levelSelect.value).toBe('Intermediate');
  });

  it('clears all filters when clicking clear button', async () => {
    renderWithRouter(['/catalog?day=Day+2']);
    
    const clearButton = screen.getByText('Clear all filters');
    fireEvent.click(clearButton);
    
    await waitFor(() => {
      expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
    });
    
    const daySelect = screen.getByLabelText('Day') as HTMLSelectElement;
    expect(daySelect.value).toBe('All');
  });
});