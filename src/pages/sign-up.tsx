import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { firebaseApiMessages, Pages } from "@/constants";
import { BaseLayout } from "@/layouts";
import { AuthContext } from "@/provider/auth-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [isAlreadyEmail, setIsAlreadyEmail] = useState(false);
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsAlreadyEmail(false);
    e.preventDefault();
    const { email, password } = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const res = await signUp(email.value, password.value);
    if (res.status === "success") {
      navigate(Pages.Home);
      return;
    }

    if (res.message === firebaseApiMessages.alreadyInUse) {
      setIsAlreadyEmail(true);
    } else {
      throw new Error(res.message);
    }
  };
  return (
    <BaseLayout>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-4 shadow-[0px_0px_6px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_4px_4px_rgba(255,255,255,0.3)] min-w-[400px] px-12 py-8 items-center"
        >
          <h1 className="text-3xl font-bold">회원가입</h1>
          <div className="flex flex-col gap-1 w-full">
            <Input type="email" placeholder="Email" name="email" required />
            {isAlreadyEmail && (
              <span className="text-red-500 self-start px-2 py-0 text-sm">
                이미 사용중인 이메일입니다.
              </span>
            )}
          </div>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            minLength={6}
          />
          <Button type="submit" className="py-6 w-full">
            가입하기
          </Button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default SignUp;
