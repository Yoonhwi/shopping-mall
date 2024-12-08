import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { firebaseApiMessages, Pages } from "@/constants";
import { BaseLayout } from "@/layouts";
import { AuthContext } from "@/provider/auth-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

const SingIn = () => {
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsInvalidCredential(false);
    e.preventDefault();
    const { email, password } = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const res = await signIn(email.value, password.value);
    if (res.status === "success") {
      navigate(Pages.Home);
      return;
    }
    if (res.message === firebaseApiMessages.invalidCredential) {
      setIsInvalidCredential(true);
    } else {
      throw new Error(res.message);
    }
  };

  return (
    <BaseLayout>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-4 shadow-[0px_0px_6px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_4px_4px_rgba(255,255,255,0.3)] min-w-[400px] px-12 py-8 items-center"
        >
          <h1 className="text-3xl font-bold">로그인</h1>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          {isInvalidCredential && (
            <span className="text-red-500 self-start px-2 py-0 text-sm">
              이메일 또는 비밀번호가 일치하지 않습니다.
            </span>
          )}
          <Button type="submit" className="py-6 w-full">
            로그인
          </Button>
          <div className="flex gap-2 items-center">
            <span>계정이 없습니까?</span>
            <Button
              variant={"ghost"}
              className="text-gray-500 dark:text-gray-200"
              onClick={() => navigate(Pages.SignUp)}
            >
              가입하기
            </Button>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
};

export default SingIn;
