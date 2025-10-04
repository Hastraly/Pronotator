import { LoginForm } from "@/components/LoginForm";
import { ThemeToggle } from "@/components/ThemeToggle";

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
