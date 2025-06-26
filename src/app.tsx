import 'src/global.css';

import useScrollToTop from 'src/hooks/useScrollToTop';

import { ThemeProvider } from 'src/theme/theme-provider';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  useScrollToTop();

  return <ThemeProvider>{children}</ThemeProvider>;
}
