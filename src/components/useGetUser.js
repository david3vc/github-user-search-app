import { useMutation } from "react-query";
import { UserService } from '../services'

const useGetUser = () => {
  const { data, mutate } = useMutation(
    UserService.getUser
  );

  const getUser = username => mutate(username);
  return { data, getUser };
}

export default useGetUser;
