const useAuth = () => !!localStorage.getItem('access_token');

export default useAuth;
