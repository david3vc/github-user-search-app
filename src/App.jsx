import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import { useState } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Principal from './components/Principal';

function App() {
  const [data, setData] = useState({});
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Title />
      <Search setData={setData} />
      <Principal data={data} />
    </QueryClientProvider>
  )
}

export default App
