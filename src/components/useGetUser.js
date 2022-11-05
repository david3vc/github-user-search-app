import { useMutation } from "react-query";
import { UserService } from '../services'

const useGetUser = () => {
  const { data, mutate, isSuccess, isError } = useMutation(
    UserService.getUser
  );

  const getUser = username => mutate(username);
  return { data, getUser, isSuccess, isError };
}

export default useGetUser;
