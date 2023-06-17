import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

export default function SignupForm() {

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        return;
    };
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

// export default function SignupForm() {
//     const [email, setEmail] = useState('');
    
//     const [password, setPassword] = useState('');

//     const handleEmailChange = event => {
//     setEmail(event.target.value)
//     };
//     const handlePasswordChange = event => {
//     setPassword(event.target.value)
//     }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           onChange={handleEmailChange}
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handlePasswordChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }