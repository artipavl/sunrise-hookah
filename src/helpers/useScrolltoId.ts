import { useNavigate } from 'react-router-dom';

export default function useScrolltoId() {
  const navigate = useNavigate();

  return async (id: string, page: string) => {
    await navigate(`${page}`);
    const access = document.getElementById(`${id}`);
    access && access.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
}
