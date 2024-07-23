import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./private/theme";

export default function PaginationButtons() {
  return (
      <ThemeProvider theme={theme}>
    <Stack>
      <Pagination count={10} boundaryCount={0} color="primary" showFirstButton showLastButton/>
    </Stack>
      </ThemeProvider>
  );
}
