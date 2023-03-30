import { signupController } from "$/lib/api/controllers/mutation/signupController";
import { useMutation } from "@tanstack/react-query";

interface MutationProps {
  onSuccess?: any;
  onError?: any;
}

// export function useSignup(props?: MutationProps) {
//   return useMutation({
//     mutationFn: signupController,
//     onSuccess(data: any, variables, context) {
//       // TODO:
//       const a = data.signup.password;
//       console.log(a);
//       props?.onSuccess?.(data, variables, context);
//     },
//     onError(error, variables, context) {
//       // TODO:
//       props?.onError?.(error, variables, context);
//     },
//   });
// }

export function useSignup(props?: MutationProps) {
  return useMutation({
    mutationFn: signupController,
    onSuccess(data: any, variables, context) {
      // TODO:
      // console.log(data);
      props?.onSuccess?.(data, variables, context);
    },
    onError(error, variables, context) {
      // TODO:
      props?.onError?.(error, variables, context);
    },
  });
}
