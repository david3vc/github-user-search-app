import { useMutation } from "react-query";
import { UserService } from '../services'

const useGetUser = () => {
  const { data, mutate, isSuccess } = useMutation(
    UserService.getUser
  );

  const getUser = username => mutate(username);
  return { data, getUser, isSuccess };
}

export default useGetUser;
