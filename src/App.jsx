import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import { useState } from 'react';
import { TEMA_LIGHT, TEMA_DARK } from './constants';
import Title from './components/Title';
import Search from './components/Search';
import Principal from './components/Principal';
import './styles/app.css'

function App() {
  const [data, setData] = useState({});
  const [tema, setTema] = useState(TEMA_DARK);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {
        tema === TEMA_DARK ? (
          <div className='tema__light'>
            <Title tema={tema} setTema={setTema} />
            <Search setData={setData} tema={tema} />
            <Principal data={data} tema={tema} />
          </div>
        ) : (
          <div className='tema__dark'>
            <Title tema={tema} setTema={setTema} />
            <Search setData={setData} tema={tema} />
            <Principal data={data} tema={tema} />
          </div>
        )
      }
    </QueryClientProvider>
  )
}

export default App
