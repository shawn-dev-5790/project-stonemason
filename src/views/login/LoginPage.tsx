import LoginPageUseCase from '@/core/application/usecases/LoginPageUseCase'

export default function LoginPage() {
  const uc = new LoginPageUseCase(LoginPageUseCase.init())

  console.log(uc)
  return <div>login</div>
}
