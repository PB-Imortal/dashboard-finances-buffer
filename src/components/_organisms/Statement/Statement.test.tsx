import { render, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { BrowserRouter} from 'react-router-dom';
import Statement from './Statement';
import { StatementHead } from '../../_molecules/Statement/StatementHead';
import { StatementFilter } from '../../_molecules/Statement/StatementFilter';
import { StatementTable } from '../../_molecules/Statement/StatementTable';
import { StatementContext } from '../../_molecules/Statement/StatementContextProvider';

vi.mock('../../_molecules/Statement/StatementHead');
vi.mock('../../_molecules/Statement/StatementFilter');
vi.mock('../../_molecules/Statement/StatementTable');

describe('Statement Component', () => {
  test('should render StatementHead, StatementFilter, and StatementTable components', () => {
    (StatementHead as jest.Mock).mockReturnValue(<div>StatementHead Component</div>);
    (StatementFilter as jest.Mock).mockReturnValue(<div>StatementFilter Component</div>);
    (StatementTable as jest.Mock).mockReturnValue(<div>StatementTable Component</div>);

    const mockContextValue = {
      userAccounting: {
        transactions: [],
        money: 0,
        expenses: 0,
        earnings: 0,
      },
      filteredData: [],
      setFilteredData: vi.fn()
    };

    render(
      <BrowserRouter>
        <StatementContext.Provider value={mockContextValue}>
          <Statement />
        </StatementContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('StatementHead Component')).toBeInTheDocument();
    expect(screen.getByText('StatementFilter Component')).toBeInTheDocument();
    expect(screen.getByText('StatementTable Component')).toBeInTheDocument();
  });
});