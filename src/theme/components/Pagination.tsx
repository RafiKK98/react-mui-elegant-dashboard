import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Pagination: Components<Omit<Theme, 'components'>>['MuiPagination'] = {
  defaultProps: {},
  styleOverrides: {},
};

export default Pagination;
