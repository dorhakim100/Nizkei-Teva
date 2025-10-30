import { useNavigate } from 'react-router-dom'

export function useNavigateToPage(path: string) {
  const navigate = useNavigate()

  return () => navigate(path)
}
