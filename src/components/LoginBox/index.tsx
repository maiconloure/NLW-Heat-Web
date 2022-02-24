import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe a sua mensagem!</strong>
      <a href="#" className={styles.signInWithGitHub}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </a>
    </div>
  )
}